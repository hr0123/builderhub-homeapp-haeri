import { styled } from "@mui/material";

export const Wrap = styled("div")(() => ({
  width: "100%",
  height: "560px",
  position: "relative",
  zIndex: "1",
}));

export const BackImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "2",
}));

export const ContentWrap = styled("div")(() => ({
  position: "absolute",
  zIndex: "3",
  width: "100%",
  padding: "177px 0 217px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ResponsiveTitle = styled("div")(() => ({
  fontSize: "32px",
  fontWeight: "700",
  color: "#664AE3",
  margin: "5px 0px 30px 0px",
}));
