import { styled } from "@mui/material/styles";

const HeroArticle = styled("div")`
  background-color: green;
  height: 100%;
  max-height: 532px;
`;

const Hero = () => <HeroArticle>This is hero</HeroArticle>;

export { Hero };
