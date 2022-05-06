import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../context/transition.context";
import { ImgWithLazyRoot } from "../../components/img-w-lazy-root.component";
import { ArticleNavigation } from "./common/navigation.component";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import {
  ContentContainer,
  Article,
} from "../../components/containers.component";

const text = `
  Currenly only for testing. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
`;

const BlogPostHeaderImg = styled("div")`
  position: relative;
  width: 100%;
  aspect-ratio: ${constants.aspectRatio.default};
`;

const ActiveBlogPost = ({ linkToArticle, ...rest }) => (
  <Grid container display="flex" paddingTop={0} {...rest}>
    <Grid item xs={12} marginBottom={constants.spacing.small}>
      <Typography component="h2" variant="h4">
        Latest: Building PagePrimer
      </Typography>
    </Grid>

    <Grid item xs={12} md={5} marginBottom={constants.spacing.small}>
      <BlogPostHeaderImg>
        <ImgWithLazyRoot
          className="image-nextjs"
          src="/static/work/pageprimer-thumb.jpg"
          type="image/jpg"
          priority="true"
          layout="fill"
          alt="Francis Joaquin Website Author"
        />
      </BlogPostHeaderImg>
    </Grid>

    <Grid
      item
      xs={12}
      md={7}
      paddingLeft={{ xs: "none", md: constants.spacing.medium }}
    >
      <Box className="article-text" marginBottom={constants.spacing.large}>
        <Typography fontSize={{ xs: "1.1rem", md: "1.4rem" }}>
          PagePrimer helps users craft afforable and performant web solutions
          for small to medium sized businesses. We use modern frameworks like{" "}
          <strong>React and NextJs</strong> to achieve high rankings and
          customer satisfaction. In this article I go over how I built
          PagePrimer and what I learned along the way.{" "}
          <a href="/blog" onClick={linkToArticle}>
            continue reading
          </a>
          &#x025B8;
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

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
      <Article
        container
        component="article"
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <ArticleNavigation fromArticle="Blog" toArticle="Work" component="h1" />
        <ActiveBlogPost linkToArticle={handleClick} />
      </Article>
    </ContentContainer>
  );
};
BlogArticle.displayName = "BlogArticle";

export { BlogArticle };
