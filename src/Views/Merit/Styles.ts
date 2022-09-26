import { Grid, Paper, styled, Typography } from "@mui/material";

export const Wrapper = styled(Grid)(() => ({
  width: "100%",
  backgroundColor: "#FAFAFC",
}));

export const StyledPaper = styled(Paper)(() => ({
  width: "332px",
  height: "236px",
  border: "4px solid #EFF0F0",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 12px 30px 5px rgba(235,235,255,1)",
}));

export const ColoredTypography = styled(Typography)(() => ({
  fontWeight: "700",
  color: "#664AE3",
  textAlign: "center",
}));
