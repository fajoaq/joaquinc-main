import { Fragment, useEffect, useState, createRef, forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { contentGridSharedStyles } from "../common/common.styles";

const ContentContainer = styled("div")`
  ${contentGridSharedStyles}

  && header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3.5em 2.5em 2.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transform: translateX(-100%);
    transition: transform 500ms ease-in-out;
  }

  && .image {
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
  }

  && .active-enter-done {
    visibility: visible;
    opacity: 1;
  }

  && .active-enter-done header {
    transform: translateX(0%);
  }
  && .active-enter-done .image {
    transform: translateX(0%);
  }
`;

const StyledArticle = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  visibility: hidden;
  min-height: ${({ theme }) => theme.constants.minContainerHeight}px;
  max-height: ${({ theme }) => theme.constants.minContainerHeight}px;
  opacity: 0;
  transition: opacity, visibility, 500ms ease-in-out;
`;

const HeroArticle = forwardRef(({ children, ...rest }, ref) => (
  <ContentContainer>
    <StyledArticle container {...rest} ref={ref}>
      {children ? (
        children
      ) : (
        <Fragment>
          <Grid item component="header" xs={8}>
            <h1>Francis Joaquin</h1>
            <p>Developing Web Developer</p>
          </Grid>

          <Grid item xs={4} className="image">
            <img
              src="/static/fj-orange.png"
              height="532px"
              width="auto"
              alt="Francis Joaquin"
            />
          </Grid>
        </Fragment>
      )}
    </StyledArticle>
  </ContentContainer>
));

export { HeroArticle };
