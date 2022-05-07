import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { ImgWithLazyRoot } from "../../../components/img-w-lazy-root.component";
import { constants } from "../../../constants/constants";
import { postData1 } from "./post-data";

const text = `
  Currenly only for testing. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.
`;

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
        md: constants.spacing.xlarge,
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
      marginBottom={{ xs: constants.spacing.xlarge, md: 0 }}
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

const StyledBox = styled(Grid)`
  display: flex;
  flex-wrap: no-wrap;
  align-content: start;
  width: 100%;

  && a {
    flex-grow: 1;
  }
`;

const BlogPostsCarousel = () => (
  <article className="article-text">
    {/* thumbnails */}
    <StyledBox
      item
      gap={constants.spacing.xsmall}
      justifyContent="center"
      marginBottom={constants.spacing.xsmall}
      xs={12}
    >
      {postData1.map((post, index) => (
        <Box component="a" key={post.id} onClick={() => console.log(index)}>
          <BlogPostImg elevation={2}>
            <ImgWithLazyRoot
              className="image-nextjs"
              src={`https://dummyimage.com/400x300/ffffff/29a827&text=${post.thumbnailText}`}
              type="image/jpg"
              layout="fill"
              alt={post.thumbnailText}
            />
          </BlogPostImg>
        </Box>
      ))}
    </StyledBox>

    {/* post description */}
    <Grid item container xs={12}>
      <Grid
        item
        order={{ xs: 2, md: 1 }}
        paddingRight={{ xs: 0, md: constants.spacing.medium }}
        marginTop={{ xs: 0, md: constants.spacing.large }}
        xs={12}
        md={7}
      >
        <Typography
          paragraph
          textAlign="start"
          fontSize={{ xs: "1.1rem", md: "1.4rem" }}
          gridColumn={1}
          gridRow={2}
        >
          Currently selected post text goes here. Click the thumbnail or this
          link to <a href="">continue reading</a> &#x025B8;
        </Typography>
      </Grid>

      <Grid
        item
        component="a"
        onClick={() => console.log(0)}
        order={{ xs: 1, md: 2 }}
        marginBottom={{ xs: constants.spacing.small, md: 0 }}
        xs={12}
        md={5}
      >
        <BlogPostImg elevation={2}>
          <ImgWithLazyRoot
            className="image-nextjs"
            src={`https://dummyimage.com/400x300/ffffff/29a827&text=Post+1`}
            type="image/jpg"
            layout="fill"
            alt="selected post thumbnail"
          />
        </BlogPostImg>
      </Grid>
    </Grid>
  </article>
);

export { LatesPostPreview, BlogPostsCarousel, BlogPostImg };
