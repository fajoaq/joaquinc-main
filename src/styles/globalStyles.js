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
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
    background-attachment: fixed;
  }

  && #__next {
    display: grid;
    position: relative;
    align-content: start;
    min-height: 100vh;
    height: 100%;
  }

  && nav#main-nav {
    margin-top: 7rem;
    pointer-events: none;

    ${theme.breakpoints.down("sm")} {
      margin-top: 2rem;
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

  && a {
    cursor: pointer;
    color:  ${theme.palette.text.main};
    text-decoration: none;
    text-decoration-thickness: 0.09em;
    transition: color, text-decoration-thickness, ${
      constants.buttonHover
    }ms ease-in-out;
  }

  && .article-text a:link {
    color: ${theme.palette.text.main};
    text-decoration: underline;
    text-decoration-thickness: 0.09em;
    text-underline-offset: 0.04em;
  }

  && .article-text a:hover {
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
`;

export { globalStyles };
