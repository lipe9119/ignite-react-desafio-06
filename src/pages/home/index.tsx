import ExplorerCard from "@/components/ExplorerCard";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { Book } from "@/interfaces/Book";
import { Rating } from "@/interfaces/Rating";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CaretRight, ChartLineUp } from "phosphor-react";
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

  const { data: books } = useQuery<Book[]>({
    queryKey: ["books", "populars"],
    queryFn: async () => {
      const response = await api.get("books/populars");
      return response.data;
    },
  });

  const { data: ratings } = useQuery<Rating[]>({
    queryKey: ["ratings", "recents"],
    queryFn: async () => {
      const response = await api.get("ratings");
      return response.data;
    },
  });

  console.log(ratings);

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
              {ratings?.map((rating) => (
                <RecentCard
                  key={rating.id}
                  book={rating.book}
                  user={rating.user}
                  rate={rating.rate}
                  description={rating.description}
                  created_at={rating.created_at}
                />
              ))}
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
            {books?.map((book) => (
              <ExplorerCard key={book.id} book={book} />
            ))}
          </PopularsContent>
        </Populars>
      </HomeContent>
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await getServerSession(req, res, buildNextAuthOptions(req, res)),
    },
  };
};
