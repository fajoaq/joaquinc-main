import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  width: 100%;
  opacity: 0.16;
  z-index: -1;
  background: url(/static/grain.png), url(/static/bg-turbulence.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: contrast(170%) brightness(170%);
`;

const Noise = () => <StyledDiv id="noiseFilter" />;

export { Noise };
