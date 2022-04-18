import crypto from "crypto";
import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
//import { theme } from "../styles/theme";
import { v4 } from "uuid";

import { SEO } from "../src/seo/seo";
import { createEmotionCache } from "../src/styles/createEmotionCache";

const generateCsp = () => {
  const production = process.env.NODE_ENV === "production";

  // generate random nonce converted to base64. Must be different on every HTTP page load
  const hash = crypto.createHash("sha256");
  hash.update(v4());
  const nonce = hash.digest("base64");

  let csp = ``;
  csp += `default-src 'self';`;
  csp += `base-uri 'self';`;
  csp += `img-src 'self' data:;`;
  csp += `style-src https://fonts.googleapis.com 'unsafe-inline';`; // NextJS requires 'unsafe-inline'
  csp += `script-src 'nonce-${nonce}' 'self' ${
    production ? "" : "'unsafe-eval'"
  };`; // NextJS requires 'self' and 'unsafe-eval' in dev (faster source maps)
  csp += `font-src 'self';`;
  if (!production) csp += `connect-src 'self';`;

  return [csp, nonce];
};

/* 
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SEO.SITE_NAME} />
          <meta property="og:title" content={SEO.SITE_TITLE} />
          <meta property="og:description" content={SEO.SITE_DESCRIPTION} />
          <meta property="og:image" content={SEO.SITE_IMAGE} />
          <meta name="twitter:card" content={SEO.SITE_IMAGE} />
          <meta name="twitter:site" content={SEO.SITE_NAME} />
          <meta name="twitter:title" content={SEO.SITE_TITLE} />
          <meta name="twitter:description" content={SEO.SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SEO.SITE_IMAGE} />
*/

/* 
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
*/

/* 
          <meta name="theme-color" content={theme.palette.primary.main} />
*/

// change robot meta tag in production

export default class MyDocument extends Document {
  render() {
    const [csp, nonce] = generateCsp();

    return (
      <Html lang="en" dir="ltr">
        <Head nonce={nonce}>
          <meta charSet="utf-8" />
          <meta property="csp-nonce" content={nonce} />
          <meta httpEquiv="Content-Security-Policy" content={csp} />
          <meta name="author" content={SEO.SITE_AUTHOR} />
          {/* social */}

          {/* PWA primary color */}

          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
