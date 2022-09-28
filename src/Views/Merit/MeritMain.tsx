import { Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";
import { TopWrapper, TopContent } from "./Styles";

export const MeritTop = () => {
  return (
    <TopWrapper data-aos="fade-up">
      <img
        src="/merit-main-frame.png"
        style={{ width: "820px", position: "absolute", zIndex: "2" }}
      />
      <TopContent>
        <Typography variant="title32">이미 국내 대형 건설사 30곳은</Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="title32">빌더허브로&nbsp;</Typography>
          <Typography
            variant="title32"
            sx={{ color: theme.palette.text.secondary }}
          >
            안심 건축
          </Typography>
          <Typography variant="title32">하고 있어요.</Typography>
        </div>
      </TopContent>
    </TopWrapper>
  );
};
