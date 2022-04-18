import { Children } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Header = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const HeaderLayout = ({ children }) => (
  <Header container spacing={3}>
    {Children.map(children, (child) => (
      <Grid item>{child}</Grid>
    ))}
  </Header>
);

export { HeaderLayout };
