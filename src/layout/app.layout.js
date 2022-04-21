import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledMaxContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4em 0;
  tranisition: opacity 1s ease-in-out;
`;

const AppLayout = ({ children, ...rest }) => (
  <StyledMaxContainer
    id="max-width-container"
    maxWidth="lg"
    disableGutters
    {...rest}
  >
    {children}
  </StyledMaxContainer>
);

export { AppLayout };
