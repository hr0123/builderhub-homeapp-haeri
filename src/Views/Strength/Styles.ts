import { Chip, Grid, styled, Typography } from "@mui/material";

export const Wrapper = styled(Grid)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  // justifyContent: "space-between",
  alignItems: "center",
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
  padding: "0 48px",
}));

export const CustomizedChip = styled(Chip)(({ theme }) => ({
  height: "36px",
  padding: "4px 15px 4px 15px",
  fontSize: "20px",
  "@media (max-width: 1024px)": {
    fontSize: "16px",
  },
  "@media (max-width: 768px)": {
    fontSize: "12px",
  },
  fontWeight: "700",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.secondary.main,
}));
