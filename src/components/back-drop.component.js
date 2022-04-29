import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const StyledBox = styled(Box)`
  grid-row: 2;
  grid-column: 1;
  width: 100%;
  height: 533px;
  z-index: -1;
  background-color: ${({ theme }) => theme.palette.background.main};
`;

const BackDrop = (props) => {
  return <StyledBox {...props} />;
};

export { BackDrop };
