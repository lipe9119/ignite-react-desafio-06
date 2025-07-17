import ExplorerCard from "@/components/ExplorerCard";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { Binoculars } from "phosphor-react";
import { useState } from "react";
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

export interface Book {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
}

export default function Explore() {
  const [filter, setFilter] = useState("all");
  const [selectedBook, setSelectedBook] = useState<null | string>(null);

  const { data: books } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await api.get("books");
      return response.data;
    },
  });

  console.log(books);

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
          {books?.map((book) => (
            <ExplorerCard
              key={book.id}
              book={book}
              handleClick={() => setSelectedBook(book.id)}
              lido={false}
            />
          ))}
        </BookList>
      </ExplorerContent>

      {selectedBook && <BookDrawer book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </PageContainer>
  );
}

// Explore.getLayout = function getLayout(page: ReactElement) {
//   return <DefaultLayout>{page}</DefaultLayout>;
// };
