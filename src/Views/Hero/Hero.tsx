import {
  Wrap,
  BackImage,
  LeftWrap,
  ContentWrap,
  SubTitle,
  Title,
  Background,
} from "./Styles";
import { BuilderhubSymbol } from "../../Components/Logo";
import { HeroButton } from "../../Components/Button/HeroButton";

export const Hero = () => {
  return (
    <Background>
      <Wrap>
        <BackImage src="/Hero01.png" />
        <LeftWrap>
          <ContentWrap>
            <BuilderhubSymbol />
            <SubTitle>바뀌는게 당연한 건축?</SubTitle>
            <Title>빌더허브가</Title>
            <Title>확 바꿔 나갑니다.</Title>
          </ContentWrap>
          <HeroButton />
        </LeftWrap>
      </Wrap>
    </Background>
  );
};
