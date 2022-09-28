import { NavBar } from "./NavBar/NavBar";
import { Footer } from "./Footer/Footer";
import { styled } from "@mui/material";
import { ReactNode } from "react";

import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

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
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      {/* <HideOnScroll {...props}> */}
      <NavBar />
      {/* </HideOnScroll> */}
      {/* <Toolbar /> */}
      <Body>{props.children}</Body>
      <Footer />
    </>
  );
};
