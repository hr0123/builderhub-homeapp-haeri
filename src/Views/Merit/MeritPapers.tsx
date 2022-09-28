import { Box, Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { Number, PaperWrapper, StyledPaper } from "./Styles";

export const MeritPapers = () => {
  return (
    <Box
      data-aos="fade-up"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PaperWrapper>
        <Number>01</Number>
        <StyledPaper elevation={3}>
          <Typography variant="body24">아파트 건설현장의</Typography>
          <Typography
            variant="title24"
            sx={{ color: theme.palette.text.secondary }}
          >
            철근물량 7% 절감
          </Typography>
        </StyledPaper>
      </PaperWrapper>

      <PaperWrapper>
        <Number>02</Number>
        <StyledPaper elevation={3}>
          <Typography variant="body24">전체 수주액 대비</Typography>
          <Typography
            variant="title24"
            sx={{ color: theme.palette.text.secondary }}
          >
            원가 2.5% 낮춤
          </Typography>
        </StyledPaper>
      </PaperWrapper>

      <PaperWrapper>
        <Number>03</Number>
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
      </PaperWrapper>
    </Box>
  );
};
