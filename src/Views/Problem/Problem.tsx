import {
  BackImage,
  Content,
  ContentWrap,
  Subtitle,
  Title,
  Wrap,
} from "./Styles";

export const Problem = () => {
  return (
    <Wrap>
      <BackImage src="/Problem.png" />
      <ContentWrap>
        <Subtitle>분명 예산 안에 된다고 했는데,</Subtitle>
        <Title>또 공사 비용이 바뀌었다면?</Title>
        <Content>공사에 필요한 자재가 무엇이고, 자재별 수량이</Content>
        <Content>정확하게 산출되었는지부터 확인해 보세요.</Content>
      </ContentWrap>
    </Wrap>
  );
};
