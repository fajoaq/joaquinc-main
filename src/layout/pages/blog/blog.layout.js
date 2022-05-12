import { useEffect } from "react";
import { styled } from "@mui/material/styles";

import { useTransitionState } from "../../../context/transition.context";
import { ArticleNavigation } from "../common/navigation.component";
import { TRANSITION_CLASS, constants } from "../../../constants/constants";
import {
  ContentContainer,
  Section,
} from "../../../components/containers.component";

const StyledSection = styled(Section)`
  padding-top: 3.5em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 2.5em;
  }
`;

const BlogLayout = ({
  children,
  toArticle = "work",
  toArticleTitle = "my work",
  ...rest
}) => {
  const [transitionState, setTransitionState] = useTransitionState();

  // because transitions wont work when heights are the same
  // we add one to the new height
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
  // to set it as the main transition, for use in transitionend event listeners
  return (
    <ContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...rest}
    >
      <StyledSection
        container
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <ArticleNavigation
          className="inline-padding"
          fromArticle="Blog"
          toArticle={toArticle}
          toArticleTitle={toArticleTitle}
          mainHeading="h1"
        />

        {children}
      </StyledSection>
    </ContentContainer>
  );
};
BlogLayout.displayName = "BlogLayout";

export { BlogLayout };
