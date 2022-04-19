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
    background: conic-gradient(from 270deg, transparent 0%, #ffffff 25%, transparent 50%, #f1f1f1 75%, transparent 100%) no-repeat,
    linear-gradient(175deg, #ffffff 36%, rgba(246, 246, 246, 1) 80%, #f1f1f1 100%) no-repeat;
  }

  & a {
    cursor: pointer;
  }
`;

export { globalStyles };
