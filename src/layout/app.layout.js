import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const StyledMaxContainer = styled(Container)`
  background-color: red;
  height: 100vh;
`;

const AppLayout = ({ children }) => (
  <StyledMaxContainer maxWidth="lg">{children}</StyledMaxContainer>
);

export { AppLayout };
