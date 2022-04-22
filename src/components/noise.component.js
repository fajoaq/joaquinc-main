import { styled } from "@mui/material/styles";

const backgroundMain2 = `radial-gradient(at 100% 100%, rgba(255,215,0,1) 0%, transparent 70%, transparent 100%) no-repeat 100% 100%/50% 50%,
  radial-gradient(rgba(255,87,0,1) 0%, transparent 70%) no-repeat 50% 100%/90% 90%`;

const StyledDiv = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.16;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: ${backgroundMain2}, url(/static/bg-turbulence.svg);
  filter: contrast(170%) brightness(170%);
`;

const Noise = () => <StyledDiv id="noiseFilter" />;

export { Noise };
