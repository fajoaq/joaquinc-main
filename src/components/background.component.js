import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import { useTransitionState } from "../context/transition.context";
import { constants } from "../constants/constants";

const StyledBox = styled(Box)`
  grid-row: 2;
  grid-column: 1;
  z-index: -1;
  pointer-events: none;

  & #background.initial {
    min-height: ${({ dimensions }) => dimensions}px;
    max-height: ${({ dimensions }) => dimensions}px;
    opacity: 0;
  }

  & #background.entered {
    opacity: 1;
  }

  & #background.exited {
    opacity: 0;
    transition-delay: ${constants.navTimeout}ms;
    transition-property: opacity;
    transition-duration: 20ms;
    transition-timing-function: ease-in-out;
  }
`;

const StyledInnerBox = styled(Box)`
  width: 100%;
  min-height: 0;
  max-height: 0;
  opacity: 0;
  background-color: ${({ theme }) => theme.palette.background.main};
`;

const Background = (props) => {
  const [transitionState] = useTransitionState();

  return (
    <StyledBox
      className={`${transitionState.backgroundTransition} ${constants.classNames.transitionContainer}`}
      dimensions={transitionState.mainContainerHeight}
      disabled={true}
    >
      <StyledInnerBox
        id="background"
        className={`${transitionState.backgroundTransition} ${constants.classNames.mainTransition}`}
        {...props}
        ref={transitionState.backgroundRef}
        disabled={true}
      />
    </StyledBox>
  );
};

export { Background };
