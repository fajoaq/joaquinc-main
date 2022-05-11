import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";

import {
  InternalLink,
  ExternalLink,
  ArticleNavigation,
} from "./common/navigation.component";
import { useTransitionState } from "../../context/transition.context";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import {
  ContentContainer,
  Section,
} from "../../components/containers.component";

const panelGap = 5;

//  We can pass a prop to the whole template literal
// by destructuring it at the top and returning another
// template literal
const CaseStudyContainer = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.light}E6;
  box-shadow: ${({ theme }) =>
    `0 1px 0px 5px ${theme.palette.background.light}E6, 0 1px 0px 6px #0000000D`};

  && .case-study {
    display: grid;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.palette.background.main};
  }

  && .case-study.wip .external-link-container {
    align-items: center;
  }

  && .case-study.wip {
    pointer-events: none;
  }
`;

const CaseStudy = ({
  externalLink,
  alt = "A link to an external case study.",
  imgSource,
  priority = "false",
  children,
  ...rest
}) => (
  <Box
    className="case-study"
    disabled={imgSource ? false : true}
    width={{ xs: "100%", md: "48%", lg: "31%" }}
    {...rest}
  >
    <ExternalLink
      externalLink={externalLink}
      imgSource={imgSource}
      priority={priority}
      alt={alt}
    />
    {children}
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
      <Section
        className={`${transitionState.contentTransition} ${constants.classNames.mainTransition}`}
        ref={transitionState.contentRef}
      >
        <ArticleNavigation
          className="inline-padding"
          fromArticle="Work"
          toArticle="Blog"
        />

        <Grid
          container
          className="article-text inline-padding"
          paddingBottom={constants.spacing.large}
          component="article"
        >
          {/* paragraph 1 */}
          <Grid
            item
            xs={12}
            md={7}
            marginBottom={{ xs: constants.spacing.small, md: 0 }}
          >
            <Typography fontSize={{ xs: "1.1rem", md: "1.5rem" }}>
              Hi! My name is Francis and I am a{" "}
              <strong>Developing Web Developer</strong>. Here you will find some
              of my latest work.{" "}
              <a
                href={"/contact"}
                onClick={handleClick}
                aria-label="Send Francis a message."
              >
                Contact me
              </a>{" "}
              if you have any questions, want to learn more{" "}
              <a
                href="https://github.com/fajoaq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Learn more about Francis on his github page."
              >
                about me
              </a>
              , or just want to say hello. &#x1F44B;
            </Typography>
          </Grid>
          {/* paragraph 2 */}
          <Grid
            item
            xs={12}
            md={5}
            paddingLeft={{ xs: "0", md: constants.spacing.small }}
          >
            <Typography
              fontSize={{ xs: "1.1rem", md: "1.4rem" }}
              textAlign={{ xs: "start", md: "center" }}
            >
              Come along on my web dev journey by following my blog.
            </Typography>
          </Grid>
        </Grid>
        {/* Case studies, with links to blog posts */}
        <CaseStudyContainer
          className="inline-padding inline-padding-vertical"
          component="article"
          gap={panelGap}
        >
          <CaseStudy
            imgSource="/static/work/pageprimer-thumb.jpg"
            externalLink="https://pageprimer.com"
            priority="true"
            alt="A Link to PagePrimer Web Design Site."
          >
            <InternalLink className="internal-link internal-link-box wip">
              <ForumIcon className="internal-link__icon" />
              Coming Soon: Building PagePrimer
            </InternalLink>
          </CaseStudy>

          <CaseStudy className="case-study wip">
            <InternalLink className="internal-link internal-link-box wip">
              <ForumIcon className="internal-link__icon" />
              Coming Soon: Building a Blog
            </InternalLink>
          </CaseStudy>

          <CaseStudy className="case-study wip">
            <InternalLink className="internal-link internal-link-box wip">
              <ForumIcon className="internal-link__icon" />
              Coming Soon: Building a Database
            </InternalLink>
          </CaseStudy>

          <CaseStudy className="case-study wip">
            <InternalLink className="internal-link internal-link-box wip">
              <ForumIcon className="internal-link__icon" />
              Coming Soon: Fetching w/ Prisma
            </InternalLink>
          </CaseStudy>
        </CaseStudyContainer>
      </Section>
    </ContentContainer>
  );
};
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };
