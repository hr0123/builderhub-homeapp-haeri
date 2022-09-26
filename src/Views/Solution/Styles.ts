import { styled, Typography } from "@mui/material";

export const Wrap = styled("div")(() => ({
  width: "100%",
  height: "468px",
  padding: "120px 0px 120px 0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  // position: "absolute",
  // backgroundColor: "red",
}));

export const TitleRow = styled("div")(() => ({
  // width: "30%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Title = styled(Typography)(() => ({
  fontSize: "36px",
  fontWeight: "700",
}));

export const ResponsiveTitle = styled("div")(() => ({
  fontSize: "36px",
  fontWeight: "700",
}));
