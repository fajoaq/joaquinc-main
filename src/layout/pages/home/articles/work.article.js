import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";
import BuildIcon from "@mui/icons-material/Build";

import { textDropShadow } from "../../../../styles/utils/text-shadow";
import { ImgWithFallback } from "../../../../components/img-with-fallback.component";
import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";

const panelGap = 5;
const fadedBlack = "rgba(0,0,0,0.5)";

const text = `
  Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.
`;

const StyledContentContainer = styled(ContentContainer)`
  && article > div {
    ${textDropShadow(0.08, `255,255,255`, 0.3)}

    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

const CaseStudyContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  && .case-study {
    display: grid;
  }

  && .case-study.wip {
    pointer-events: none;
  }

  && .case-study.wip .external-link-container {
    align-items: center;
    border: solid 1px black;
  }

  && .external-link-container {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    display: flex;
    aspect-ratio: 4 / 3;
    justify-content: center;
    color: ${fadedBlack};
  }

  && .external-link-container img {
    filter: brightness(96%);
  }

  && .external-link-container img:hover {
    filter: brightness(66%);
    transition: filter 360ms ease-in-out;
  }

  && .internal-link {
    grid-column: 1;
    grid-row: 1;
    z-index: 999;
    margin-top: auto;
    text-decoration: none;
    line-height: 2.5em;
    color: white;
    background-color: ${fadedBlack};
  }

  && .internal-link__icon {
    margin: 0.6em 0.2em 0 0.2em;
  }

  & .internal-link:hover {
    color: ${({ theme }) => theme.palette.tertiary.main};
    transition: color 360ms ease-in-out;
  }

  && .internal-link:active:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

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
    bgcolor="background.main"
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
  <StyledContentContainer {...rest} className={sharedClass}>
    <Article container component="article" ref={ref}>
      <Grid container>
        <Grid item>
          <Typography component="h2" variant="h3">
            Work
          </Typography>
          <br />
        </Grid>
        <Grid item>
          <Typography fontSize={{ xs: "1.1rem", md: "1.5rem" }}>
            {text}
          </Typography>
          <br />
        </Grid>

        <CaseStudyContainer item gap={panelGap}>
          <CaseStudy
            imgSource="/static/pageprimer-thumb.avif"
            fallback="/static/pageprimer-thumb.webp"
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
  </StyledContentContainer>
));
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
