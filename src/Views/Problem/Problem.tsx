import { Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { BackImage, ContentWrap, Wrapper } from "./Styles";

export const Problem = () => {
  return (
    <Wrapper>
      <BackImage src="/Problem.png" />
      <ContentWrap>
        <Typography variant="title24" sx={{ color: theme.palette.info.main }}>
          분명 예산 안에 된다고 했는데,
        </Typography>
        <Typography
          variant="title32"
          sx={{ color: theme.palette.text.secondary, m: "4px 0 20px 0" }}
        >
          또 공사 비용이 바뀌었다면?
        </Typography>
        <Typography variant="body20" sx={{ textAlign: "center" }}>
          공사에 필요한 자재가 무엇이고, 자재별 수량이
          <br />
          정확하게 산출되었는지부터 확인해 보세요.
        </Typography>
      </ContentWrap>
    </Wrapper>
  );
};
