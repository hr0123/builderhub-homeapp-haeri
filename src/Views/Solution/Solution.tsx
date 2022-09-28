import { Typography } from "@mui/material";
import Image from "next/image";
import { theme } from "../../Theme/CustomTheme";
import { Wrapper, FadeWrapper, TitleRow } from "./Styles";

export const Solution = () => {
  return (
    <Wrapper>
      <FadeWrapper data-aos="fade-up">
        <TitleRow>
          <Typography variant="title36">빌더허브는&nbsp;</Typography>
          <Typography
            variant="title36"
            sx={{ color: theme.palette.text.secondary }}
          >
            명확한 기준
          </Typography>
          <Typography variant="title36">으로</Typography>
        </TitleRow>
        <TitleRow>
          <Typography
            variant="title36"
            sx={{ color: theme.palette.text.secondary }}
          >
            {" "}
            정확한 공사견적
          </Typography>
          <Typography variant="title36">을 제공합니다.</Typography>
        </TitleRow>
        <div style={{ margin: "32px 0" }}>
          <Image src="/solution-bar.png" alt="" width={60} height={8} />
        </div>
        <Typography variant="body20" sx={{ textAlign: "center" }}>
          이제껏 경험 못 했던 BIM 건축 견적 서비스로
          <br />
          정확한 건축 공사 견적, 쉽고 빠르게 확인하세요.
        </Typography>
      </FadeWrapper>
    </Wrapper>
  );
};
