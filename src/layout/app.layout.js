import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledMaxContainer = styled(Container)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4em 0;
  tranisition: opacity 1s ease-in-out;

  && .transition-enter-done {
    min-height: ${({ theme, dimensions }) =>
      dimensions == undefined
        ? theme.constants.mainContainerHeight
        : dimensions}px;

    max-height: ${({ theme, dimensions }) =>
      dimensions == undefined
        ? theme.constants.mainContainerHeight
        : dimensions}px;
  }
`;

const AppLayout = ({ children, dimensions, ...rest }) => (
  <StyledMaxContainer
    id="max-width-container"
    maxWidth="lg"
    disableGutters
    dimensions={dimensions}
    {...rest}
  >
    {children}
  </StyledMaxContainer>
);

export { AppLayout };
