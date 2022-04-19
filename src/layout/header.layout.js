import { Children, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Header = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 3rem;

  & a:hover {
    color: ${({ theme }) => theme.palette.tertiary.main};
    transition: color 200ms ease-in-out;
  }

  & a:after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 20%;
    bottom: -0.75em;
    margin-right: -0.5em;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 30px solid transparent;
    border-bottom: 0 solid transparent;
  }

  & .active a {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  & .active a:after {
    border-bottom: ${({ theme }) => `30px solid ${theme.palette.primary.main}`};
    transition: border-bottom 200ms ease-in-out;
  }
`;

const HeaderLayout = ({ children, ...rest }) => {
  const [activeNavEl, setActiveNavEl] = useState(0);
  const handleClick = (index) => {
    setActiveNavEl(index);
  };

  useEffect(() => console.log(activeNavEl), [activeNavEl]);
  return (
    <Header container paddingRight={{ xs: 0, sm: "8rem" }} {...rest}>
      {Children.map(children, (child, index) => (
        <Grid
          key={`nav-item-${index}`}
          className={index == activeNavEl ? "active" : null}
          item
          position="relative"
          paddingLeft={3}
          paddingRight={3}
          onClick={() => handleClick(index)}
        >
          {child}
        </Grid>
      ))}
    </Header>
  );
};

export { HeaderLayout };
