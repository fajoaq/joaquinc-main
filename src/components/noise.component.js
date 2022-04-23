import { styled } from "@mui/material/styles";

const backgroundMain1 = `radial-gradient(#f6f6f6 0%, transparent 100%)`;

const backgroundMain2 = `linear-gradient(242deg, transparent 0%, BurlyWood 100%)`;

const StyledDiv = styled("div")`
  position: absolute;
  height: 130%;
  width: 114%;
  top: -30%;
  left: -14%;
  opacity: 1;
  z-index: -1;
  background: ${backgroundMain1}, ${backgroundMain2},
    url(/static/bg-turbulence.svg);
  background-attachment: fixed;
  filter: contrast(170%) brightness(170%);
`;

const Noise = () => <StyledDiv id="noiseFilter" />;

export { Noise };
