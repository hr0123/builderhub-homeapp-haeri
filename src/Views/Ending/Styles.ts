import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "1062px",
  padding: "140px 0 140px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.success.main,
}));
