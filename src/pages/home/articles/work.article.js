import { styled, forwardRef } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ContentContainer = styled(Box)`
  display: grid;
  grid-column: 1;
  grid-row: 1;

  && .article-copy.active-child > div,
  .article-presentation.active-child {
    transform: translateY(0%);
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
    grid=row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3.5em 2.5em;
    background-color: ${({ theme }) => theme.palette.primary.main};
    z-index: 10;
    transform: translateY(-100%);
    transition: transform 400ms ease-in-out;
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

const WorkArticle = ({ id, ...rest }) => (
  <ContentContainer id={id} component="main" minHeight={532} {...rest}>
    <HeroArticleContainer className="article-content" container>
      <HeroArticleCopy
        className={`article-copy ${id}-child main-transition`}
        item
        xs={12}
      />
    </HeroArticleContainer>
  </ContentContainer>
);

export { WorkArticle };
