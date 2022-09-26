import { Chip, Grid, styled, Typography } from "@mui/material";

export const Wrapper = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#FAFAFC",
  paddingBottom: "120px",
}));

export const RowWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginTop: "120px",
}));

export const Contents = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

export const CustomizedChip = styled(Chip)(() => ({
  height: "36px",
  padding: "4px 15px 4px 15px",
  fontSize: "20px",
  fontWeight: "700",
  color: "#664AE3",
  backgroundColor: "rgba(102, 74, 227, 0.15)",
}));

export const MainTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: "28px",
  margin: "20px 0",
  color: "#3B3748",
}));
