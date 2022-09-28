import { MiddleContent, MiddleWrapper, Wrapper } from "./Styles";
import { Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { MeritTop } from "./MeritMain";
import { MeritPapers } from "./MeritPapers";
import Image from "next/image";

export const Merit = () => {
  return (
    <Wrapper>
      <MeritTop />
      <MiddleWrapper data-aos="fade-up">
        <Typography
          variant="title12"
          sx={{ color: theme.palette.info.main, mt: "92px" }}
        >
          &lt; 고객사 DL E&C &gt;
        </Typography>
        <Image src="/client-1.png" alt="clientLogo" width={160} height={80} />
        <MiddleContent>
          <Typography variant="body24">
            2D 도면 기반 업무를 3D BIM 기술로 대체
          </Typography>
          <Typography
            variant="title32"
            sx={{ color: theme.palette.text.secondary }}
          >
            원가관리 혁신 효과
          </Typography>
        </MiddleContent>
        <MeritPapers />
      </MiddleWrapper>
    </Wrapper>
  );
};
