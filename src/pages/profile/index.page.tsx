import { DefaultLayout } from "@/components/DefaultLayout";
import PageHeader from "@/components/PageHeader";
import { MagnifyingGlass, User } from "phosphor-react";
import { ReactElement } from "react";
import EvaluatedCard from "./EvaluatedCard";
import {
  BookList,
  ProfileContainer,
  ProfileContent,
  ProfileDetailsContainer,
  SearchContainer,
  SearchInput,
} from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <PageHeader>
        <User size={32} />
        <span>Explorar</span>
      </PageHeader>

      <ProfileContent>
        <div>
          <SearchContainer>
            <SearchInput placeholder="Buscar livro avaliado" />
            <MagnifyingGlass />
          </SearchContainer>

          <BookList>
            <EvaluatedCard />
          </BookList>
        </div>

        <ProfileDetailsContainer>
          
        </ProfileDetailsContainer>
      </ProfileContent>
    </ProfileContainer>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
