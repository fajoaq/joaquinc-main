import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { ContentContainer, StyledArticle } from "../common/common.component";

const text = `
  Phasellus enim sapien, blandit ullamcorper elementum eu, condimentum eu elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia luctus elit eget interdum.
`;

const StyledContentContainer = styled(ContentContainer)`
  && article > div {
    padding: 3.5em 2.5em 3.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.background.main};
  }

  && .active-enter-done {
    opacity: 1;
  }
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

const WorkArticle = forwardRef(({ sharedClass, ...rest }, ref) => (
  <StyledContentContainer {...rest} className={sharedClass}>
    <StyledArticle container component="article" ref={ref}>
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
  </StyledContentContainer>
));
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
