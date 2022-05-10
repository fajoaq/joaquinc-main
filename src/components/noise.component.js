import { styled } from "@mui/material/styles";

const StyledContainer = styled("div")`
  position: absolute;
  height: 100%;
  width: 100%;
  pointer-events: none;
`;

// The component uses a PNG and a SVG layered on top
// the SVG has turbulence that targets #noiseFilter, and filter accentuates this effect
const StyledDiv = styled("div")`
  overflow: hidden; // added for pseudo-element
  position: relative; // added for pseudo-element
  height: 100%;
  width: 100%;
  opacity: 0.16;
  z-index: -10;

  filter: contrast(170%) brightness(170%);

  // Fixed-position background image
  &::before {
    content: "";
    position: fixed; // instead of background-attachment
    width: 100%;
    height: 100%;
    background-color: white;
    background: url(/static/site/grain.png),
      url(/static/site/bg-turbulence.svg) no-repeat;
    background-size: cover;
    will-change: transform; // creates a new paint layer
  }
`;

const Noise = () => (
  <StyledContainer role="presentation">
    <StyledDiv id="noiseFilter" />
  </StyledContainer>
);

export { Noise };
