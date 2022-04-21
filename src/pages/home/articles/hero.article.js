import { Fragment, useEffect, useState, createRef, forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { contentGridSharedStyles } from "../common/common.styles";

const ContentContainer = styled("div")`
  ${contentGridSharedStyles}
`;

const StyledArticleOne = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  width: 100%;

  && * {
    max-height: ${({ theme }) => theme.constants.minContainerHeight}px;
  }

  && header {
    display: flex;
    flex-direction: column;
    jutify-content: center;
    padding: 3.5em 2.5em 2.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transform: translateX(-100%);
  }

  && img {
    transform: translateX(100%);
  }

  && header[data-transition="true"] {
    transform: translateX(0%);
  }

  && img[data-transition="true"] {
    transform: translateX(0%);
  }
`;

const HeroArticle = forwardRef(({ children, transition, ...rest }, ref) => (
  <ContentContainer>
    <StyledArticleOne container {...rest} ref={ref}>
      {children ? (
        children
      ) : (
        <Fragment>
          <Grid
            item
            component="header"
            xs={7}
            data-transition={transition.toString()}
          >
            <h1>Francis Joaquin</h1>
            <p>Developing Web Developer</p>
          </Grid>

          <Grid item xs={5}>
            <img
              src="/static/fj-orange.png"
              width="100%"
              height="auto"
              alt="Francis Joaquin"
              data-transition={transition.toString()}
            />
          </Grid>
        </Fragment>
      )}
    </StyledArticleOne>
  </ContentContainer>
));

export { HeroArticle };
