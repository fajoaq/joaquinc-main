import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ForumIcon from "@mui/icons-material/Forum";

import { InternalLink, ExternalLink } from "./common/navigation.component";
import { useTransitionState } from "../../context/transition.context";
import { TRANSITION_CLASS, constants } from "../../constants/constants";
import { PageLayout } from "./common/page-layout.component";

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

const WorkArticle = ({ caseStudies, ...rest }) => {
  const [transitionState] = useTransitionState();

  const handleClick = (e) => {
    e.preventDefault();
    transitionState.navigate(e.target.href);
  };

  return (
    <PageLayout fromArticle="Work" {...rest}>
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
        {caseStudies.map((study) => (
          <CaseStudy
            key={study.sys.id}
            imgSource={`https:${study.fields.thumbnail.fields.file.url}`}
            externalLink={study.fields.externalLink}
            alt={study.fields.thumbnail.fields.description}
          >
            {!study.fields.hasPost ? null : (
              <InternalLink
                className="internal-link internal-link-box"
                internalLink={`/blog/${study.fields.slug.fields.slug}`}
              >
                <ForumIcon className="internal-link__icon" />
                Read: {study.fields.title}
              </InternalLink>
            )}
          </CaseStudy>
        ))}
      </CaseStudyContainer>

      {transitionState.contentTransition === TRANSITION_CLASS.entered ? null : (
        <div className="loader-container">
          <div className="loader" />
        </div>
      )}
    </PageLayout>
  );
};
WorkArticle.displayName = "WorkArticle";

export { WorkArticle };

/* 
      {caseStudies.map((post, index) => (
          <CaseStudy
            key={post.sys.id}
            imgSource={`https:${post.fields.blogThumbnail.fields.file.url}`}
            externalLink={post.fields.externalLink}
            priority={index === 0 ? "true" : "false"}
            alt={post.fields.blogThumbnail.fields.description}
          >
            <InternalLink
              className="internal-link internal-link-box"
              internalLink={`/blog/${post.fields.slug}`}
            >
              <ForumIcon className="internal-link__icon" />
              {post.fields.readingTime}min Read: {post.fields.title}
            </InternalLink>
          </CaseStudy>
        ))}


        {caseStudies.map((study, index) => (
          <CaseStudy
            key={study.sys.id}
            imgSource={`https:${study.fields.thumbnail.fields.file.url}`}
            externalLink={study.fields.externalLink}
            alt={study.fields.thumbnail.fields.description}
          >
            {!study.fields.slug.fields.hasPost ? null : (
              <InternalLink
                className="internal-link internal-link-box"
                internalLink={`/blog/${study.fields.slug}`}
              >
                <ForumIcon className="internal-link__icon" />
                Read: {study.fields.title}
              </InternalLink>
            )}
          </CaseStudy>
        ))}
*/
