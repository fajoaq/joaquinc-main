import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { PostCard } from "../../../components/card.component";
import { ImgWithLazyRoot } from "../../../components/img-w-lazy-root.component";
import { constants } from "../../../constants/constants";

const BlogPostImg = styled(Paper)`
  position: relative;
  aspect-ratio: ${constants.aspectRatio.default};
  pointer-events: none;
  margin-bottom: ${({ theme }) => theme.spacing(constants.spacing.xsmall)};
`;

const LatesPostPreview = ({ children, latestPost, ...rest }) => {
  return (
    <Grid container display="flex" paddingTop={0} {...rest}>
      <Grid
        component="header"
        item
        xs={12}
        marginBottom={constants.spacing.small}
      >
        <Typography component="h2" variant="h4">
          Latest: {latestPost.fields.title}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        md={5}
        marginBottom={{
          xs: constants.spacing.small,
          md: constants.spacing.large,
        }}
      >
        <figure>
          <BlogPostImg elevation={3}>
            <ImgWithLazyRoot
              className="image-nextjs"
              src={`https:${latestPost.fields.blogThumbnail.fields.file.url}`}
              type="image/jpg"
              priority="true"
              layout="fill"
              alt="PagePrimer Web Design."
            />
          </BlogPostImg>
          <Typography component="figcaption" variant="body2" textAlign="center">
            {latestPost.fields.blogBanner.fields.description}.{" "}
            {latestPost.fields.caseStudy && (
              <Fragment>
                <a
                  href={latestPost.fields.caseStudy.fields.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
                <span>&#x21B1;</span>
              </Fragment>
            )}
          </Typography>
        </figure>
      </Grid>

      <Grid
        item
        xs={12}
        md={7}
        paddingLeft={{ xs: 0, md: constants.spacing.medium }}
        marginBottom={{ xs: constants.spacing.large, md: 0 }}
      >
        <Box className="article-text">
          {children ? (
            children
          ) : (
            <Typography fontSize={{ xs: "1.1rem", md: "1.4rem" }}>
              {latestPost.fields.blogIntro}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

const StyledArticle = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
`;

const BlogPostsGrid = ({ panelGap = 5, blogPosts, onClick, ...rest }) => (
  <StyledArticle gap={panelGap} {...rest}>
    {blogPosts.map((post, index) => (
      <PostCard
        key={post.sys.id}
        src={`https:${post.fields.blogThumbnail.fields.file.url}`}
        href={`/blog/${post.fields.slug.fields.slug}`}
        postTitle={post.fields.title}
        blogIntro={post.fields.blogIntro}
        readingTime={post.fields.readingTime}
        priority={index === 0 ? "true" : "false"}
        onClick={onClick}
      />
    ))}
  </StyledArticle>
);

export { LatesPostPreview, BlogPostsGrid, BlogPostImg };
