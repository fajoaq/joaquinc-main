import { styled } from "@mui/material/styles";

const Container = styled("div")`
  position: absolute;
  display: grid;
  height: 100%;
  width: 100%;
  z-index: -10;
  pointer-events: none;
`;

const sharedStyles = `
grid-column: 1;
  grid-row: 1;
  overflow: hidden; // added for pseudo-element
  position: fixed; // added for pseudo-element
  height: 100%;
  width: 100%;

  // Fixed-position background image
  &::before {
    content: "";
    position: fixed; // instead of background-attachment
    width: 100%;
    height: 100%;
    background-color: white;
    will-change: transform; // creates a new paint layer
  }
`;

// The component uses a PNG and a SVG layered on top
// the SVG has turbulence that targets #noiseFilter, and filter accentuates this effect
const NoiseBg = styled("div")`
  ${sharedStyles}

  filter: contrast(170%) brightness(170%);
  opacity: 0.16;

  &&::before {
    background: url(/static/site/grain.png),
      url(/static/site/bg-turbulence.svg) no-repeat;
    background-size: cover;
  }
`;

const Background = styled("div")`
  ${sharedStyles}

  z-index: -1;

  &&::before {
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(90, 92, 106, 1) 0%,
      rgba(32, 45, 58, 1) 81.3%
    );
    background-size: cover;
  }
`;

const Noise = () => (
  <Container role="presentation">
    <NoiseBg id="noiseFilter" />
    <Background />
  </Container>
);

export { Noise };
