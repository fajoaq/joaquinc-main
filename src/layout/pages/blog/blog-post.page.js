import { Fragment } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../../context/transition.context";
import { LatesPostPreview } from "./blog.component";
import { constants } from "../../../constants/constants";

const StyledArticle = styled("article")`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(constants.spacing.large)};
  padding-bottom: ${({ theme }) => theme.spacing(constants.spacing.large)};
  background-color: ${({ theme }) => theme.palette.background.light}E6;
  box-shadow: ${({ theme }) =>
    `0 1px 0px 5px ${theme.palette.background.light}E6, 0 1px 0px 6px #0000000D`};
`;

const BlogPost = ({ blogPost, ...rest }) => {
  const [transitionState] = useTransitionState();

  const handleClick = (e) => {
    e.preventDefault();
    transitionState.navigate(e.target.href);
  };

  return (
    <Fragment>
      <LatesPostPreview
        className="inline-padding"
        component="article"
        latestPost={blogPost}
      />

      <StyledArticle className="inline-padding">
        {documentToReactComponents(blogPost.fields.blogBody)}
      </StyledArticle>
      <div {...rest}></div>
    </Fragment>
  );
};

export { BlogPost };
