import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {
  ContentContainer,
  Article,
} from "../../../../components/common.component";

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
`;

const CaseStudy = (props) => (
  <Box
    component="a"
    href="/"
    bgcolor="background.main"
    width={{ xs: "100%", md: "50%", lg: "33%" }}
    {...props}
  >
    <Box paddingRight={{ xs: 0, md: 3 }} paddingBottom={2.3}>
      <img src="static/case-study.png" width="100%" alt="case study" />
    </Box>
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
          <CaseStudy />
          <CaseStudy />
          <CaseStudy />
          <CaseStudy />
        </CaseStudyContainer>
      </Grid>
    </Article>
  </StyledContentContainer>
));
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
