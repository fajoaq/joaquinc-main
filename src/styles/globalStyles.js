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
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
  }

  & a {
    cursor: pointer;
    color:  ${theme.palette.text.main};
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

  && main {
    display: grid;
    position: relative;
    min-height: 0;
    max-height: 0;
    width: 100%;
    overflow: hidden;
    background-color: rgba(255,255,255,0.9);
    box-shadow:  0 4px 3px -3px rgb(0 0 0 / 25%);
    transition:  min-height 500ms ease-in-out, max-height 500ms ease-in-out;
  }

  && section > article > div {
    padding: 3.5em 2.5em 3.5em 2.5em;

    ${theme.breakpoints.down("sm")} {
      padding: 2.5em 1.5em 2.5em 1.5em;
    }
  }

  && section.active {
    pointer-events: all;
    visibility: visible;
  }

  && article.active-enter-done {
    opacity: 1;
  }
`;

export { globalStyles };

/* 
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(253,239,132,1) 0%, rgba(247,198,169,1) 62.0%, rgba(21,186,196,1) 150.3% );
    background-image: radial-gradient( circle farthest-corner at 1.3% 2.8%,  rgba(239,249,249,1) 0%, rgba(182,199,226,1) 100.2% );
 background-image: linear-gradient( 68.4deg,  rgba(248,182,204,1) 0.5%, rgba(192,198,230,1) 49%, rgba(225,246,240,1) 99.8% );

 background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% );
*/
