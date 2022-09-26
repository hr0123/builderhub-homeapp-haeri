import { Wrapper, BoxWrapper, LeftWrapper, Contents } from "./Styles";
import { BuilderhubSymbol } from "../../Components/Logo";
import { HeroButton } from "../../Components/Button/HeroButton";
import { HeroCarousel } from "./HeroCarousel";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Wrapper>
      <Container fixed>
        <BoxWrapper>
          <HeroCarousel />
          <LeftWrapper>
            <Contents>
              <BuilderhubSymbol />
              <Typography variant="h5" sx={{ m: "20px 0px 20px 0px" }}>
                바뀌는게 당연한 건축?
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "700" }}>
                빌더허브가
                <br />확 바꿔 나갑니다.
              </Typography>
            </Contents>
            <HeroButton />
          </LeftWrapper>
        </BoxWrapper>
      </Container>
    </Wrapper>
  );
};
