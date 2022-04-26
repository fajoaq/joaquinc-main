import { forwardRef } from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { ImgWithFallback } from "../../../../components/img-with-fallback.component";
import {
  ContentContainer,
  Article,
} from "../../../../components/common.component";

const imageSizes = {
  small: 368,
  medium: 533,
};

const StyledContentContainer = styled(ContentContainer)`
  && header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.5em 2.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transform: translateX(-100%);
    transition: transform 500ms ease-in-out;
  }

  && article > div {
    padding: 0;
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
    aspect-ratio: 4 / 5;

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

  && .image-nextjs {
    grid-column: 1;
    grid-row: 1;
    transform: translateY(0%);

    ${({ theme }) => `${theme.breakpoints.down("lg")}`} {
      transform: translateY(12%) translateX(-2%);
    }
  }

  && .active-enter-done header {
    transform: translateX(0%);
  }
  && .active-enter-done .img-container {
    transform: translateX(0%);
  }

  && .hero-next {
    display: flex;
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    align-items: center;
    z-index: 999;
  }

  && .hero-next a {
    font-size: 7rem;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: ${({ theme }) => theme.palette.primary.main}52;
    transition: max-width, color, 260ms ease-in-out;
  }

  && .hero-next a:hover {
    color: ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.primary.main}D9;
    max-width: 7rem;
    border-radius: 0;
  }
`;

const HeroArticle = forwardRef(({ onClick, sharedClass, ...rest }, ref) => (
  <StyledContentContainer {...rest} className={sharedClass}>
    <Article container component="article" ref={ref}>
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

      {/* image positioning container */}
      <Grid
        className="img-container"
        item
        xs={12}
        lg={4}
        order={{ xs: 1, lg: 2 }}
        justifyContent={{ xs: "center", lg: "end" }}
        bgcolor={{ xs: "primary.main", lg: "#e5e4e3" }}
      >
        {/* image mask/height container */}
        <Box
          className="img-mask"
          display="grid"
          position="relative"
          height={{
            xs: imageSizes.small + "px",
            lg: imageSizes.medium + "px",
          }}
        >
          {/* nextjs image component */}
          <ImgWithFallback
            className="image-nextjs"
            src="/static/fj-orange.avif"
            fallback="/static/fj-orange.webp"
            priority="true"
            layout="fill"
            alt="Francis Joaquin Website Author"
          />
          {/* go next button container */}
          <Box
            className="hero-next"
            justifyContent={{ xs: "center", lg: "end" }}
          >
            {/* go to next article button */}
            <Box
              component="a"
              onClick={onClick}
              maxWidth={{ xs: "4rem", md: "6rem" }}
              maxHeight={{ xs: "4rem", md: "6rem" }}
              lineHeight={{ xs: "2rem", md: "4rem" }}
              borderRadius={{ xs: "100%", lg: 0 }}
            >
              &#8250;
            </Box>
          </Box>
        </Box>
      </Grid>
    </Article>
  </StyledContentContainer>
));
HeroArticle.displayName = "HeroArticle";

export { HeroArticle };
