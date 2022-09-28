import { Typography } from "@mui/material";
import Image from "next/image";
import { EndingButton } from "../../Components/Button/EndingButton";
import { theme } from "../../Theme/CustomTheme";
import { Wrapper } from "./Styles";

export const Ending = () => {
  return (
    <Wrapper data-aos="fade-up">
      <Typography
        variant="title36"
        sx={{ color: theme.palette.common.white, textAlign: "center" }}
      >
        건축,
        <br />
        누구나 안심하고 할 수 있도록
      </Typography>
      <Typography
        variant="body28"
        sx={{ color: theme.palette.common.white, mt: "12px" }}
      >
        빌더허브와 안심 건축을 시작해 보세요.
      </Typography>
      <div style={{ margin: "60px 0 87px 0" }}>
        <Image src="/Ending.png" alt="endingimage" width={720} height={461} />
      </div>
      <EndingButton />
    </Wrapper>
  );
};
