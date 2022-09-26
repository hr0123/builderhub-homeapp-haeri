import { styled } from "@mui/material";
// import { CustomTheme } from "../../Theme/CustomTheme";

export const Wrap = styled("div")(() => ({
  width: "100%",
  height: "60px",
  backgroundColor: "#664AE3",
  padding: "21px 130px 21px 120px",
  color: "white",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const NavBarButton = styled("div")(({ theme }) => ({
  fontSize: "16px",
  fontWeight: "700",
  // color: "white",
  color: theme.fontPalette.white,
  cursor: "pointer",
  // "&:hover": {
  //   fontSize: "16.5px",
  // },
}));
