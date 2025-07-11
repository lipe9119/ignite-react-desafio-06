import { DefaultLayout } from "@/components/DefaultLayout";
import { ReactElement } from "react";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <div>Hello World</div>
    </HomeContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
