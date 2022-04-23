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
    background-color: #FAD961;
    background-image: linear-gradient( 359.8deg,  rgba(252,255,222,1) 2.2%, rgba(182,241,171,1) 99.3% );
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
    box-shadow:  0 4px 3px -3px rgb(0 0 0 / 25%);
    transition:  min-height 500ms ease-in-out, max-height 500ms ease-in-out;
  }
`;

export { globalStyles };
