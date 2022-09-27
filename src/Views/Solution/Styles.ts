import { styled, Typography } from "@mui/material";

export const Wrapper = styled("div")(() => ({
  width: "100%",
  padding: "120px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const TitleRow = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
