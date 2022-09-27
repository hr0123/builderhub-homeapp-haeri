import { styled } from "@mui/material";
import { keyframes } from "styled-components";

export const Wrapper = styled("div")(() => ({
  width: "100%",
  position: "relative",
  zIndex: "1",
  padding: "177px 0 217px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transitionProperty: "revert",
  transitionDuration: "3s",
}));
