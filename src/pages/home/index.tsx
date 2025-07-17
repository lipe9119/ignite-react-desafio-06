import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CaretRight, ChartLineUp } from "phosphor-react";
import ExplorerCard from "../../components/ExplorerCard";
import { buildNextAuthOptions } from "../api/auth/[...nextauth].api";
import LastReadCard from "./LastReadCard";
import RecentCard from "./RecentCard";
import {
  HomeContent,
  LastRead,
  LastReadHeader,
  Populars,
  PopularsContent,
  PopularsHeader,
  Recents,
  RecentsContent,
} from "./styles";

export default function Home() {
  const session = useSession();

  const isLoged = session.status === "authenticated";

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
            <ExplorerCard />
          </PopularsContent>
        </Populars>
      </HomeContent>
    </PageContainer>
  );
}

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <DefaultLayout>{page}</DefaultLayout>;
// };

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await getServerSession(req, res, buildNextAuthOptions(req, res)),
    },
  };
};
