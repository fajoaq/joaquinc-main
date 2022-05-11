import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../../context/transition.context";
import { ArticleNavigation } from "../common/navigation.component";
import { LatesPostPreview, BlogPostsGrid } from "./blog.component";
import { TRANSITION_CLASS, constants } from "../../../constants/constants";
import {
  ContentContainer,
  Section,
} from "../../../components/containers.component";

const panelGap = 5;

const StyledSection = styled(Section)`
  padding-top: 3.5em;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 2.5em;
  }
`;

const StyledArticle = styled("article")`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(constants.spacing.large)};
  padding-bottom: ${({ theme }) => theme.spacing(constants.spacing.large)};
  background-color: ${({ theme }) => theme.palette.background.light}E6;
  box-shadow: ${({ theme }) =>
    `0 1px 0px 5px ${theme.palette.background.light}E6, 0 1px 0px 6px #0000000D`};
`;

const BlogArticle = ({ blogPosts, ...rest }) => {
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
          toArticle="Work"
          mainHeading="h1"
        />

        <LatesPostPreview
          className="inline-padding"
          component="article"
          latestPost={blogPosts[0]}
          linkToArticle={handleClick}
        />

        <StyledArticle className="inline-padding">
          <Typography
            component="h2"
            variant="h4"
            marginBottom={constants.spacing.medium}
          >
            New posts
          </Typography>
          <BlogPostsGrid panelGap={panelGap} blogPosts={blogPosts} />
        </StyledArticle>
      </StyledSection>
    </ContentContainer>
  );
};
BlogArticle.displayName = "BlogArticle";

export { BlogArticle };
