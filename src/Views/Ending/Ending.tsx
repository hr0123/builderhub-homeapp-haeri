import { Typography } from "@mui/material";
import { EndingButton } from "../../Components/Button/EndingButton";
import { theme } from "../../Theme/CustomTheme";
import { Wrapper } from "./Styles";

export const Ending = () => {
  return (
    <Wrapper>
      <Typography
        variant="title36"
        sx={{ color: theme.palette.text.disabled, textAlign: "center" }}
      >
        건축,
        <br />
        누구나 안심하고 할 수 있도록
      </Typography>
      <Typography
        variant="body28"
        sx={{ color: theme.palette.text.disabled, mt: "12px" }}
      >
        빌더허브와 안심 건축을 시작해 보세요.
      </Typography>
      <img src="/Ending.png" style={{ margin: "60px 0 87px 0" }} />
      <EndingButton />
    </Wrapper>
  );
};
