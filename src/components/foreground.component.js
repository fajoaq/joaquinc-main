import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useTransitionState } from "../context/transition.context";

import { constants } from "../constants/constants";

const StyledBox = styled(Box)`
  grid-row: 2;
  grid-column: 1;
  z-index: 10;
  pointer-events: none;

  & #foreground.initial {
    min-height: ${({ dimensions }) => dimensions}px;
    max-height: ${({ dimensions }) => dimensions}px;
    opacity: 1;
    transition: opacity, min-height, max-height,
      ${constants.navTimeout}ms ease-in-out;
  }

  & #foreground.exited {
    opacity: 0;
    transition-delay: ${constants.transitionDelay}ms;
    transition-property: opacity;
    transition-duration: ${constants.navTimeout}ms;
    transition-timing-function: ease-in-out;
  }

  & #foreground.entered {
    opacity: 1;
    transition: opacity ${constants.navTimeout}ms ease-in-out;
  }
`;

const StyledInnerBox = styled(Box)`
  width: 100%;
  min-height: 0;
  max-height: 0;
  opacity: 0;
  background-color: ${({ theme }) => theme.palette.background.main};
`;

const ForeGround = (props) => {
  const [transitionState] = useTransitionState();
  return (
    <StyledBox
      className={`${transitionState.foregroundTransition} ${constants.classNames.transitionContainer}`}
      dimensions={transitionState.mainContainerHeight}
      disabled={true}
    >
      <StyledInnerBox
        id="foreground"
        className={`${transitionState.foregroundTransition} ${constants.classNames.mainTransition}`}
        {...props}
        ref={transitionState.foregroundRef}
        disabled={true}
      />
    </StyledBox>
  );
};

export { ForeGround };
