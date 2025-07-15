import { DefaultLayout } from "@/components/DefaultLayout";
import ExplorerCard from "@/components/ExplorerCard";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { Binoculars } from "phosphor-react";
import { ReactElement, useState } from "react";
import BookDrawer from "./BookDrawer";
import { BookList, ExplorerContent, ExplorerHeader, Filter, FiltersContainer } from "./styles";

const filters = {
  all: "Tudo",
  computing: "Computação",
  education: "Educação",
  fantasy: "Fantasia",
  scienceFiction: "Ficção científica",
  horror: "Horror",
  comics: "HQs",
  suspense: "Suspense",
};

export default function Explore() {
  const [filter, setFilter] = useState("all");
  const [selectedBook, setSelectedBook] = useState<null | string>(null);

  function handleFilterClick(newFilter: string) {
    setFilter(newFilter);
  }

  return (
    <PageContainer>
      <ExplorerHeader>
        <PageHeader>
          <Binoculars size={32} />
          <span>Explorar</span>
        </PageHeader>

        <Input placeholder="Buscar livro ou autor" />
      </ExplorerHeader>

      <ExplorerContent>
        <FiltersContainer>
          {Object.entries(filters).map(([key, value]) => (
            <Filter key={key} onClick={() => handleFilterClick(key)} active={filter === key}>
              {value}
            </Filter>
          ))}
        </FiltersContainer>

        <BookList>
          <ExplorerCard lido handleClick={() => setSelectedBook("Livro 1")} />
          <ExplorerCard />
          <ExplorerCard />
          <ExplorerCard />
          <ExplorerCard lido />
          <ExplorerCard />
          <ExplorerCard />
          <ExplorerCard />
          <ExplorerCard lido />
        </BookList>
      </ExplorerContent>

      {selectedBook && <BookDrawer book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </PageContainer>
  );
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};
