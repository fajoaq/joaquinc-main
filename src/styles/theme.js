import { createTheme } from "@mui/material/styles";
import {
  transparent,
  white,
  limeGreen,
  bloogOrange,
  golden,
  carbon,
  linkBlue,
  almostWhite,
  nightGrey,
  lighterGrey,
  slateGray,
  errorRed,
  facebookBlue,
  twitterBlue,
} from "./colors";

const backgroundMain = `conic-gradient(from 270deg, transparent 0%, #ffffff 25%, transparent 50%, #f1f1f1 75%, transparent 100%) no-repeat,
linear-gradient(175deg, #ffffff 36%, rgba(245,245,245,1) 80%, #f1f1f1 100%) no-repeat;`;

const constants = {
  minContainerHeight: 532,
};

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
    link: linkBlue,
    deselected: white,
  },
  primary: {
    main: golden,
  },

  secondary: {
    main: limeGreen,
  },
  tertiary: {
    main: bloogOrange,
  },
  error: {
    main: errorRed,
  },
  background: {
    main: backgroundMain,
    light: almostWhite,
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
  fontFamily: ["Gadugi", "San Francisco", "Sans-Serif"].join(","),
  nav: {
    fontFamily: ["Gadugi", "San Francisco", "Sans-Serif"].join(","),
    fontWeight: 100,
  },
  h1: { fontSize: "3.9rem" },
  h2: { fontWeight: 200, fontSize: "3rem" },
  h3: { fontSize: "1.9rem" },
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

export { theme };
