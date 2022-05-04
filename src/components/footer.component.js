import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { constants } from "../constants/constants";

const FooterContainer = styled(Container)`
  grid-row: 4;
  grid-column: 1;
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => `${theme.spacing(constants.spacing.medium)}`} auto;
  padding: 0;
  color: rgba(255, 255, 255, 0.6);
`;

const Footer = () => (
  <FooterContainer maxWidth="lg">
    &#x0007C; &#169; {new Date().getFullYear()} Francis Joaquin &#x0007C;
  </FooterContainer>
);

export { Footer };
