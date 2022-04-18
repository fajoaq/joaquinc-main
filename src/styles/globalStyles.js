import { theme } from "./theme";

const globalStyles = `
  html {
    min-height: 100vh;
    scrollbar-width: thin;
    overflow-x: hidden;
    overflow-y: scroll;
    overflow-y: overlay;
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
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.palette.text.main}; 
    background-color: ${theme.palette.background.main} !important;
  }
`;

export { globalStyles };
