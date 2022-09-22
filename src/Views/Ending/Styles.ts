import { styled } from "@mui/material";

export const Wrap = styled("div")(() => ({
  width: "100%",
  height: "1062px",
  padding: "140px 0 140px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#F4F3FD",
}));

export const Title = styled("div")(() => ({
  fontSize: "36px",
  fontWeight: "700",
}));

export const TitleColored = styled(Title)(() => ({
  color: "#664AE3",
}));

export const Description = styled("div")(() => ({
  fontSize: "28px",
  fontWeight: "400",
  color: "#3B3748",
  paddingTop: "12px",
}));
