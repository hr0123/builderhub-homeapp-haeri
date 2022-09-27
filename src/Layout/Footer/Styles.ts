import { styled } from "@mui/material";

export const Wrap = styled("div")(({ theme }) => ({
  width: "100%",
  height: "434px",
  paddingTop: "72px",
  paddingBottom: "72px",
  color: theme.palette.common.white,
  backgroundColor: "#664AE3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ButtonWrap = styled("div")(() => ({
  width: "230px",
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
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
