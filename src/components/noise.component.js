import { styled } from "@mui/material/styles";

// The component uses a PNG and a SVG layered on top
// the SVG has turbulence that targets #noiseFilter, and filter accentuates this effect
const StyledDiv = styled("div")`
  grid-column: 1;
  grid-row: 1;
  height: 100%;
  width: 100%;
  opacity: 0.16;
  z-index: -1;
  background: url(/static/site/grain.png), url(/static/site/bg-turbulence.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: contrast(170%) brightness(170%);
`;

const Noise = () => <StyledDiv id="noiseFilter" />;

export { Noise };
