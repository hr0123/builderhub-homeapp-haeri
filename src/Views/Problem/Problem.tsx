import { Typography } from "@mui/material";
import { BackImage, ContentWrap, ResponsiveTitle, Wrap } from "./Styles";

export const Problem = () => {
  return (
    <Wrap>
      <BackImage src="/Problem.png" />
      <ContentWrap>
        <Typography variant="h5" sx={{ fontWeight: "700", color: "#8D879B" }}>
          분명 예산 안에 된다고 했는데,
        </Typography>
        <ResponsiveTitle>또 공사 비용이 바뀌었다면?</ResponsiveTitle>
        {/* <Typography
        variant="h4"
        sx={{ fontWeight: "700", color: "#664AE3", m: "5px 0px 30px 0px" }}
        >
          또 공사 비용이 바뀌었다면?
        </Typography> */}
        <Typography variant="h6" sx={{ color: "#3B3748", textAlign: "center" }}>
          공사에 필요한 자재가 무엇이고, 자재별 수량이
          <br />
          정확하게 산출되었는지부터 확인해 보세요.
        </Typography>
      </ContentWrap>
    </Wrap>
  );
};
