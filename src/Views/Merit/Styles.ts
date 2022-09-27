import { Container, Paper, styled } from "@mui/material";

export const Wrapper = styled(Container)(() => ({
  width: "100vw",
  height: "100vh",
  padding: "300px 0 100px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
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
