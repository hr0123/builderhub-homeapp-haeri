import { Box, Container, styled } from "@mui/material";
import Image from "next/image";

export const Wrapper = styled(Container)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "38.75rem",
  padding: "2.5rem",
}));

export const BoxWrapper = styled("div")(({ theme }) => ({
  // width: "100%",
  // height: "540px",
  [theme.breakpoints.down("tablet")]: {
    width: "20.5rem", //328px
    height: "10.625rem", //170px
  },
  [theme.breakpoints.between("tablet", "laptop")]: {
    width: "43rem", //688px
    height: "20.5rem", //328px
  },
  [theme.breakpoints.up("laptop")]: {
    width: "72.5rem", //1160px
    height: "33.75rem", //540px
  },

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
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "3",
  // marginTop: "84px",
  // marginLeft: "148px",
  padding: "5.125rem",
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
