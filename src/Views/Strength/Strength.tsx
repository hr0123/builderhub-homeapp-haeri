import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Wrapper, RowWrapper, ColumnWrapper, CustomizedChip } from "./Styles";

export const Strength = () => {
  return (
    <Wrapper>
      <Container>
        <RowWrapper>
          <ColumnWrapper>
            <CustomizedChip
              label="BIM 기반 수량 산출"
              sx={{ alignSelf: "end" }}
            />
            <Typography
              variant="h5"
              align="right"
              fontWeight={700}
              margin={"20px 0px 20px 0px"}
            >
              시공에 필요한
              <br />
              철근과 골조 수량을
              <br />
              정확하게 확인!
            </Typography>
            <Typography variant="body1" align="right">
              2D 도면보다 평균 7%의 수량을 절감할 수 있어요.
              <br />
              평당이 아닌 부위별로 정확한 수량을 산출합니다.
            </Typography>
          </ColumnWrapper>
          <img src="/strength-1.png" />
        </RowWrapper>
        <RowWrapper>
          <img src="/strength-2.png" />
          <ColumnWrapper>
            <CustomizedChip
              label="합리적인 서비스 비용"
              sx={{ alignSelf: "start" }}
            />
            <Typography
              variant="h5"
              align="left"
              fontWeight={700}
              margin={"20px 0px 20px 0px"}
            >
              최적의 비용으로,
              <br />
              최상의 결과를.
            </Typography>
            <Typography variant="body1" align="left">
              14년간 자체 개발한 원천 기술로
              <br />
              누구보다 빠르고 상세한 견적 결과를 제공해요.
            </Typography>
          </ColumnWrapper>
        </RowWrapper>
        <RowWrapper>
          <ColumnWrapper>
            <CustomizedChip
              label="BIM 기반 수량 산출"
              sx={{ alignSelf: "end" }}
            />
            <Typography
              variant="h5"
              align="right"
              fontWeight={700}
              margin={"20px 0px 20px 0px"}
            >
              미리 지어진 내 건물,
              <br />
              3D로 미리보기.
            </Typography>
            <Typography variant="body1" align="right">
              부피가 큰 자재부터 아주 작은 파츠 하나가
              <br />
              어떤 공간과 부위에 사용되었는지 한 눈에 볼 수 있어요.
            </Typography>
          </ColumnWrapper>
          <img src="/strength-3.png" />
        </RowWrapper>
      </Container>
    </Wrapper>
  );
};
