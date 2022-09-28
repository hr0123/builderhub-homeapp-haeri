import { useRouter } from "next/router";
import { BuilderhubLogo } from "../../Components/Logo";
import { NavBarButton, Wrap } from "./Styles";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export const NavBar = () => {
  const router = useRouter();

  return (
    <>
      {/* <AppBar> */}
      {/* <Toolbar> */}
      <Wrap>
        <BuilderhubLogo />
        {/* <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography> */}
        <NavBarButton
          onClick={() => router.push("https://customer.dev.builderhub.io")}
        >
          빌더허브 시작하기
        </NavBarButton>
      </Wrap>
      {/* </Toolbar> */}
      {/* </AppBar> */}
    </>
  );
};
