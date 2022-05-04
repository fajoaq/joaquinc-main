import { useState, createRef } from "react";
import { createContainer } from "react-tracked";

const backgroundRef = createRef();
const foregroundRef = createRef();
const contentRef = createRef();

const initialState = {
  backgroundRef: backgroundRef,
  foregroundRef: foregroundRef,
  contentRef: contentRef,
  mainContainerHeight: 0,
  backgroundTransition: "",
  contentTransition: "initial",
  foregroundTransition: "",
  navigate: () => {},
};

const useMyState = () => useState(initialState);

export const {
  Provider: TransitionStateProvider,
  useTracked: useTransitionState,
} = createContainer(useMyState);
