import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { contentGridSharedStyles } from "../common/common.styles";

const ContentContainer = styled(Box)`
  ${contentGridSharedStyles}

  && .article-copy.active-child h1,
  .article-copy.active-child h2 {
    opacity: 1;
    transition-delay: 400ms;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
  }

  && .article-copy.active-child > div {
    opacity: 1;
    max-height: 100%;
    transform: translateX(0%) translateY(0%);
  }

  && .article-presentation.active-child {
    opacity: 1;
    transform: translateX(0%) translateY(0%);
    transition-delay: 160ms;
    transition-duration: 460ms;
    transition-timing-function: ease-in-out;
  }

  & .article-overlay.active-child {
    opacity: 1;
    transition-delay: 300ms;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }
`;

const HeroArticleContainer = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  overflow: hidden;
`;

const HeroCopyContainer = styled(Grid)`
  display: grid;

  & > div {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 3.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.primary.main};
    z-index: 10;
    max-height: 0%;
    transform: translateX(-100%);
    transition: max-height, transform, 560ms ease-in-out;
  }

  && div h1,
  div h2 {
    opacity: 0;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
  }
`;

const HeroPresentationContainer = styled(Grid)`
  transform: translateX(-100%);
  opacity: 0;

  transition: transform, opacity, 400ms ease-in-out;
`;

const HeroArticleOverLay = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  z-index: 10;
  opacity: 0;
  transition: opacity 400ms ease-in-out;

  & :hover {
    font-size: 9.5rem;
  }
`;

const StyledAnchor = styled("a")`
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  height: 100%;
  width: 100%;
  margin: 0;
  font-size: 7rem;

  & span {
    display: inline-block;
    line-height: 0;
    height: 7.5rem;
    padding: 2.9rem 2.5rem;
    background-color: rgba(167, 255, 0, 0.88);
    transition: font-size 400ms ease-in-out;
  }
`;

const HeroArticleCopy = (props) => (
  <HeroCopyContainer {...props}>
    <div>
      <Typography variant="h1" marginBottom={3}>
        Francis Joaquin
      </Typography>
      <Typography component="h2" variant="h3">
        Developing Web Developer
      </Typography>
    </div>
  </HeroCopyContainer>
);

const HeroArticlePresentation = (props) => (
  <HeroPresentationContainer {...props}>
    <img
      src="/static/fj-orange.png"
      width="100%"
      height="auto"
      alt="Francis Joaquin"
    />
  </HeroPresentationContainer>
);

const HeroArticle = ({ id = "active", ...rest }) => (
  <ContentContainer id={id} component="main" maxHeight={532} {...rest}>
    <HeroArticleContainer className="article-content" container>
      <HeroArticleCopy
        className={`article-copy ${id}-child  main-transition`}
        item
        xs={7.5}
        rowSpacing={3}
      />
      <HeroArticlePresentation
        className={`article-presentation ${id}-child `}
        item
        xs={4.5}
      />
    </HeroArticleContainer>

    <HeroArticleContainer container justifyContent="end">
      <HeroArticleOverLay
        className={`article-overlay ${id}-child `}
        item
        xs={4.5}
      >
        <StyledAnchor>
          <span>&#8250;</span>
        </StyledAnchor>
      </HeroArticleOverLay>
    </HeroArticleContainer>
  </ContentContainer>
);

export { HeroArticle };
