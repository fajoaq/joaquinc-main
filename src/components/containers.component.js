import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import { constants } from "../constants/constants";

const ContentContainer = styled("div")`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  height: max-content;

  & .initial {
    opacity: 0;
  }

  & .entered {
    opacity: 1;
    transition: opacity ${constants.navTimeout}ms ease-in-out;
  }

  & .exited {
    opacity: 0;
    transition: opacity ${constants.navTimeout}ms ease-in-out;
  }
`;
ContentContainer.defaultProps = {
  id: "content-container",
};

const Section = styled(Grid)`
  ${({ theme }) => `

  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  height: max-content;
  padding: 3.5em 2.5em 3.5em 2.5em;

  ${theme.breakpoints.down("sm")} {
    padding: 2.5em 1.5em 2.5em 1.5em;
  }

  && .external-link-container {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    display: flex;
    justify-content: center;
    aspect-ratio: ${constants.aspectRatio.default};
    color: ${theme.palette.text.main}B3;
  }

  && .external-link-container img {
    filter: brightness(110%);
  }

  && .external-link-container img:hover {
    filter: brightness(86%);
    transition: filter ${constants.buttonHover}ms ease-in-out;
  }

  && .internal-link-box {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    min-height: 20%;
    z-index: 999;
    color: white;
    background-color: rgba(0, 0, 0, 0.66);
  }

  && .internal-link__icon {
    margin-right: 0.2em;
  }

  & .internal-link:hover {
    color: ${theme.palette.tertiary.main};
    transition: color ${constants.navTimeout}ms ease-in-out;
  }

  && .internal-link:active:hover {
    color: ${theme.palette.secondary.main};
  }

  && .internal-link.wip {
    pointer-events: all;
    cursor: help;
  }
  && .internal-link.wip:hover {
    color: ${theme.palette.secondary.main}
  }
  && .internal-link.wip:hover:active {
    color: white;
    transition: color ${constants.buttonHover - 60}ms ease-in-out;
  }
`}
`;
Section.defaultProps = {
  id: "main-section",
  component: "section",
};

export { ContentContainer, Section };
