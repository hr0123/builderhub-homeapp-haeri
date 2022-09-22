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
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Subtitle = styled("div")(() => ({
  fontSize: "24px",
  fontWeight: "700",
  color: "#8D879B",
}));

export const Title = styled("div")(() => ({
  fontSize: "32px",
  fontWeight: "700",
  color: "#664AE3",
  marginBottom: "30px",
}));

export const Content = styled("div")(() => ({
  fontSize: "20px",
  fontWeight: "400",
  color: "#3B3748",
}));
