import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useTransitionState } from "../../context/transition.context";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import { ImgWithLazyRoot } from "../../components/img-w-lazy-root.component";
import {
  ContentContainer,
  Section,
} from "../../components/containers.component";

const StyledSection = styled(Section)`
  && {
    flex-direction: row;
    padding: 0;
  }
`;

const imageSizes = {
  small: 368,
  medium: 533,
};

const STATE_ENTERED = `
  && .entered header {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity, transform, ${constants.navTimeout + 140}ms ease-in-out;
  }
  && .entered .img-container {
    opacity: 1;
    transform: translateX(0%);
    transition: opacity, transform, ${constants.navTimeout + 140}ms ease-in-out;
  }
`;
const STATE_EXITED = `
  && .exited header {
    opacity: 0.1;
    transform: translateX(-100%);
    transition: opacity, transform, ${constants.navTimeout}ms ease-in-out;
  }
  && .exited .img-container {
    opacity: 0.1;
    transform: translateX(100%);
    transition: opacity, transform, ${constants.navTimeout}ms ease-in-out;
  }
`;

//  We can pass a prop to the whole template literal
// by destructuring it at the top and returning another
// template literal
const StyledContentContainer = styled(ContentContainer)`
  ${({ theme }) => `

  ${STATE_ENTERED}
  ${STATE_EXITED}

  && article > div {
    padding: 0;
  }

  && header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.5em 2.5em 2.5em;
    background-color: ${theme.palette.primary.main};
    opacity: 0.1;
    transform: translateX(-100%);
    transition: opacity,transform, ${constants.navTimeout + 140}ms ease-in-out;
  }

  && .img-container {
    display: grid;
    opacity: 0.1;
    transform: translateX(100%);
    transition: opacity, transform, ${constants.navTimeout + 140}ms ease-in-out;
  }

  && .img-mask {
    mask-image: none;
    grid-column: 1;
    grid-row: 1;
    aspect-ratio: ${constants.aspectRatio.portrait};

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

  && .hero-next {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    width: 100%;
    align-items: center;
    z-index: 999;
  }

  && .hero-next a {
    height: 100%;
    width: 100%;
    max-height: 100px;
    max-width: 120px;
    background-color: rgba(0,0,0,0.75);
    transition: max-width ${constants.buttonHover}ms ease-in-out;

    ${theme.breakpoints.down("lg")} {
      max-height: 64px;
      max-width: 64px;
      background-color: rgba(0,0,0,0.65);
    }
  }

  && .hero-next a:hover {
    max-width: 130px;

    ${theme.breakpoints.down("lg")} {
      max-height: 62px;
      max-width: 62px;
    }
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
    transition: background-color ${constants.buttonHover}ms ease-in-out;

    ${theme.breakpoints.down("sm")} {
      background-color: ${theme.palette.text.light}E6;
    }
  }

  && .hero-next-image:hover {
    background-color: ${theme.palette.tertiary.main}B3;
  }

`}
`;

const HeroArticle = (props) => {
  const [transitionState, setTransitionState] = useTransitionState();

  const handleGoNext = () => {
    transitionState.navigate("/work");
  };

  // because transitions wont work when heights are the same
  // we add one from new height
  useEffect(() => {
    const { offsetHeight } = transitionState.contentRef.current;
    const newHeight =
      transitionState.mainContainerHeight === offsetHeight
        ? offsetHeight - 1
        : offsetHeight;

    setTransitionState((prev) => ({
      ...prev,
      mainContainerHeight: newHeight,
    }));
  }, []);

  // we mark one of the container's children with a special class
  // to set it as the main transition, for use in transitionend event listeners
  return (
    <StyledContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...props}
    >
      <StyledSection
        container
        className={transitionState.contentTransition}
        ref={transitionState.contentRef}
      >
        <Grid
          className="main-transition"
          item
          component="header"
          xs={12}
          lg={7.5}
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
          lg={4.5}
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
            <ImgWithLazyRoot
              className="image-nextjs"
              src="/static/site/fj-orange.jpg"
              type="image/jpg"
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
                onClick={handleGoNext}
                component="a"
                maxWidth={{ xs: "4rem", md: "6rem" }}
                maxHeight={{ xs: "4rem", md: "6rem" }}
                borderRadius={{ xs: "100%", lg: 0 }}
                role="button"
                aria-label={"Go to portfolio"}
              >
                <div className="hero-next-image" />
              </Box>
            </Box>
          </Box>
        </Grid>
      </StyledSection>
    </StyledContentContainer>
  );
};
HeroArticle.displayName = "HeroArticle";

export { HeroArticle };
