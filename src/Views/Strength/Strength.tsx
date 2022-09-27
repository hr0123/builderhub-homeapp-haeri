import { Typography } from "@mui/material";
import { Wrapper, RowWrapper, Contents, CustomizedChip } from "./Styles";

export const Strength = () => {
  return (
    <Wrapper>
      <RowWrapper>
        <Contents>
          <CustomizedChip
            label="BIM 기반 수량 산출"
            sx={{ alignSelf: "end" }}
          />
          <Typography variant="title28" align="right" m="20px 0">
            시공에 필요한
            <br />
            철근과 골조 수량을
            <br />
            정확하게 확인!
          </Typography>
          <Typography variant="body20" align="right">
            2D 도면보다 평균 7%의 수량을 절감할 수 있어요.
            <br />
            평당이 아닌 부위별로 정확한 수량을 산출합니다.
          </Typography>
        </Contents>
        <img src="/strength-1.png" width="50%" />
      </RowWrapper>
      <RowWrapper>
        <img src="/strength-2.png" width="50%" />
        <Contents>
          <CustomizedChip
            label="합리적인 서비스 비용"
            sx={{ alignSelf: "start" }}
          />
          <Typography variant="title28" align="left" m="20px 0">
            최적의 비용으로,
            <br />
            최상의 결과를.
          </Typography>
          <Typography variant="body20" align="left">
            14년간 자체 개발한 원천 기술로
            <br />
            누구보다 빠르고 상세한 견적 결과를 제공해요.
          </Typography>
        </Contents>
      </RowWrapper>
      <RowWrapper>
        <Contents>
          <CustomizedChip
            label="BIM 기반 수량 산출"
            sx={{ alignSelf: "end" }}
          />
          <Typography variant="title28" align="right" m="20px 0">
            미리 지어진 내 건물,
            <br />
            3D로 미리보기.
          </Typography>
          <Typography variant="body20" align="right">
            부피가 큰 자재부터 아주 작은 파츠 하나가
            <br />
            어떤 공간과 부위에 사용되었는지 한 눈에 볼 수 있어요.
          </Typography>
        </Contents>
        <img src="/strength-3.png" width="50%" />
      </RowWrapper>
    </Wrapper>
  );
};
