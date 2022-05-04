import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";
import BuildIcon from "@mui/icons-material/Build";

import { useTransitionState } from "../../context/transition.context";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import { ImgWithFallback } from "../../components/img-with-fallback.component";
import {
  ContentContainer,
  Article,
} from "../../components/containers.component";

const panelGap = 5;

//  We can pass a prop to the whole template literal
// by destructuring it at the top and returning another
// template literal
const CaseStudyContainer = styled(Grid)`
  ${({ theme }) => `
  
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  && .case-study {
    display: grid;
    border: 1px solid rgba(0,0,0,0.1);
    background-color: ${theme.palette.background.light}E6;
  }

  && .case-study.wip .external-link-container {
    pointer-events: none;
    align-items: center;
  }

  && .external-link-container {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    display: flex;
    justify-content: center;
    aspect-ratio: ${constants.aspectRatio.default};
    color: ${theme.palette.text.main}B3;
  }

  && .external-link-container img {
    filter: brightness(110%);
  }

  && .external-link-container img:hover {
    filter: brightness(86%);
    transition: filter ${constants.buttonHover}ms ease-in-out;
  }

  && .internal-link {
    grid-column: 1;
    grid-row: 1;
    z-index: 999;
    margin-top: auto;
    text-decoration: none;
    line-height: 2.5em;
    color: white;
    background-color: rgba(0,0,0,0.6);
  }

  && .internal-link__icon {
    margin: 0.6em 0.2em 0 0.2em;
  }

  & .internal-link:hover {
    color: ${theme.palette.tertiary.main};
    transition: color ${constants.navTimeout}ms ease-in-out;
  }

  && .internal-link:active:hover {
    color: ${theme.palette.secondary.main};
  }
`}
`;
//
// link to case study website
const ExternalLink = ({
  externalLink,
  imgSource,
  fallback,
  priority,
  alt,
  ...rest
}) => (
  <a
    className={`external-link-container`}
    href={externalLink}
    target="_blank"
    rel="noopener noreferrer"
    {...rest}
  >
    {imgSource == undefined ? (
      <span>
        <BuildIcon fontSize="large" />
      </span>
    ) : (
      <ImgWithFallback
        src={imgSource}
        fallback={fallback}
        layout="fill"
        priority={priority}
        alt={alt}
      />
    )}
  </a>
);
// link to internal page, i.e blog page
const InternalLink = ({ internalLink, ...rest }) => {
  const [transitionState] = useTransitionState();

  const handleClick = (e) => {
    e.preventDefault();
    transitionState.navigate(e.target.href);
  };

  return (
    <a
      href={internalLink}
      onClick={handleClick}
      className="internal-link"
      {...rest}
    />
  );
};

const CaseStudy = ({
  externalLink = "https://google.com",
  internalLink = "/blog",
  alt = "case study",
  imgSource,
  fallback,
  priority = "false",
  children,
  ...rest
}) => (
  <Box
    className={`case-study  ${imgSource ? "" : "wip"}`}
    disabled={imgSource ? false : true}
    width={{ xs: "100%", md: "48%", lg: "31%" }}
    {...rest}
  >
    <ExternalLink
      externalLink={externalLink}
      imgSource={imgSource}
      fallback={fallback}
      priority={priority}
      alt={alt}
      aria-label={imgSource ? alt : "Case study coming in the future"}
    />
    <InternalLink internalLink={internalLink}>
      <ForumIcon className="internal-link__icon" />
      {children}
    </InternalLink>
  </Box>
);

const WorkArticle = (props) => {
  const [transitionState, setTransitionState] = useTransitionState();

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

  const handleClick = (e) => {
    e.preventDefault();
    transitionState.navigate(e.target.href);
  };

  // we mark one of the container's children with a special class
  // to set it as the main transition, for use in transitionend event listeners
  return (
    <ContentContainer
      className={
        transitionState.contentTransition === TRANSITION_CLASS.entered
          ? `${constants.classNames.containerActiveClass}`
          : `${constants.classNames.containerInactiveClass}`
      }
      {...props}
    >
      <Article
        component="article"
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <div>
          <Container maxWidth="md">
            <Typography className="article-title" component="h2" variant="h3">
              Work
            </Typography>
            <br />

            <Box
              className="article-text"
              marginBottom={constants.spacing.large}
            >
              <Typography fontSize={{ xs: "1.1rem", md: "1.5rem" }}>
                Hi! My name is Francis and I am a{" "}
                <strong>Developing Web Developer</strong>. Here you will find
                some of my work, including articles documenting my journey.{" "}
                <a
                  href={"/contact"}
                  onClick={handleClick}
                  aria-label="Send Francis a message."
                >
                  Contact me
                </a>{" "}
                if you have any questions, want to learn more{" "}
                <a
                  className="learn-more-link"
                  href="https://github.com/fajoaq"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Learn more about Francis on his github page."
                >
                  about me
                </a>
                , or just want to say hello. &#x1F44B;
              </Typography>
            </Box>
          </Container>

          <CaseStudyContainer gap={panelGap}>
            <CaseStudy
              imgSource="/static/work/pageprimer-thumb.avif"
              fallback="/static/work/pageprimer-thumb.webp"
              externalLink="https://pageprimer.com"
              internalLink="/blog"
              priority="true"
              alt="PagePrimer Web Design Site."
            >
              Coming Soon: Building PagePrimer
            </CaseStudy>

            <CaseStudy> Coming Soon: Building a Blog</CaseStudy>

            <CaseStudy>Coming Soon: Building a Database</CaseStudy>

            <CaseStudy>Coming Soon: Fetching w/ Prisma</CaseStudy>
          </CaseStudyContainer>
        </div>
      </Article>
    </ContentContainer>
  );
};
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
