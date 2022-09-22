import { EndingButton } from "../../Components/Button/EndingButton";
import { Description, Title, TitleColored, Wrap } from "./Styles";

export const Ending = () => {
  return (
    <Wrap>
      <Title>건축,</Title>
      <TitleColored>누구나 안심하고 할 수 있도록</TitleColored>
      <Description>빌더허브와 안심 건축을 시작해 보세요.</Description>
      <img src="/Ending.png" style={{ margin: "48px 0 48px 0" }} />
      <EndingButton />
    </Wrap>
  );
};
