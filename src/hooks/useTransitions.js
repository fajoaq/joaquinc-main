import { useEffect, useState, createRef, useRef, Fragment } from "react";

const mainRef = createRef(undefined);
const previousActive = createRef(undefined);
const newIndex = createRef(0);

const useTransitions = () => {
  const childList = useRef([]);
  const [activeArticleIndex, setActiveArticleIndex] = useState(undefined);
  const [mainContainerHeight, setMainHeight] = useState(undefined);
  const [transition, setTransition] = useState(false);
  const [childTransition, setChildTransition] = useState(false);

  const removeAllListeners = () => {
    // remove listeners
    mainRef.current.removeEventListener("transitionend", handleResizeDone);
    previousActive.current.removeEventListener(
      "transitionend",
      handleChildExited
    );
    mainRef.current.removeEventListener("transitionend", handleResizeDone);
  };
  //
  const handleResizeDone = () => {
    console.log("handleResizeDone");
    removeAllListeners();

    setActiveArticleIndex(newIndex.current);
    setChildTransition(true);
  };
  //
  const handleResize = () => {
    console.log("handleResize");
    removeAllListeners();
    mainRef.current.addEventListener("transitionend", handleResizeDone);

    const { offsetHeight } = childList.current[newIndex.current].current;
    setMainHeight(offsetHeight);
  };
  //
  const handleChildExited = () => {
    console.log("handleChildExited");
    removeAllListeners();

    mainRef.current.addEventListener("transitionend", handleResizeDone);
    handleResize();
  };
  //
  const handleNavClick = (index) => {
    console.log("handleNavClick");
    if (index === activeArticleIndex) return;
    previousActive.current = childList.current[newIndex.current].current;
    previousActive.current.addEventListener("transitionend", handleChildExited);

    newIndex.current = index;
    setChildTransition(false);
  };
  //
  // initial setup
  useEffect(() => {
    mainRef.current.addEventListener("transitionend", handleResizeDone);
    previousActive.current = childList.current[0].current;
    const { offsetHeight } = previousActive.current;
    newIndex.current = 0;

    setMainHeight(offsetHeight);
    setTransition(true);
  }, []);

  return [
    childTransition,
    handleNavClick,
    mainRef,
    childList,
    activeArticleIndex,
    mainContainerHeight,
    transition,
  ];
};

export { useTransitions };
