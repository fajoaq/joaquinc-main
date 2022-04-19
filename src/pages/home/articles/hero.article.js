import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ContentContainer = styled(Box)`
  display: grid;
`;

const HeroArticleContainer = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  overflow: hidden;
`;

const HeroCopyContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 3.5em 2.5em;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

const HeroPresentationContainer = styled(Grid)``;

const HeroArticleOverLay = styled(Grid)`
  grid-column: 1;
  grid-row: 1;
  z-index: 10;

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
    transition: font-size 250ms ease-in-out;
  }
`;

const HeroArticleCopy = (props) => (
  <HeroCopyContainer {...props}>
    <Typography variant="h1" marginBottom={3}>
      Francis Joaquin
    </Typography>
    <Typography component="h2" variant="h3">
      Developing Web Developer
    </Typography>
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

const HeroArticle = (props) => (
  <ContentContainer maxHeight={532} {...props}>
    <HeroArticleContainer container>
      <HeroArticleCopy item xs={7.5} rowSpacing={3} />
      <HeroArticlePresentation item xs={4.5} />
    </HeroArticleContainer>

    <HeroArticleContainer container justifyContent="end">
      <HeroArticleOverLay item xs={4.5}>
        <StyledAnchor>
          <span>&#8250;</span>
        </StyledAnchor>
      </HeroArticleOverLay>
    </HeroArticleContainer>
  </ContentContainer>
);

export { HeroArticle };
