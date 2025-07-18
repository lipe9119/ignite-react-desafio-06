import Avatar from "@/components/Avatar";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Rating } from "@/interfaces/Rating";
import { User as TypeUser } from "@/interfaces/User";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { BookmarkSimple, BookOpen, Books, User, UserList } from "phosphor-react";
import { buildNextAuthOptions } from "../api/auth/[...nextauth].api";
import EvaluatedCard from "./EvaluatedCard";
import {
  BookList,
  Divisor,
  InfoDetails,
  Infos,
  PersonalInfo,
  ProfileContent,
  ProfileDetailsContainer,
} from "./styles";

interface UserMetrics {
  readedPages: number;
  booksRated: number;
  authorsReaded: number;
  mostCategoryReaded: string;
}

export default function Profile() {
  const session = useSession();
  const user = session.data?.user;

  const { data: ratings } = useQuery<Rating[]>({
    queryKey: ["ratings", user?.id],
    queryFn: async () => {
      const response = await api.get(`users/${user?.id}/ratings`);
      return response.data;
    },
  });

  const { data: dbUser } = useQuery<TypeUser>({
    queryKey: ["user", user?.id],
    queryFn: async () => {
      const response = await api.get(`users/${user?.id}`);
      return response.data;
    },
  });

  const comingYear = dayjs(dbUser?.created_at).year();

  const { data: metrics } = useQuery<UserMetrics>({
    queryKey: ["user", user?.id, "metrics"],
    queryFn: async () => {
      const response = await api.get(`users/${user?.id}/metrics`);
      return response.data;
    },
  });

  return (
    <PageContainer>
      <PageHeader>
        <User size={32} />
        <span>Explorar</span>
      </PageHeader>

      <ProfileContent>
        <div>
          <Input placeholder="Buscar livro avaliado" />

          <BookList>
            {ratings?.map((rating) => (
              <EvaluatedCard key={rating.id} rating={rating} />
            ))}
          </BookList>
        </div>

        <ProfileDetailsContainer>
          <PersonalInfo>
            <Avatar alt="" size="lg" src={user?.avatar_url} />

            <TitleSubtitle
              title={user?.name ?? ""}
              subtitle={`membro desde ${comingYear}`}
              size="lg"
              center
            />
          </PersonalInfo>

          <Divisor />

          <Infos>
            <InfoDetails>
              <BookOpen size={32} />
              <TitleSubtitle
                title={metrics?.readedPages?.toString() ?? "0"}
                subtitle="Páginas lidas"
                size="sm"
              />
            </InfoDetails>

            <InfoDetails>
              <Books size={32} />
              <TitleSubtitle
                title={metrics?.booksRated?.toString() ?? "0"}
                subtitle="Livros Avaliados"
                size="sm"
              />
            </InfoDetails>

            <InfoDetails>
              <UserList size={32} />
              <TitleSubtitle
                title={metrics?.authorsReaded?.toString() ?? "0"}
                subtitle="Autores lidos"
                size="sm"
              />
            </InfoDetails>

            <InfoDetails>
              <BookmarkSimple size={32} />
              <TitleSubtitle
                title={metrics?.mostCategoryReaded ?? ""}
                subtitle="Categoria mais lida"
                size="sm"
              />
            </InfoDetails>
          </Infos>
        </ProfileDetailsContainer>
      </ProfileContent>
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
