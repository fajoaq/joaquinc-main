import { theme } from "./theme";
import { constants } from "../constants/constants";
import { textDropShadow } from "./utils/text-shadow";

// globalStyles is not part of MUI
// must import theme here to access properties

const globalStyles = `
  html {
    box-sizing: border-box;
  }

  html::-webkit-scrollbar { 
      width: 9px !important;
      background-color: #dbdbdb;
   }
  html::-webkit-scrollbar-thumb {
    background-color: #bababa;
  }

  body {
    scrollbar-width: thin;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.palette.text.main};
  }

  figure {
    margin: 0;
  }

  && #__next {
    display: grid;
    position: relative;
    align-content: start;
    min-height: 100vh;
    height: 100%;
  }

  && nav#main-nav {
    margin-top: 6rem;
    pointer-events: none;

    ${theme.breakpoints.down("sm")} {
      margin-top: 2.6rem;
    }
  }

  && nav#main-nav.active {
    pointer-events: all;
  }

  && main {
    grid-row: 2;
    grid-column: 1;
    display: grid;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  && .article-title, .article-text {
    ${textDropShadow(0.07, `255,255,255`, 1)}
  }

  && a, figure a {
    cursor: pointer;
    color:  ${theme.palette.text.main};
    text-decoration: none;
    text-decoration-thickness: 0.09em;
    transition: color, text-decoration-thickness, ${
      constants.buttonHover
    }ms ease-in-out;
  }

  & figure a {
    text-decoration: underline;
    text-decoration-thickness: 0.09em;
    font-style: normal;
  }

  && .article-text a:link {
    color: ${theme.palette.text.main};
    text-decoration: underline;
    text-decoration-thickness: 0.09em;
    text-underline-offset: 0.04em;
  }

  && .article-text a:hover, figure a:hover {
    text-decoration-color: ${theme.palette.text.link};
    text-decoration-thickness: 0.15em;
  }

  && .article-text a:visited {
    color: ${theme.palette.text.linkVisited};
  }

  && .inline-padding {
    padding-left: 2.5em;
    padding-Right: 2.5em;

    ${theme.breakpoints.down("sm")} {
      padding-left: 1.5em;
      padding-Right: 1.5em;
    }
  }

  && .inline-padding-vertical {
    padding-top: 3.5em;
    padding-bottom: 3.5em;

    ${theme.breakpoints.down("sm")} {
      padding-top: 2.5em;
      padding-bottom: 2.5em;
    }
  }

  & .loader-container {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 999;
    pointer-events: none;
  }

  & .loader {
    position: fixed;
    top: 50%;
    left: calc(50% - 60px);
    border: 16px solid #fff;
    border-radius: 50%;
    border-top: 16px solid ${theme.palette.primary.main};
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }
  
  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export { globalStyles };
