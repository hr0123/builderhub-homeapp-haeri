import { Chip, Container, Grid, styled, Typography } from "@mui/material";

export const Wrapper = styled(Grid)(() => ({
  width: "100%",
  // padding: "120px",
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  // alignItems: "center",
  backgroundColor: "#F7F6FB",
}));

export const RowWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ColumnWrapper = styled(Grid)(() => ({
  width: "100%",
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
