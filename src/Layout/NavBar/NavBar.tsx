import { useRouter } from "next/router";
import { BuilderhubLogo } from "../../Components/Logo";
import { NavBarButton, Wrap } from "./Styles";

export const NavBar = () => {
  const router = useRouter();
  return (
    <Wrap>
      <BuilderhubLogo />
      <NavBarButton
        onClick={() => router.push("https://customer.dev.builderhub.io")}
      >
        빌더허브 시작하기
      </NavBarButton>
    </Wrap>
  );
};
