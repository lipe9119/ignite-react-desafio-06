import Avatar from "@/components/Avatar";
import { DefaultLayout } from "@/components/DefaultLayout";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { BookmarkSimple, BookOpen, Books, User, UserList } from "phosphor-react";
import { ReactElement } from "react";
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

export default function Profile() {
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
            <EvaluatedCard />
          </BookList>
        </div>

        <ProfileDetailsContainer>
          <PersonalInfo>
            <Avatar alt="" size="lg" src="https://github.com/dornelles08.png" />

            <TitleSubtitle title="Felipe Dornelles" subtitle="membro desde 2025" size="lg" center />
          </PersonalInfo>

          <Divisor />

          <Infos>
            <InfoDetails>
              <BookOpen size={32} />
              <TitleSubtitle title="3853" subtitle="Páginas lidas" size="sm" />
            </InfoDetails>

            <InfoDetails>
              <Books size={32} />
              <TitleSubtitle title="10" subtitle="Livros Avaliados" size="sm" />
            </InfoDetails>

            <InfoDetails>
              <UserList size={32} />
              <TitleSubtitle title="8" subtitle="Autores lidos" size="sm" />
            </InfoDetails>

            <InfoDetails>
              <BookmarkSimple size={32} />
              <TitleSubtitle title="Computação" subtitle="Categoria mais lida" size="sm" />
            </InfoDetails>
          </Infos>
        </ProfileDetailsContainer>
      </ProfileContent>
    </PageContainer>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
