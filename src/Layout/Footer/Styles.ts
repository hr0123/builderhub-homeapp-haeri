import { styled } from "@mui/material";

export const Wrap = styled("div")(({ theme }) => ({
  width: "100%",
  // height: "434px",
  padding: "42px 120px 47px 120px",
  // paddingTop: "72px",
  // paddingBottom: "72px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "center",
}));

export const RowWrap = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 0",
}));

export const RowWrapBordered = styled(RowWrap)(() => ({
  borderBottom: "1px solid #A39EBF",
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
