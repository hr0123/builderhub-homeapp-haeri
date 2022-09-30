import * as React from "react";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

const CustomizedButton = styled(Button)(({ theme }) => ({
  // width: "19rem",
  width: "30%",
  height: "100%",
  fontWeight: "700",
  fontSize: "1.5rem",
  "@media (max-width: 1024px)": {
    fontSize: "1rem",
  },
  color: "white",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  borderRadius: "50px",
  border: "none",
  marginTop: "6.25rem",
}));

export const HeroButton = () => {
  const router = useRouter();
  return (
    <CustomizedButton
      variant="contained"
      endIcon={
        <KeyboardDoubleArrowRightIcon
          sx={{ width: "2.5rem", height: "2.5rem" }}
        />
      }
      onClick={() => router.push("https://customer.dev.builderhub.io")}
    >
      빌더허브 시작하기
    </CustomizedButton>
  );
};
