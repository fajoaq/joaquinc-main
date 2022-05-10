import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { PostCard } from "../../../components/card.component";
import { ImgWithLazyRoot } from "../../../components/img-w-lazy-root.component";
import { constants } from "../../../constants/constants";
import { postData1 } from "./post-data";

const BlogPostImg = styled(Paper)`
  position: relative;
  aspect-ratio: ${constants.aspectRatio.default};
  pointer-events: none;
`;

const LatesPostPreview = ({ linkToArticle, ...rest }) => (
  <Grid container display="flex" paddingTop={0} {...rest}>
    <Grid
      component="header"
      item
      xs={12}
      marginBottom={constants.spacing.small}
    >
      <Typography component="h2" variant="h4">
        Latest: Building PagePrimer
      </Typography>
    </Grid>

    <Grid
      item
      component="a"
      href="/blog"
      onClick={linkToArticle}
      xs={12}
      md={5}
      marginBottom={{
        xs: constants.spacing.small,
        md: constants.spacing.large,
      }}
    >
      <BlogPostImg elevation={3}>
        <ImgWithLazyRoot
          className="image-nextjs"
          src="/static/work/pageprimer-thumb.jpg"
          type="image/jpg"
          priority="true"
          layout="fill"
          alt="PagePrimer Web Design."
        />
      </BlogPostImg>
    </Grid>

    <Grid
      item
      xs={12}
      md={7}
      paddingLeft={{ xs: 0, md: constants.spacing.medium }}
      marginBottom={{ xs: constants.spacing.large, md: 0 }}
    >
      <Box className="article-text">
        <Typography fontSize={{ xs: "1.1rem", md: "1.4rem" }}>
          PagePrimer helps users craft afforable and performant web solutions
          using modern frameworks like <strong>React and NextJs</strong>. In
          this article I go over how I built PagePrimer and what I learned along
          the way.{" "}
          <a href="/blog" onClick={linkToArticle}>
            continue reading
          </a>
          &#x025B8;
        </Typography>
      </Box>
    </Grid>
  </Grid>
);

const StyledArticle = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
`;

const BlogPostsCarousel = ({ panelGap = 5, ...rest }) => (
  <StyledArticle gap={panelGap} {...rest}>
    {postData1.map((post, index) => (
      <PostCard
        key={`post-card-${index}`}
        src={post.imgUrl}
        postTitle={post.postTitle}
        postIntro={post.postIntro}
      />
    ))}
  </StyledArticle>
);

export { LatesPostPreview, BlogPostsCarousel, BlogPostImg };
