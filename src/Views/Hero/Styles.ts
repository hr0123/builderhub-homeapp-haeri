import { styled } from "@mui/material";

export const Wrapper = styled("div")(() => ({
  width: "100vw",
  padding: "40px",
}));

export const BoxWrapper = styled("div")(() => ({
  // width: "1160px",
  width: "100%",
  height: "540px",
  // height: "100%",
  borderRadius: "40px",
  boxShadow: "0px 6px 8px 2px rgba(53, 50, 62, 0.08)",
  position: "relative",
  zIndex: "1",
}));

export const LeftWrapper = styled("div")(() => ({
  position: "absolute",
  zIndex: "3",
  marginTop: "94px",
  marginLeft: "148px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
}));

export const Contents = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: "100px",
}));
