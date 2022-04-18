import { Children } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Header = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const HeaderLayout = ({ children }) => (
  <Header container>
    {Children.map(children, (child) => (
      <Grid item paddingLeft={3} paddingRight={3}>
        {child}
      </Grid>
    ))}
  </Header>
);

export { HeaderLayout };
