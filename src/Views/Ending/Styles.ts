import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  padding: "140px 0 173px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.success.main,
}));
