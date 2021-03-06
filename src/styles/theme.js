import { createTheme } from "@mui/material/styles";
import {
  transparent,
  white,
  chartreuse,
  redditOrange,
  golden,
  carbon,
  linkBlue,
  linkVisited,
  almostWhite,
  nightGrey,
  errorRed,
  facebookBlue,
  twitterBlue,
} from "./colors";

import { constants } from "../constants/constants";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const palette = {
  text: {
    main: carbon,
    light: white,
    link: linkBlue,
    linkVisited: linkVisited,
    navLink: "#00000070",
    deselected: white,
  },
  primary: {
    main: golden,
  },

  secondary: {
    main: redditOrange,
  },
  tertiary: {
    main: chartreuse,
  },
  error: {
    main: errorRed,
  },
  background: {
    main: almostWhite,
    light: white,
    fallback: white,
    fade: transparent,
  },
  social: {
    main: golden,
    facebook: facebookBlue,
    twitter: twitterBlue,
    active: white,
    inactive: nightGrey,
  },
};

const typography = {
  fontFamily: ["Calibri", "San Francisco", "Sans-Serif"].join(","),
  nav: {
    fontFamily: ["Calibri", "San Francisco", "Sans-Serif"].join(","),
    fontWeight: 100,
  },
  h1: { fontSize: "3.9rem" },
  h2: { fontSize: "3rem" },
  h3: { fontSize: "1.9rem" },
  h4: { fontSize: "1.6rem" },
  intro: { fontSize: "1.4rem" },
  body1: { fontSize: "1.1rem" },
  body2: {
    fontStyle: "italic",
  },
  cta: {
    fontSize: "1.2rem",
    fontWeight: 500,
  },
  learnMore: {
    fontWeight: 500,
  },
  articleLink: {
    fontSize: "1.4em",
  },
};

const components = {
  MuiFormLabel: {
    styleOverrides: {
      asterisk: {
        color: "#db3131",
        "&$error": {
          color: "#db3131",
        },
      },
    },
  },
};

// The material ui theme
const theme = createTheme({
  spacing: 6,
  constants,
  palette: palette,
  typography: typography,
  components: components,
  breakpoints: breakpoints,
});

export { theme, constants };
