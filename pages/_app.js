import * as React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";

import GlobalStyles from "@mui/material/GlobalStyles";
import { SEO } from "../src/constants/seo";
import { globalStyles } from "../src/styles/globalStyles";
import { createEmotionCache } from "../src/styles/createEmotionCache";
import { theme } from "../src/styles/theme";
const clientSideEmotionCache = createEmotionCache();
const responsiveTheme = responsiveFontSizes(theme);

import { TransitionStateProvider } from "../src/context/transition.context";
import { AppLayout } from "../src/layout/app-layout";
import { NavLayout } from "../src/layout/nav-layout";
import { Footer } from "../src/components/footer.component";
// Bg Noise Component
import { Noise } from "../src/components/noise.component";

// Client-side cache, shared for the whole session of the user in the browser.

export default function WebApp(props) {
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
        <TransitionStateProvider>
          <NavLayout fontSize={{ xs: "3rem", md: "4rem" }} color="text.main" />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
          <Footer />
          <Noise />
        </TransitionStateProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

WebApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
