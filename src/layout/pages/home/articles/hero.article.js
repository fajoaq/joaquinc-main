import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { ImgWithFallback } from "../../../../components/img-with-fallback.component";
import {
  ContentContainer,
  Article,
} from "../../../../components/containers.component";

const imageSizes = {
  small: 368,
  medium: 533,
};

//  We can pass a prop to the whole template literal
// by destructuring it at the top and returning another
// template literal
const StyledContentContainer = styled(ContentContainer)`
  ${({ theme }) => `

  && article > div {
    padding: 0;
  }

  && header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.5em 2.5em 2.5em;
    background-color: ${theme.palette.primary.main};
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
    aspect-ratio: 4 / 5;

    ${theme.breakpoints.down("lg")} {
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

    ${theme.breakpoints.down("lg")} {
      transform: translateY(12%) translateX(-2%);
    }
  }

  && .active-enter-done header {
    transform: translateX(0%);
  }
  && .active-enter-done .img-container {
    transform: translateX(0%);f
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
    height: 100px;
    width: 100%;
    max-width: 120px;
    background-color: rgba(0,0,0,0.75);
    transition: max-width 260ms ease-in-out;

    ${theme.breakpoints.down("sm")} {
      max-width: 64px;
      background-color: rgba(0,0,0,0.65);
    }
  }

  && .hero-next a:hover {
    max-width: 130px;
  }

  && .hero-next a:active:hover {
    background-color: ${theme.palette.secondary.main}33;
  }

  && .hero-next-image {
    height: 100%;
    width: 100%;
    background-color: ${theme.palette.text.light}B3;
    mask-image: url("/static/site/go-next.svg");
    mask-size: 50% 50%;
    mask-position: center;
    mask-repeat: no-repeat;
    transition: background-color 260ms ease-in-out;

    ${theme.breakpoints.down("sm")} {
      background-color: ${theme.palette.text.light}E6;
    }
  }

  && .hero-next-image:hover {
    background-color: ${theme.palette.tertiary.main}B3;
  }
`}
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
            src="/static/site/fj-orange.avif"
            fallback="/static/site/fj-orange.webp"
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
              borderRadius={{ xs: "100%", lg: 0 }}
              role="button"
              aria-label={"Portfilio"}
            >
              <div className="hero-next-image" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Article>
  </StyledContentContainer>
));
HeroArticle.displayName = "HeroArticle";

export { HeroArticle };
