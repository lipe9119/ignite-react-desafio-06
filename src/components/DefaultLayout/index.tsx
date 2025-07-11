import SideBar from "@/components/SideBar";
import { LayoutContainer, MainContent } from "./styles";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <LayoutContainer>
      <SideBar />

      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
}
