import { DefaultLayout } from "@/components/DefaultLayout";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { CaretRight, ChartLineUp } from "phosphor-react";
import { ReactElement } from "react";
import PopularCard from "./PopularCard";
import RecentCard from "./RecentCard";
import {
  HomeContainer,
  HomeContent,
  Populars,
  PopularsContent,
  PopularsHeader,
  Recents,
  RecentsContent,
} from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <PageHeader>
        <ChartLineUp size={32} />
        <span>Início</span>
      </PageHeader>

      <HomeContent>
        <Recents>
          <div>Avaliações mais recentes</div>

          <RecentsContent>
            <RecentCard />
          </RecentsContent>
        </Recents>

        <Populars>
          <PopularsHeader>
            <span>Livros populares</span>
            <Link href="/explore">
              Ver todos
              <CaretRight size={16} />
            </Link>
          </PopularsHeader>

          <PopularsContent>
            <PopularCard />
          </PopularsContent>
        </Populars>
      </HomeContent>
    </HomeContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
