import { Container, styled } from "@mui/material";
import Image from "next/image";

export const Wrapper = styled(Container)(({ theme }) => ({
  // width: "100%",
  width: "60rem",
  [theme.breakpoints.down("desktop")]: {
    width: "43rem",
  },

  // padding: "40px 0",
  margin: "2.5rem",
}));

export const BoxWrapper = styled("div")(() => ({
  width: "100%",
  height: "540px",
  // height: "100%",
  borderRadius: "40px",
  boxShadow: "0px 6px 8px 2px rgba(53, 50, 62, 0.08)",
  position: "relative",
  zIndex: "1",
}));

export const CarouselWrapper = styled("div")(() => ({
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "2",
  borderRadius: "40px",
}));

export const StyledImage = styled(Image)(() => ({
  borderRadius: "40px",
}));

export const LeftWrapper = styled("div")(() => ({
  position: "absolute",
  zIndex: "3",
  marginTop: "84px",
  marginLeft: "148px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

export const Contents = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  marginBottom: "100px",
}));
