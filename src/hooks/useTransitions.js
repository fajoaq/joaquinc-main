import { useEffect, useState, createRef, useRef } from "react";

import { constants } from "../styles/theme";

const reactRoot = createRef(undefined); // the root nextjs element
const mainRef = createRef(undefined); // main element
const previouslyActive = createRef(undefined); // used to aid transition to new element
const newIndex = createRef(0); // capture nav element index when transitinoning

const useTransitions = (defaultArticleIndex) => {
  const childList = useRef([]); // list of elements to transition between
  const [activeArticleIndex, setActiveArticleIndex] = useState(undefined); // nav/article index
  const [mainContainerHeight, setMainHeight] = useState(undefined); // holds max-witdth/height
  const [transition, setTransition] = useState(false); // toggles parent transition (height)
  const [childTransition, setChildTransition] = useState(false); // toggles active childlist elements

  const removeAllListeners = () => {
    // this function should contain all listeners invoked by other functions
    mainRef.current.removeEventListener("transitionend", handleResizeDone);
    mainRef.current.removeEventListener("transitionend", handleParentExited);
    previouslyActive.current.removeEventListener(
      "transitionend",
      handleChildExited
    );
  };
  //
  const handleResizeDone = (e) => {
    if (e.target !== mainRef.current) return;
    removeAllListeners();
    // initial setup ends here, we set index to the default
    // if activeArticleIndex is still undefined (first render)
    setActiveArticleIndex(
      activeArticleIndex === undefined ? defaultArticleIndex : newIndex.current
    );
    setChildTransition(true);
    setTransition(true);

    setTimeout(() => {
      reactRoot.current.classList.toggle("transition");
    }, constants.navTimeout);
  };
  //
  const handleParentExited = (e) => {
    if (e.target !== mainRef.current) return;
    removeAllListeners();

    const { offsetHeight } = childList.current[newIndex.current].current;
    mainRef.current.addEventListener("transitionend", handleResizeDone);

    setMainHeight(offsetHeight);
    setTransition(true);
  };
  //
  const handleChildExited = (e) => {
    if (e.target !== previouslyActive.current) return;
    removeAllListeners();

    mainRef.current.addEventListener("transitionend", handleParentExited);
    setTransition(false);
  };
  //
  const handleNavClick = (index) => {
    if (index === activeArticleIndex) return; // clicked the same nav button
    removeAllListeners();

    reactRoot.current.classList.toggle("transition");
    previouslyActive.current = childList.current[newIndex.current].current;
    previouslyActive.current.addEventListener(
      "transitionend",
      handleChildExited
    );

    newIndex.current = index;
    setChildTransition(false);
  };
  //
  // initial setup
  useEffect(() => {
    reactRoot.current = document.getElementById("__next");
    mainRef.current.addEventListener("transitionend", handleResizeDone);
    previouslyActive.current = childList.current[0].current;
    const { offsetHeight } = previouslyActive.current;
    newIndex.current = 0;

    reactRoot.current.classList.toggle("transition");
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
