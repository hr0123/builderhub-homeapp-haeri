import { Typography } from "@mui/material";
import { theme } from "../../Theme/CustomTheme";

export const MeritMain = () => {
  return (
    <div
      style={{
        width: "820px",
        alignSelf: "center",
        position: "relative",
        zIndex: "1",
      }}
    >
      <img
        src="/merit-main-frame.png"
        style={{ width: "820px", position: "absolute", zIndex: "2" }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: "3",
          padding: "77px 190px",
        }}
      >
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
      </div>
    </div>
  );
};
