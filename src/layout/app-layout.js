import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

import { ForeGround } from "../components/foreground.component";
import { Background } from "../components/background.component";

const DimensionsContainer = styled(Container)`
  grid-row: 2;
  grid-column: 1;
  display: grid;
  position: relative;
  align-content: start;
`;

const AppLayout = ({ children, ...props }) => (
  <DimensionsContainer id="dimensions-container" maxWidth="lg" {...props}>
    <ForeGround />
    <main>{children}</main>
    <Background />
  </DimensionsContainer>
);
export { AppLayout };
