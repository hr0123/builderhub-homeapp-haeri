import { Typography } from "@mui/material";
import { EndingButton } from "../../Components/Button/EndingButton";
import { Wrapper } from "./Styles";

export const Ending = () => {
  return (
    <Wrapper>
      <Typography variant="h4" sx={{ fontWeight: "700" }}>
        건축,
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: "700", color: "#664AE3", mb: "12px" }}
      >
        누구나 안심하고 할 수 있도록
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "400", color: "#3B3748" }}>
        빌더허브와 안심 건축을 시작해 보세요.
      </Typography>
      <img src="/Ending.png" style={{ margin: "48px 0 48px 0" }} />
      <EndingButton />
    </Wrapper>
  );
};
