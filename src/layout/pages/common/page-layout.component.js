import { useEffect } from "react";

import { ArticleNavigation } from "./navigation.component";
import { useTransitionState } from "../../../context/transition.context";
import { TRANSITION_CLASS, constants } from "../../../constants/constants";
import {
  ContentContainer,
  Section,
} from "../../../components/containers.component";

const PageLayout = ({
  children,
  sectionClassName,
  navigationHeader = true,
  fromArticle,
  toArticle,
  toArticleTitle,
  ...rest
}) => {
  const [transitionState, setTransitionState] = useTransitionState();

  // because transitions wont work when heights are the same
  // we subtract one from new height
  useEffect(() => {
    const { offsetHeight } = transitionState.contentRef.current;
    const newHeight =
      transitionState.mainContainerHeight === offsetHeight
        ? offsetHeight - 1
        : offsetHeight;

    setTransitionState((prev) => ({
      ...prev,
      mainContainerHeight: newHeight,
    }));
  }, []);

  // we mark one of the container's children with a special class
  // to mark it as the main transition, for use in transitionend event listeners
  return (
    <ContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...rest}
    >
      <Section
        className={
          sectionClassName
            ? sectionClassName
            : `${transitionState.contentTransition} ${constants.classNames.mainTransition}`
        }
        ref={transitionState.contentRef}
      >
        {navigationHeader && (
          <ArticleNavigation
            className="inline-padding"
            fromArticle={fromArticle}
            toArticle={toArticle}
            toArticleTitle={toArticleTitle}
          />
        )}

        {children}
      </Section>
    </ContentContainer>
  );
};

export { PageLayout };
