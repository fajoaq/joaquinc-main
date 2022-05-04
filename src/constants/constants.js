const constants = {
  minContainerHeight: 533,
  aspectRatio: {
    default: "4/3",
    portrait: "4/5",
  },
  buttonHover: 260,
  navTimeout: 380,
  transitionDelay: 100,
  spacing: {
    medium: 6,
    large: 12,
  },
  classNames: {
    transitionContainer: "transition-container",
    mainTransition: "main-transition",
    containerActiveClass: "active transition-container",
    containerInactiveClass: "inactive transition-container",
  },
};

const TRANSITION_CLASS = {
  initial: "initial",
  entering: "entering",
  exiting: "exiting",
  entered: "entered",
  exited: "exited",
};

export { constants, TRANSITION_CLASS };
