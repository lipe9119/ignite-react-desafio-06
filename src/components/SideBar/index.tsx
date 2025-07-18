import Image from "next/image";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";

import { SideBarBody, SideBarContainer, SideBarFooter, SideBarHeader, SideBarItem } from "./styles";

import logo from "@/assets/logo.png";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Avatar from "../Avatar";

export default function SideBar() {
  const router = useRouter();
  const session = useSession();
  const pathname = router.pathname;

  const isLoged = session.status === "authenticated";
  const user = session.data?.user;

  function handleNavigate(path: string) {
    router.push(path);
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <SideBarContainer show={pathname === "/login" ? false : true}>
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

        {isLoged && (
          <SideBarItem active={pathname === "/profile"} onClick={() => handleNavigate("/profile")}>
            <User size={24} />
            <span>Perfil</span>
          </SideBarItem>
        )}
      </SideBarBody>

      <SideBarFooter isLoged={isLoged}>
        {isLoged ? (
          <button onClick={handleLogout}>
            <Avatar alt="" size="sm" src={user?.avatar_url} />
            Felipe
            <SignOut size={28} />
          </button>
        ) : (
          <button onClick={() => handleNavigate("/login")}>
            Fazer login <SignIn size={24} />
          </button>
        )}
      </SideBarFooter>
    </SideBarContainer>
  );
}
