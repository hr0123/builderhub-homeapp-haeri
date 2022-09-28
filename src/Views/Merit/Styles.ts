import { Container, Paper, styled } from "@mui/material";

export const Wrapper = styled(Container)(() => ({
  width: "100%",
  height: "100vh",
  padding: "230px 0 180px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const PaperWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const Number = styled("div")(({ theme }) => ({
  width: "57.18px",
  color: theme.palette.common.white,
  fontSize: "20px",
  fontWeight: "700",
  textAlign: "center",
  borderRadius: "9.41396px",
  backgroundColor: theme.palette.primary.main,
  marginBottom: "-15px",
  position: "relative",
}));

export const StyledPaper = styled(Paper)(() => ({
  width: "332px",
  height: "236px",
  border: "4px solid #EFF0F0",
  borderRadius: "28.5911px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 12px 30px 5px rgba(235,235,255,1)",
}));
