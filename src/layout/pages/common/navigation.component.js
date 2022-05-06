import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";

import { ImgWithLazyRoot } from "../../../components/img-w-lazy-root.component";
import { useTransitionState } from "../../../context/transition.context";
import { constants } from "../../../constants/constants";

// link to internal page, i.e blog page
const InternalLink = ({
  internalLink,
  className = "internal-link internal-link-box",
  alt = "A Link to a Blog Page.",
  ...rest
}) => {
  const [transitionState] = useTransitionState();

  const handleClick = (e) => {
    e.preventDefault();

    if (e.currentTarget.href === undefined || e.currentTarget.href === null)
      return;

    transitionState.navigate(e.currentTarget.href);
  };

  return (
    <a
      className={className}
      href={internalLink}
      onClick={handleClick}
      alt={internalLink ? alt : "Link Disabled."}
      role="link"
      aria-label={internalLink ? alt : "Link disabled."}
      disabled={internalLink ? false : true}
      {...rest}
    />
  );
};

//
// link to case study website
// dropped support for webp/avif until adoption improves
const ExternalLink = ({ externalLink, imgSource, priority, alt, ...rest }) => (
  <a
    className={`external-link-container`}
    href={externalLink}
    target="_blank"
    rel="noopener noreferrer"
    role="link"
    aria-label={imgSource ? alt : "Link disabled."}
    disabled={externalLink ? false : true}
    {...rest}
  >
    {imgSource == undefined ? (
      <span>
        <BuildIcon fontSize="large" />
      </span>
    ) : (
      <ImgWithLazyRoot
        src={imgSource}
        type="image/jpg"
        layout="fill"
        priority={priority}
        alt={alt}
      />
    )}
  </a>
);

const NavigationBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;
const ArticleNavigation = ({ fromArticle, toArticle, ...rest }) => (
  <NavigationBox marginBottom={constants.spacing.medium} {...rest}>
    <Typography className="article-title" component="h2" variant="h3">
      {fromArticle}
    </Typography>
    <InternalLink
      className="internal-link"
      internalLink={`/${toArticle.toLowerCase()}`}
    >
      <Typography
        className="article-title"
        component="span"
        variant="articleLink"
      >
        {toArticle}&#x025B8;
      </Typography>
    </InternalLink>
  </NavigationBox>
);

export { InternalLink, ExternalLink, ArticleNavigation };
