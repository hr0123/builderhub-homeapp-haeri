import { Wrapper } from "./Styles";
import { Container, Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { MeritMain } from "./MeritMain";
import { MeritPapers } from "./MeritPapers";

export const Merit = () => {
  return (
    <Wrapper>
      <MeritMain />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="title12"
          sx={{ color: theme.palette.info.main, mt: "92px" }}
        >
          &lt; 고객사 DL E&C &gt;
        </Typography>
        <img src="/client-1.png" />
        <div
          style={{
            margin: "52px 0px 52px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body24">
            2D 도면 기반 업무를 3D BIM 기술로 대체
          </Typography>
          <Typography
            variant="title32"
            sx={{ color: theme.palette.text.secondary }}
          >
            원가관리 혁신 효과
          </Typography>
        </div>
        <MeritPapers />
      </div>
    </Wrapper>
  );
};
