import { Typography } from "@mui/material";
import { Wrap, TitleRow, Title, ResponsiveTitle } from "./Styles";

export const Solution = () => {
  return (
    <Wrap>
      <TitleRow>
        {/* <Title variant="h3">빌더허브는&nbsp;</Title> */}
        <ResponsiveTitle>빌더허브는&nbsp;</ResponsiveTitle>
        <ResponsiveTitle sx={{ color: "#664AE3" }}>명확한 기준</ResponsiveTitle>
        <ResponsiveTitle>으로</ResponsiveTitle>
      </TitleRow>
      <TitleRow>
        <ResponsiveTitle sx={{ color: "#664AE3" }}>
          정확한 공사견적
        </ResponsiveTitle>
        <ResponsiveTitle>을 제공합니다.</ResponsiveTitle>
      </TitleRow>
      <img src="/solution-bar.png" style={{ margin: "32px 0 32px 0" }} />
      <Typography variant="h6" sx={{ color: "#3B3748", textAlign: "center" }}>
        이제껏 경험 못 했던 BIM 건축 견적 서비스로
        <br />
        정확한 건축 공사 견적, 쉽고 빠르게 확인하세요.
      </Typography>
    </Wrap>
  );
};
