import Image from "next/image";
import { SignIn } from "phosphor-react";

import { SideBarBody, SideBarContainer, SideBarFooter, SideBarHeader } from "./styles";

import logo from "@/assets/logo.png";
import { Button } from "../Button";

export default function SideBar() {
  return (
    <SideBarContainer>
      <SideBarHeader>
        <Image src={logo} alt="Logo" />
      </SideBarHeader>

      <SideBarBody></SideBarBody>

      <SideBarFooter>
        <Button variant="ouline">
          Log In <SignIn size={24} />
        </Button>
      </SideBarFooter>
    </SideBarContainer>
  );
}
