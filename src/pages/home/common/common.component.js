import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

// receives classname from articledata mapping
const ContentContainer = styled("section")`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  height: max-content;
  pointer-events: none;
  visibility: hidden;
  transition: visibility 500ms ease-in-out;
`;

// receives classname from csstransition with ref
const StyledArticle = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  height: max-content;
  opacity: 0;
  transition: opacity 500ms ease-in-out;
`;

export { ContentContainer, StyledArticle };
