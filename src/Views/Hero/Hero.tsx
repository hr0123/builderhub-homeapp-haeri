import { Wrapper, BoxWrapper, LeftWrapper, Contents } from "./Styles";
import { BuilderhubSymbol } from "../../Components/Logo";
import { HeroButton } from "../../Components/Button/HeroButton";
import { HeroCarousel } from "./HeroCarousel";
import { Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Wrapper>
      <BoxWrapper>
        <HeroCarousel />
        <LeftWrapper>
          {/* <Contents> */}
          <BuilderhubSymbol />
          <Typography variant="body24" sx={{ m: "20px 0px" }}>
            바뀌는 게 당연한 건축?
          </Typography>
          <Typography variant="title36">빌더허브가</Typography>
          <Typography variant="title36">확 바꿔 나갑니다.</Typography>
          {/* </Contents> */}
          <HeroButton />
        </LeftWrapper>
      </BoxWrapper>
    </Wrapper>
  );
};
