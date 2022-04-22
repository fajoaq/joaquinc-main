import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Header = styled(Grid)`
  display: flex;
  justify-content: center;

  & a:hover {
    color: ${({ theme }) => theme.palette.tertiary.main};
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
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  & a.active:after {
    border-bottom: ${({ theme }) => `30px solid ${theme.palette.primary.main}`};
    transition: border-bottom 350ms ease-in-out;
  }
`;

const NavHeaderLayout = ({
  navButtons,
  activeArticleIndex,
  setNavIndex,
  handleClick,
  ...rest
}) => {
  return (
    <Header container component="nav" {...rest}>
      {navButtons.map((button, index) => (
        <Grid
          onClick={() => handleClick(index)}
          className={index == activeArticleIndex ? "active" : null}
          key={`nav-item-${index}`}
          item
          component="a"
          position="relative"
          padding={3}
        >
          <button.Icon fontSize="inherit" />
        </Grid>
      ))}
    </Header>
  );
};

export { NavHeaderLayout };
