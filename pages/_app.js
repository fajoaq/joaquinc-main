import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

//import { StoreContextProvider } from "../src/context/store.context";
import GlobalStyles from "@mui/material/GlobalStyles";
//import { SEO } from "../src/utils/constants.utils";
import { SEO } from "../src/seo/seo";
import { globalStyles } from "../src/styles/globalStyles";
import { createEmotionCache } from "../src/styles/createEmotionCache";
import { theme } from "../src/styles/theme";
const clientSideEmotionCache = createEmotionCache();
const responsiveTheme = responsiveFontSizes(theme);

import { Noise } from "../src/components/noise.component";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{SEO.SITE_NAME}</title>
        <meta
          name="viewport"
          content={
            "user-scalable=1, initial-scale=1, " +
            "minimum-scale=1, width=device-width, height=device-height"
          }
        />
      </Head>
      <ThemeProvider theme={responsiveTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Component {...pageProps} />
        <Noise />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
