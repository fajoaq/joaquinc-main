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
  min-width: 334px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    min-width: 300px;
  }
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.text.link};
`;

const PostCard = ({
  src,
  href,
  postTitle,
  blogIntro,
  readingTime,
  ...rest
}) => (
  <StyledCard elevation={2} {...rest}>
    <CardMediaContainer>
      <ImgWithLazyRoot src={src} alt="pageprimer post image" />
    </CardMediaContainer>
    <CardContent>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {postTitle}
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {readingTime}min read
        </Typography>
      </div>
      <Typography variant="body2" color="text.secondary">
        {blogIntro}
      </Typography>
    </CardContent>
    <CardActions>
      <StyledButton href={href} size="small">
        Continue reading &#x025B8;
      </StyledButton>
    </CardActions>
  </StyledCard>
);

export { PostCard };
