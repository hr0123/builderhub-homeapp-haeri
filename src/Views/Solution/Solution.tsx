import {
  Explanation,
  Title,
  TitleColored,
  TitleRow,
  TitleWrap,
  Wrap,
} from "./Styles";

export const Solution = () => {
  return (
    <Wrap>
      {/* <TitleWrap> */}
      <TitleRow>
        <Title>빌더허브는&nbsp;</Title>
        <TitleColored>명확한 기준</TitleColored>
        <Title>으로</Title>
      </TitleRow>
      <TitleRow>
        <TitleColored>정확한 공사견적</TitleColored>
        <Title>을 제공합니다.</Title>
      </TitleRow>
      {/* </TitleWrap> */}
      {/* <img src="/solution-bar.png" margin="32px 0 32px 0" /> */}
      <img src="/solution-bar.png" style={{ margin: "32px 0 32px 0" }} />
      <Explanation>이제껏 경험 못 했던 BIM 건축 견적 서비스로</Explanation>
      <Explanation>정확한 건축 공사 견적, 쉽고 빠르게 확인하세요.</Explanation>
    </Wrap>
  );
};
