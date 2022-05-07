import { useEffect } from "react";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../../context/transition.context";
import { ArticleNavigation } from "../common/navigation.component";
import { LatesPostPreview, BlogPostsCarousel } from "./blog.component";
import { TRANSITION_CLASS, constants } from "../../../constants/constants";
import {
  ContentContainer,
  Section,
} from "../../../components/containers.component";

const BlogArticle = (props) => {
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

  const handleClick = (e) => {
    e.preventDefault();
    transitionState.navigate(e.target.href);
  };

  // we mark one of the container's children with a special class
  // to set it as the main transition, for use in transitionend event listeners
  return (
    <ContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...props}
    >
      <Section
        container
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <ArticleNavigation
          fromArticle="Blog"
          toArticle="Work"
          mainHeading="h1"
        />

        <LatesPostPreview component="article" linkToArticle={handleClick} />

        <article style={{ width: "100%" }}>
          <Typography
            component="h2"
            variant="h4"
            marginBottom={constants.spacing.small}
          >
            New posts
          </Typography>
          <BlogPostsCarousel />
        </article>
      </Section>
    </ContentContainer>
  );
};
BlogArticle.displayName = "BlogArticle";

export { BlogArticle };
