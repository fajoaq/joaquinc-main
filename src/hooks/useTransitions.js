import { useRouter } from "next/router";
import { useEffect, createRef, useState } from "react";

import { useTransitionState } from "../context/transition.context";
import { TRANSITION_CLASS, constants } from "../constants/constants";

const newRoute = createRef();

const STATE_ENTER = {
  foregroundTransition: TRANSITION_CLASS.initial,
};

const STATE_INITIAL = {
  ...STATE_ENTER,
};

const STATE_ENTER_COMPLETE = {
  foregroundTransition: `${TRANSITION_CLASS.initial} ${TRANSITION_CLASS.exited}`,
  contentTransition: TRANSITION_CLASS.entered,
  backgroundTransition: `${TRANSITION_CLASS.initial} ${TRANSITION_CLASS.entered}`,
};

const STATE_EXIT = {
  foregroundTransition: TRANSITION_CLASS.initial,
  contentTransition: TRANSITION_CLASS.exited,
  backgroundTransition: `${TRANSITION_CLASS.initial} ${TRANSITION_CLASS.exited}`,
};

const useTransitions = () => {
  const router = useRouter();
  const [transitionState, setTransitionState] = useTransitionState();
  const [setupDone, setSetupDone] = useState(false);

  const removeAllListeners = () => {
    // this function should remove all listeners invoked by other functions
    transitionState.foregroundRef.current?.removeEventListener(
      "transitionend",
      handleResizeDone
    );
    transitionState.contentRef.current.removeEventListener(
      "transitionend",
      handleContentExited
    );
    transitionState.foregroundRef.current?.removeEventListener(
      "transitionend",
      handleSetupDone
    );
  };
  //
  const handleResizeDone = (e) => {
    if (
      e.target.classList.contains(constants.classNames.mainTransition) === false
    )
      return; // bubbling event check

    removeAllListeners();

    setTransitionState((prev) => ({
      ...prev,
      ...STATE_ENTER_COMPLETE,
    }));
  };
  //
  const handleContentExited = (e) => {
    if (
      e.target.classList.contains(constants.classNames.mainTransition) === false
    )
      return; // bubbling event check

    removeAllListeners();

    router.push(newRoute.current, undefined, { scroll: false });
  };
  //
  const handleClick = (route) => {
    if (!route) return;

    if (newRoute.current === null || newRoute.current === undefined)
      newRoute.current = window.location.href;

    if (route === newRoute.current || route.length === 0) return; // same route, bad route

    newRoute.current = route; // capture the new route
    transitionState.contentRef.current.addEventListener(
      "transitionend",
      handleContentExited
    );

    setTransitionState((prev) => ({
      ...prev,
      ...STATE_EXIT,
    }));
  };
  //
  useEffect(() => {
    // this useffect runs on new content height (new route)
    // is this the initial render ?
    if (!setupDone) return;

    transitionState.foregroundRef.current?.addEventListener(
      "transitionend",
      handleResizeDone
    );

    setTransitionState((prev) => ({
      ...prev,
      ...STATE_ENTER,
    }));
  }, [transitionState.mainContainerHeight]);
  //
  //
  // setup (initial render)
  const handleSetupDone = (e) => {
    if (
      e.target.classList.contains(constants.classNames.mainTransition) === false
    )
      return; // bubbling event check

    removeAllListeners();

    setTransitionState((prev) => ({
      ...prev,
      ...STATE_ENTER_COMPLETE,
    }));
    setSetupDone(true);
  };

  useEffect(() => {
    transitionState.foregroundRef.current?.addEventListener(
      "transitionend",
      handleSetupDone
    );

    setTransitionState((prev) => ({
      ...prev,
      ...STATE_INITIAL,
      navigate: handleClick,
    }));
  }, []);

  return [handleClick];
};

export { useTransitions };
