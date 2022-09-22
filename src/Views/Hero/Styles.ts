import { styled } from "@mui/material";

export const Background = styled("div")(() => ({
  width: "100%",
  backgroundColor: "#FAFAFC",
  display: "grid",
  placeContent: "center",
}));

export const Wrap = styled("div")(() => ({
  width: "1160px",
  height: "540px",
  margin: "40px 60px 40px 60px",
  borderRadius: "40px",
  boxShadow: "0px 6px 8px 2px rgba(53, 50, 62, 0.08)",
  position: "relative",
  zIndex: "1",
}));

export const BackImage = styled("img")(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "2",
  borderRadius: "40px",
}));

export const LeftWrap = styled("div")(() => ({
  position: "absolute",
  zIndex: "3",
  height: "360px",
  marginTop: "94px",
  marginLeft: "148px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
}));

export const ContentWrap = styled("div")(() => ({
  // height: "",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  marginBottom: "100px",
}));

export const SubTitle = styled("div")(() => ({
  fontSize: "24px",
  marginTop: "20px",
  marginBottom: "20px",
}));

export const Title = styled("div")(() => ({
  fontSize: "36px",
  fontWeight: "700",
}));
