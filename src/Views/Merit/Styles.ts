import { Grid, Paper, styled, Typography } from "@mui/material";

export const Wrapper = styled(Grid)(() => ({
  width: "100%",
  backgroundColor: "#F7F6FB",
}));

export const StyledPaper = styled(Paper)(() => ({
  width: "332px",
  height: "236px",
  border: "4px solid #EFF0F0",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 10px 23px 26px rgba(244,243,253,1)",
}));

// export const StyeldTypography = styled(Typography)(()=>({

// }))
