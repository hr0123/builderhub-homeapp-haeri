import {
  Badge,
  Box,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
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
          padding: "179px 0 179px 0",
        }}
      >
        <StyledPaper elevation={3} sx={{ width: "820px" }}>
          <Typography variant="h5" fontWeight={"700"}>
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
            <Typography variant="h5" fontWeight={"700"}>
              빌더허브로&nbsp;
            </Typography>
            <Typography variant="h5" fontWeight={"700"} color={"#664AE3"}>
              안심 건축
            </Typography>
            <Typography variant="h5" fontWeight={"700"}>
              하고 있어요.
            </Typography>
          </div>
        </StyledPaper>
        <Typography
          variant="body1"
          sx={{ color: "#93919C", fontWeight: "700", marginTop: "92px" }}
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
          <Typography variant="h6" color={"#3B3748"} fontWeight={"400"}>
            2D 도면 기반 업무를 3D BIM 기술로 대체
          </Typography>
          <Typography variant="h5" color={"#664AE3"} fontWeight={"700"}>
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
            <Typography variant="h6">아파트 건설현장의</Typography>
            <Typography variant="h6" color={"#664AE3"} fontWeight={"700"}>
              철근물량 7% 절감
            </Typography>
          </StyledPaper>
          <StyledPaper elevation={3}>
            <Typography variant="h6">전체 수주액 대비</Typography>
            <Typography variant="h6" color={"#664AE3"} fontWeight={"700"}>
              원가 2.5% 낮춤
            </Typography>
          </StyledPaper>
          <StyledPaper elevation={3}>
            <Typography variant="h6">기획 단계에서부터</Typography>
            <Typography variant="h6" color={"#664AE3"} fontWeight={"700"}>
              정확한 철근,
            </Typography>
            <Typography variant="h6" color={"#664AE3"} fontWeight={"700"}>
              골조물량을 예측
            </Typography>
          </StyledPaper>
        </Box>
      </Container>
    </Wrapper>
  );
};
