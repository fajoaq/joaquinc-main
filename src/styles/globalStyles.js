import { theme } from "./theme";

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
    background: ${theme.palette.background.main}, url(/static/bg-turbulence.svg);
  }

  & a {
    cursor: pointer;
  }

  && #__next {
    height: 100%;
  }

  && main {
    position: relative;
    min-height: 0;
    max-height: 0;
    width: 100%;
    overflow: hidden;
    background-color: rgba(255,255,255,0.9);
    box-shadow: 0px 2px 0px 0px rgb(0 0 0 / 25%);
    transition:  min-height 500ms ease-in-out, max-height 500ms ease-in-out;
  }
`;

export { globalStyles };
