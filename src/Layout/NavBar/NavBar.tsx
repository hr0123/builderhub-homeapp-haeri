import { useRouter } from "next/router";
import { BuilderhubLogo } from "../../Components/Logo";
import { NavBarButton, Wrap } from "./Styles";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

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

export const NavBar = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Wrap>
              <BuilderhubLogo />
              <NavBarButton
                onClick={() =>
                  router.push("https://customer.dev.builderhub.io")
                }
              >
                빌더허브 시작하기
              </NavBarButton>
            </Wrap>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
