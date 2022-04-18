import { Children } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const HeaderLayout = styled(Grid)`
  display: flex;
  justify-content: center;
  padding: 3rem;
`;

const Header = ({ children }) => (
  <HeaderLayout container spacing={3}>
    {Children.map(children, (child) => (
      <Grid item>{child}</Grid>
    ))}
  </HeaderLayout>
);

export { Header };
