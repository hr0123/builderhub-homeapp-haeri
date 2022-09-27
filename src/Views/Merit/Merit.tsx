import { Box, Container, Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { Wrapper, StyledPaper } from "./Styles";

export const Merit = () => {
  return (
    <Wrapper>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "179px 0",
        }}
      >
        <StyledPaper elevation={3} sx={{ width: "820px" }}>
          <Typography variant="title32">
            이미 국내 대형 건설사 30곳은
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="title32">빌더허브로&nbsp;</Typography>
            <Typography
              variant="title32"
              sx={{ color: theme.palette.text.secondary }}
            >
              안심 건축
            </Typography>
            <Typography variant="title32">하고 있어요.</Typography>
          </div>
        </StyledPaper>
        <Typography
          variant="title12"
          sx={{ color: theme.palette.info.main, mt: "92px" }}
        >
          &lt; 고객사 DL E&C &gt;
        </Typography>
        <img src="/client-1.png" />
        <div
          style={{
            margin: "52px 0px 52px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body24">
            2D 도면 기반 업무를 3D BIM 기술로 대체
          </Typography>
          <Typography
            variant="title32"
            sx={{ color: theme.palette.text.secondary }}
          >
            원가관리 혁신 효과
          </Typography>
        </div>
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
      </Container>
    </Wrapper>
  );
};
