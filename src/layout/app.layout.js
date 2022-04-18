import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledMaxContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const StyledFlexColumn = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AppLayout = ({ children }) => (
  <StyledMaxContainer maxWidth="lg" disableGutters>
    {children}
  </StyledMaxContainer>
);

export { AppLayout };
