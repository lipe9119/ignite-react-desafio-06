import { DefaultLayout } from "@/components/DefaultLayout";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { CaretRight, ChartLineUp } from "phosphor-react";
import { ReactElement } from "react";
import LastReadCard from "./LastReadCard";
import PopularCard from "./PopularCard";
import RecentCard from "./RecentCard";
import {
  HomeContent,
  LastRead,
  LastReadHeader,
  Populars,
  PopularsContent,
  PopularsHeader,
  Recents,
  RecentsContent
} from "./styles";

export default function Home() {
  const isLoged = true;

  return (
    <PageContainer>
      <PageHeader>
        <ChartLineUp size={32} />
        <span>Início</span>
      </PageHeader>

      <HomeContent>
        <div>
          {isLoged && (
            <LastRead>
              <LastReadHeader>
                <span>Sua última leitura</span>
                <Link href="/profile">
                  Ver todos
                  <CaretRight size={16} />
                </Link>
              </LastReadHeader>

              <LastReadCard />
            </LastRead>
          )}

          <Recents>
            <div>Avaliações mais recentes</div>

            <RecentsContent>
              <RecentCard />
            </RecentsContent>
          </Recents>
        </div>

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
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
