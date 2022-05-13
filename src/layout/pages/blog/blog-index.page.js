import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { BlogLayout } from "./blog.layout";

import { useTransitionState } from "../../../context/transition.context";
import { LatesPostPreview, BlogPostsGrid } from "./blog.component";
import { constants } from "../../../constants/constants";

const panelGap = 5;

const StyledArticle = styled("article")`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(constants.spacing.large)};
  padding-bottom: ${({ theme }) => theme.spacing(constants.spacing.large)};
  background-color: ${({ theme }) => theme.palette.background.light}E6;
  box-shadow: ${({ theme }) =>
    `0 1px 0px 5px ${theme.palette.background.light}E6, 0 1px 0px 6px #0000000D`};
`;

const BlogIndex = ({ blogPosts }) => {
  const [transitionState] = useTransitionState();

  const handleClick = (e) => {
    e.preventDefault();
    transitionState.navigate(e.target.href);
  };

  // we mark one of the container's children with a special class
  // to set it as the main transition, for use in transitionend event listeners
  return (
    <Fragment>
      <LatesPostPreview
        className="inline-padding"
        component="article"
        latestPost={blogPosts[0]}
      >
        <Typography fontSize={{ xs: "1.1rem", md: "1.4rem" }}>
          {blogPosts[0].fields.blogIntro.slice(260)}&#8230;{" "}
          <a href={`/blog/${blogPosts[0].fields.slug}`} onClick={handleClick}>
            continue reading
          </a>
          &#x025B8;
        </Typography>
      </LatesPostPreview>

      <StyledArticle className="inline-padding">
        <Typography
          component="h2"
          variant="h4"
          marginBottom={constants.spacing.medium}
        >
          New posts
        </Typography>
        <BlogPostsGrid
          panelGap={panelGap}
          blogPosts={blogPosts}
          onClick={handleClick}
        />
      </StyledArticle>
    </Fragment>
  );
};
BlogLayout.displayName = "BlogLayout";

export { BlogIndex };
