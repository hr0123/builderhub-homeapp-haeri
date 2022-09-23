import { BuilderhubLogo } from "../../Components/Logo";
import { ButtonWrap, Content, FooterButton, IconWrap, Wrap } from "./Styles";
import {
  FooterChang,
  FooterYoutube,
  FooterLink,
} from "../../Components/Button";
import { useRouter } from "next/router";

export const Footer = () => {
  const router = useRouter();
  return (
    <Wrap>
      <BuilderhubLogo />
      <Content>상호명 : (주)창소프트아이앤아이</Content>
      <Content>
        사업장소재지 : 서울특별시 강남구 테헤란로103길 8-7, 2~4F (삼성동)
      </Content>
      <Content>사업자등록번호: 220-87-61198 ㅣ 전화번호: 02-563-1328</Content>
      <ButtonWrap>
        <FooterButton
          onClick={() =>
            router.push("https://sway.office.com/7cp8IEqDO4HS3abF?ref=Link")
          }
        >
          이용약관
        </FooterButton>
        <div>|</div>
        <FooterButton
          onClick={() =>
            router.push("https://sway.office.com/YRRM3dxvRSAU2Afh?ref=Link")
          }
        >
          개인정보처리방침
        </FooterButton>
      </ButtonWrap>
      <IconWrap>
        {/* <div style={{ "&:hover": { fill: "red" } }}> */}
        <FooterChang cursor="pointer" />
        {/* </div> */}
        <FooterYoutube cursor="pointer" />
        <FooterLink cursor="pointer" />
      </IconWrap>
      <Content>ⓒ2022 Changsoft i&i. All Rights Reserved.</Content>
    </Wrap>
  );
};