import Image from "next/image";
import { Binoculars, ChartLineUp, SignIn, User } from "phosphor-react";

import { SideBarBody, SideBarContainer, SideBarFooter, SideBarHeader, SideBarItem } from "./styles";

import logo from "@/assets/logo.png";
import { useRouter } from "next/router";
import { Button } from "../Button";

export default function SideBar() {
  const router = useRouter();
  const pathname = router.pathname;

  function handleNavigate(path: string) {
    router.push(path);
  }

  return (
    <SideBarContainer>
      <SideBarHeader>
        <Image src={logo} alt="Logo" />
      </SideBarHeader>

      <SideBarBody>
        <SideBarItem active={pathname === "/"} onClick={() => handleNavigate("/")}>
          <ChartLineUp size={24} />
          <span>Início</span>
        </SideBarItem>

        <SideBarItem active={pathname === "/explore"} onClick={() => handleNavigate("/explore")}>
          <Binoculars size={24} />
          <span>Explorar</span>
        </SideBarItem>

        <SideBarItem active={pathname === "/profile"} onClick={() => handleNavigate("/profile")}>
          <User size={24} />
          <span>Perfil</span>
        </SideBarItem>
      </SideBarBody>

      <SideBarFooter>
        <Button variant="ouline" size="md" onClick={() => handleNavigate("/login")}>
          Fazer login <SignIn size={24} />
        </Button>
      </SideBarFooter>
    </SideBarContainer>
  );
}
