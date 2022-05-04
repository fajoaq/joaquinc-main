import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import { constants } from "../constants/constants";

// receives classname from articleData mapping
const ContentContainer = styled("section")`
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

// receives classname from csstransition with ref
const Article = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  height: max-content;
`;

export { ContentContainer, Article };
