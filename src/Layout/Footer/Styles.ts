import { styled } from "@mui/material";

export const Wrap = styled("div")(() => ({
  width: "100%",
  height: "434px",
  paddingTop: "72px",
  paddingBottom: "72px",
  color: "white",
  backgroundColor: "#664AE3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const Content = styled("div")(() => ({
  height: "5px",
  color: "white",
  fontSize: "12px",
}));

export const ButtonWrap = styled("div")(() => ({
  width: "230px",
  marginTop: "30px",
  marginBottom: "10px",
  color: "white",
  fontSize: "16px",
  fontWeight: "700",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const FooterButton = styled("div")(() => ({
  cursor: "pointer",
}));

export const IconWrap = styled("div")(() => ({
  width: "215px",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
