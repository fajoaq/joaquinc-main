import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 2em 0;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
`;

const Footer = () => (
  <FooterContainer maxWidth="lg">
    &#x0007C; &#169; {new Date().getFullYear()} Francis Joaquin &#x0007C;
  </FooterContainer>
);

export { Footer };
