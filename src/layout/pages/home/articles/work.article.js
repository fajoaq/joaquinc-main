import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";
import BuildIcon from "@mui/icons-material/Build";

import { ImgWithFallback } from "../../../../components/img-with-fallback.component";
import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";

const panelGap = 5;

//  We can pass a prop to the whole template literal
// by destructuring it at the top and returning another
// template literal
const CaseStudyContainer = styled(Grid)`
  ${({ theme }) => `
  
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  && .case-study {
    display: grid;
    background-color: ${theme.palette.background.light}E6;
  }

  && .case-study.wip {
    pointer-events: none;
  }

  && .case-study.wip .external-link-container {
    align-items: center;
  }

  && .external-link-container {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    display: flex;
    aspect-ratio: 4 / 3;
    justify-content: center;
    color: ${theme.palette.text.main}B3;
  }

  && .external-link-container img {
    filter: brightness(110%);
  }

  && .external-link-container img:hover {
    filter: brightness(86%);
    transition: filter 260ms ease-in-out;
  }

  && .internal-link {
    grid-column: 1;
    grid-row: 1;
    z-index: 999;
    margin-top: auto;
    text-decoration: none;
    line-height: 2.5em;
    color: white;
    background-color: ${theme.palette.text.main}A8;
  }

  && .internal-link__icon {
    margin: 0.6em 0.2em 0 0.2em;
  }

  & .internal-link:hover {
    color: ${theme.palette.tertiary.main};
    transition: color 360ms ease-in-out;
  }

  && .internal-link:active:hover {
    color: ${theme.palette.secondary.main};
  }
`}
`;
// link to case study website
const ExternalLink = ({ externalLink, imgSource, fallback, alt, ...rest }) => (
  <Box
    component="a"
    href={externalLink}
    target="_blank"
    className={`external-link-container `}
    {...rest}
  >
    {imgSource == undefined ? (
      <span>
        <BuildIcon fontSize="large" />
      </span>
    ) : (
      <ImgWithFallback
        src={imgSource}
        fallback={fallback}
        layout="fill"
        alt={alt}
      />
    )}
  </Box>
);
// link to internal page, i.e blog page
const InternalLink = ({ internalLink, ...rest }) => (
  <Box component="a" href={internalLink} className="internal-link" {...rest} />
);

const CaseStudy = ({
  externalLink = "https://google.com",
  internalLink = "/",
  alt = "case study",
  imgSource,
  fallback,
  children,
  ...rest
}) => (
  <Box
    className={`case-study  ${imgSource ? "" : "wip"}`}
    width={{ xs: "100%", md: "48%", lg: "31%" }}
    {...rest}
  >
    <ExternalLink
      imgSource={imgSource}
      fallback={fallback}
      externalLink={externalLink}
      alt={alt}
    />
    <InternalLink internalLink={internalLink}>{children}</InternalLink>
  </Box>
);

const WorkArticle = forwardRef(({ sharedClass, ...rest }, ref) => (
  <ContentContainer {...rest} className={sharedClass}>
    <Article container component="article" ref={ref}>
      <Grid container>
        <Grid item className="article-title" xs={12}>
          <Typography component="h2" variant="h3">
            Work
          </Typography>
          <br />
        </Grid>

        <Grid item className="article-text" xs={12} md={10} lg={9}>
          <Typography fontSize={{ xs: "1.1rem", md: "1.5rem" }}>
            &#x1F604; Hi! My name is Francis and I am a{" "}
            <strong>Developing Web Developer</strong>. Here you will find some
            of my best work, along with articles documenting my journey. Reach
            out if you have questions, want to{" "}
            <a href="https://github.com/fajoaq" target="_blank">
              learn more
            </a>
            , or just want to say hello. &#x1F44B;
          </Typography>
          <br />
          <br />
        </Grid>

        <CaseStudyContainer item gap={panelGap} xs={12}>
          <CaseStudy
            imgSource="/static/work/pageprimer-thumb.avif"
            fallback="/static/work/pageprimer-thumb.webp"
            externalLink="https://pageprimer.com"
            alt="PagePrimer Web Design Site."
          >
            <ForumIcon className="internal-link__icon" />
            Coming Soon: Building PagePrimer
          </CaseStudy>

          <CaseStudy>
            <ForumIcon className="internal-link__icon" />
            Coming Soon: Building a Blog
          </CaseStudy>

          <CaseStudy>
            <ForumIcon className="internal-link__icon" />
            Coming Soon: Building a Database
          </CaseStudy>

          <CaseStudy>
            <ForumIcon className="internal-link__icon" />
            Coming Soon: Fetching w/ Prisma
          </CaseStudy>
        </CaseStudyContainer>
      </Grid>
    </Article>
  </ContentContainer>
));
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
