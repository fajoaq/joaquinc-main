import { theme } from "./theme";
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

  && a {
    cursor: pointer;
    color:  ${theme.palette.text.main};
  }

  && .article-text a {
    color:  ${theme.palette.text.link};
  }

  && #__next {
    display: grid;
    position: relative;
    height: 100%;
    pointer-events: all;
  }

  && #__next.transition { 
    pointer-events: none;
  }

  && nav {
    margin-top: 7rem;

    ${theme.breakpoints.down("sm")} {
      margin-top: 2rem;
    }
  }

  && main {
    grid-row: 2;
    grid-column: 1;
    display: grid;
    position: relative;
    overflow: hidden;
    width: 100%;
    opacity: 0.9;
    background-color: ${theme.palette.background.main};
  }

  && section.active {
    pointer-events: all;
    visibility: visible;
  }

  && section > article {
    min-height: ${theme.constants.minContainerHeight}px;
  }

  && section > article > div {
    padding: 3.5em 2.5em 3.5em 2.5em;

    ${theme.breakpoints.down("sm")} {
      padding: 2.5em 1.5em 2.5em 1.5em;
    }
  }

  && article.active-enter-done {
    opacity: 1;
  }

  && .article-title, .article-text {
    ${textDropShadow(0.07, `255,255,255`, 1)}
  }
`;

export { globalStyles };

/* 
    box-shadow: 0 10px 6px -6px rgb(0 0 0 / 35%);
*/
