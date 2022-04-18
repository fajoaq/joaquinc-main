import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Hero = styled(Grid)`
  background-color: green;
  height: 100%;
  max-height: 532px;
`;

const HeroCopy = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.5em 2.5em;
  background-color: gold;
  height: 100%;
`;
const HeroPresentation = styled(Grid)`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const HeroArticle = () => (
  <Hero container>
    <HeroCopy item xs={7.5} rowSpacing={3}>
      <Typography variant="h1" marginBottom={3}>
        Francis Joaquin
      </Typography>
      <Typography component="h2" variant="h3">
        Developing Web Developer
      </Typography>
    </HeroCopy>

    <HeroPresentation item xs={4.5}>
      <img src="/static/fj.png" width="100%" alt="Francis Joaquin" />
    </HeroPresentation>
  </Hero>
);

export { HeroArticle };
