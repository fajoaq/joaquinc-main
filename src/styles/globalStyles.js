import { theme } from "./theme";

/* 



*/

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
    background: conic-gradient(from 270deg, transparent 0%, #ffffff 25%, transparent 50%, #f1f1f1 75%, transparent 100%) no-repeat,
    linear-gradient(175deg, #ffffff 36%, rgba(246, 246, 246, 1) 80%, #f1f1f1 100%) no-repeat;
  }

  & a {
    cursor: pointer;
  }

  && #__next {
    height: 100%;
  }

  && main {
    position: relative;
    min-height: ${theme.constants.minContainerHeight}px;
    max-height: ${theme.constants.minContainerHeight}px;
    width: 100%;
    overflow: hidden;
    background-color: rgba(255,255,255,0.9);
    box-shadow: 0px 2px 0px 0px rgb(0 0 0 / 25%);
    transition:  min-height 500ms ease-in-out, max-height 500ms ease-in-out;
  }

  && main article {
    height: max-content;

    transition: opacity 600ms ease-in-out;
  }

  && main article.active {
  
  }
`;

export { globalStyles };
/* 

*/
