import { styled } from "@mui/material";

export const Wrap = styled("div")(() => ({
  width: "100%",
  height: "468px",
  padding: "120px 411px 120px 411px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  // position: "absolute",
  // backgroundColor: "red",
}));

export const TitleWrap = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-around",
  alignItems: "center",
}));

export const TitleRow = styled("div")(() => ({
  // width: "30%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Title = styled("div")(() => ({
  fontSize: "36px",
  fontWeight: "700",
}));

export const TitleColored = styled(Title)(() => ({
  color: "#664AE3",
}));

export const Explanation = styled("div")(() => ({
  fontSize: "20px",
  color: "#3B3748",
}));
