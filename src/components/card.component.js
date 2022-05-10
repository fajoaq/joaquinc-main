import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { ImgWithLazyRoot } from "./img-w-lazy-root.component";

const CardMediaContainer = styled("div")`
  position: relative;
  aspect-ratio: 16/9;
`;

const StyledCard = styled(Card)`
  flex-basis: 31%;
  min-width: 306px;
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.link};
`;

const PostCard = ({ src, postTitle, postIntro, ...rest }) => (
  <StyledCard {...rest}>
    <CardMediaContainer>
      <ImgWithLazyRoot src={src} alt="pageprimer post image" />
    </CardMediaContainer>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {postTitle}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {postIntro}
      </Typography>
    </CardContent>
    <CardActions>
      <StyledButton size="small">Share</StyledButton>
      <StyledButton size="small">Learn More</StyledButton>
    </CardActions>
  </StyledCard>
);

export { PostCard };
