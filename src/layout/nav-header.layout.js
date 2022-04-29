import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = styled(Grid)`
  ${({ theme }) => `
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  & a:hover {
    color: ${theme.palette.tertiary.main};
    transition: color 200ms ease-in-out;
  }
  & a:active:hover {
    color: ${theme.palette.secondary.main};
    transition: color 200ms ease-in-out;
  }

  & a:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 20%;
    bottom: 0em;
    margin-right: -0.5em;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
    border-bottom: 0 solid transparent;
  }

  & a.active {
    color: ${theme.palette.background.light};
  }

  & a.active:after {
    border-bottom: 30px solid ${theme.palette.background.main};
    transition: border-bottom ${theme.constants.navTimeout + 60}ms ease-in-out;
  }

  & a.active.icon-0 {
    color: ${theme.palette.primary.main};
  }
  & a.active.icon-0:after {
    border-bottom: 30px solid ${theme.palette.primary.main};
    transition: border-bottom ${theme.constants.navTimeout + 60}ms ease-in-out;
  }

  ${theme.breakpoints.down("sm")} {
    && a:after {
      left: 15%;
    }
  }
`}
`;

const NavHeaderLayout = ({
  articlesData,
  activeArticleIndex,
  setNavIndex,
  handleClick,
  ...rest
}) => (
  <Header container component="nav" {...rest}>
    {articlesData.map((article, index) => (
      <Grid
        onClick={() => handleClick(index)}
        className={index == activeArticleIndex ? `active icon-${index}` : null}
        key={`nav-item-${index}`}
        item
        component="a"
        position="relative"
        padding={3}
        role="button"
        aria-label={article.ariaLabel}
      >
        <article.Icon fontSize="inherit" />
      </Grid>
    ))}
    {/* link to external site, not to an article */}
    <Grid
      item
      component="a"
      href="https://github.com/fajoaq"
      target="_blank"
      position="relative"
      padding={3}
      role="button"
      aria-label="Github Profile"
    >
      <GitHubIcon fontSize="inherit" />
    </Grid>
  </Header>
);

export { NavHeaderLayout };
