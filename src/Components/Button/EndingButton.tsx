import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { createTheme, styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#664AE3",
      dark: "#47339e",
    },
  },
});

const CustomizedButton = styled(Button)(() => ({
  width: "450px",
  height: "74px",
  fontWeight: "700",
  fontSize: "36px",
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  borderRadius: "50px",
  border: "none",
}));

export const EndingButton = () => {
  const router = useRouter();
  return (
    <CustomizedButton
      variant="contained"
      onClick={() => router.push("https://customer.dev.builderhub.io")}
    >
      빌더허브 시작하기
    </CustomizedButton>
  );
};
