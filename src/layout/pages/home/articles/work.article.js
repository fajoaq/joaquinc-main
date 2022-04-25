import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";
import BuildIcon from "@mui/icons-material/Build";

import {
  ContentContainer,
  Article,
} from "../../../../components/common.component";

const panelGap = 3.5;

const text = `
  Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.
`;

const StyledContentContainer = styled(ContentContainer)`
  && article > div {
    background-color: ${({ theme }) => theme.palette.background.main};
  }
`;

const CaseStudyContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  && .case-study {
    display: grid;
    align-items: end;
  }

  && .case-study.wip {
    pointer-events: none;
  }

  && .case-study.wip .external-link-container {
    border: solid 1px black;
  }

  && .external-link-container {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 260px;
  }

  && .external-link-container img:hover {
    filter: brightness(70%);
    transition: filter 360ms ease-in-out;
  }

  && .internal-link {
    grid-column: 1;
    grid-row: 1;
    height: 3rem;
    z-index: 999;
    padding-left: 1rem;
    text-decoration: none;
    line-height: 3rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & .internal-link:hover {
    color: ${({ theme }) => theme.palette.tertiary.main};
    transition: color 360ms ease-in-out;
  }
`;

const ExternalLink = ({ externalLink, imgSource, ...rest }) => (
  <Box
    component="a"
    href={externalLink}
    target="_blank"
    className={`external-link-container `}
    marginRight={{ xs: 0, md: panelGap }}
    marginBottom={panelGap}
    {...rest}
  >
    {imgSource == undefined ? (
      <span>
        <BuildIcon fontSize="large" />
      </span>
    ) : (
      <img src={imgSource} width="100%" alt="case study" />
    )}
  </Box>
);

const InternalLink = ({ internalLink, ...rest }) => (
  <Box
    component="a"
    href={internalLink}
    className="internal-link"
    marginBottom={panelGap}
    marginRight={panelGap}
    {...rest}
  />
);

const CaseStudy = ({
  externalLink = "https://google.com",
  internalLink = "/",
  imgSource,
  children,
  ...rest
}) => (
  <Box
    className={`case-study  ${imgSource ? "" : "wip"}`}
    bgcolor="background.main"
    width={{ xs: "100%", md: "50%", lg: "33%" }}
    {...rest}
  >
    <ExternalLink imgSource={imgSource} externalLink={externalLink} />
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

        <CaseStudyContainer item>
          <CaseStudy imgSource="static/case-study.png">
            <ForumIcon /> Building PagePrimer
          </CaseStudy>
          <CaseStudy>Coming Soon: Building a Blog</CaseStudy>
          <CaseStudy>Coming Soon</CaseStudy>
          <CaseStudy>Coming Soon</CaseStudy>
        </CaseStudyContainer>
      </Grid>
    </Article>
  </StyledContentContainer>
));
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
