import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {
  contentGridSharedStyles,
  articleSharedStyles,
} from "../common/common.styles";

const text = `
  Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.
`;

const ContentContainer = styled("div")`
  ${contentGridSharedStyles}

  && article > div {
    padding: 3.5em 2.5em 3.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.background.main};
  }

  && .active-enter-done {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledArticle = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  visibility: hidden;
  height: max-content;
  width: 100%;
  opacity: 0;
  transition: opacity, visibility, 500ms ease-in-out;
  ${articleSharedStyles}
`;

const CaseStudyContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const CaseStudy = (props) => (
  <Box
    component="a"
    bgcolor="background.main"
    width={{ xs: "100%", md: "50%", lg: "33%" }}
    {...props}
  >
    <Box padding={3}>
      <img src="static/case-study.png" width="100%" alt="case study" />
    </Box>
  </Box>
);

const WorkArticle = forwardRef(({ children, ...rest }, ref) => (
  <ContentContainer>
    <StyledArticle container {...rest} ref={ref}>
      <Grid container>
        <Grid item marginRight={3} marginLeft={3}>
          <Typography component="h2" variant="h3">
            Work
          </Typography>
          <br />
        </Grid>
        <Grid item marginRight={3} marginLeft={3}>
          <Typography variant="body1">{text}</Typography>
          <br />
        </Grid>

        <CaseStudyContainer item>
          <CaseStudy />
          <CaseStudy />
          <CaseStudy />
          <CaseStudy />
        </CaseStudyContainer>
      </Grid>
    </StyledArticle>
  </ContentContainer>
));
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
