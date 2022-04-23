import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { contentGridSharedStyles } from "../common/common.styles";

const imageSizes = {
  small: 368,
  medium: 533,
};

const ContentContainer = styled("div")`
  ${contentGridSharedStyles}

  && header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.5em 2.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transform: translateX(-100%);
    transition: transform 500ms ease-in-out;
  }

  && .img-container {
    display: grid;
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
  }

  && .img-mask {
    mask-image: none;
    grid-column: 1;
    grid-row: 1;

    ${({ theme }) => `${theme.breakpoints.down("lg")}`} {
      transform: translateY(4%);
      mask-image: radial-gradient(
        circle,
        #000000 0%,
        #000000 60%,
        transparent 60%
      );
    }
  }

  && img {
    transform: translateY(0%);

    ${({ theme }) => `${theme.breakpoints.down("lg")}`} {
      transform: translateY(12%);
    }
  }

  && .active-enter-done {
    visibility: visible;
    opacity: 1;
  }

  && .active-enter-done header {
    transform: translateX(0%);
  }
  && .active-enter-done .img-container {
    transform: translateX(0%);
  }
`;

const StyledArticle = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  visibility: hidden;
  height: max-content;
  opacity: 0;
  transition: opacity, visibility, 500ms ease-in-out;
`;

const HeroArticle = forwardRef(({ children, ...rest }, ref) => (
  <ContentContainer>
    <StyledArticle container {...rest} ref={ref}>
      <Grid
        item
        component="header"
        xs={12}
        lg={8}
        order={{ xs: 2, lg: 1 }}
        textAlign={{ xs: "center", lg: "start" }}
      >
        <Typography variant="h1">Francis Joaquin</Typography>
        <Typography component="h2" variant="h3" paddingTop={3}>
          Developing Web Developer
        </Typography>
      </Grid>

      <Grid
        className="img-container"
        item
        xs={12}
        lg={4}
        order={{ xs: 1, lg: 2 }}
        justifyContent={{ xs: "center", lg: "end" }}
        bgcolor={{ xs: "primary.main", lg: "#e5e4e3" }}
      >
        <Box
          className="img-mask"
          height={{
            xs: imageSizes.small + "px",
            lg: imageSizes.medium + "px",
          }}
        >
          <Box
            component="img"
            src="/static/fj-orange.png"
            height={{
              xs: imageSizes.small + "px",
              lg: imageSizes.medium + "px",
            }}
            alt="Francis Joaquin Website Author"
          />
        </Box>
      </Grid>
    </StyledArticle>
  </ContentContainer>
));

export { HeroArticle };
