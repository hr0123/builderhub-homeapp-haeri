import { NavBar } from "./NavBar/NavBar";
import { Footer } from "./Footer/Footer";
import { styled } from "@mui/material";
import { ReactNode } from "react";

const Body = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
}));

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      <NavBar />
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
};
