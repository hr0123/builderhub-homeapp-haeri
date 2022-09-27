import { Box, Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { StyledPaper } from "./Styles";

export const MeritPapers = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StyledPaper elevation={3}>
        <Typography variant="body24">아파트 건설현장의</Typography>
        <Typography
          variant="title24"
          sx={{ color: theme.palette.text.secondary }}
        >
          철근물량 7% 절감
        </Typography>
      </StyledPaper>
      <StyledPaper elevation={3}>
        <Typography variant="body24">전체 수주액 대비</Typography>
        <Typography
          variant="title24"
          sx={{ color: theme.palette.text.secondary }}
        >
          원가 2.5% 낮춤
        </Typography>
      </StyledPaper>
      <StyledPaper elevation={3}>
        <Typography variant="body24">기획 단계에서부터</Typography>
        <Typography
          variant="title24"
          sx={{ color: theme.palette.text.secondary, textAlign: "center" }}
        >
          정확한 철근,
          <br />
          골조물량을 예측
        </Typography>
      </StyledPaper>
    </Box>
  );
};
