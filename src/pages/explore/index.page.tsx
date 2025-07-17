import ExplorerCard from "@/components/ExplorerCard";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Binoculars } from "phosphor-react";
import { useState } from "react";
import BookDrawer from "./BookDrawer";
import { BookList, ExplorerContent, ExplorerHeader, Filter, FiltersContainer } from "./styles";

export interface Book {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: Date;
  ratings: { rate: number }[];
}

export interface Category {
  id: string;
  name: string;
}

interface ExploreProps {
  filter: string;
}

export default function Explore({ filter }: ExploreProps) {
  const [selectedBook, setSelectedBook] = useState<null | string>(null);
  const router = useRouter();

  const { data: books } = useQuery<Book[]>({
    queryKey: ["books", filter],
    queryFn: async () => {
      const response = await api.get("books", {
        params: {
          category: filter,
        },
      });
      return response.data;
    },
  });

  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("categories");
      return response.data;
    },
  });

  function handleFilterClick(newFilter: string) {
    const params = new URLSearchParams(router.query as any);
    params.set("filter", newFilter);

    router.push(`/explore?${params.toString()}`);
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
          <Filter onClick={() => handleFilterClick("")} active={filter === ""}>
            Todos
          </Filter>
          {categories?.map(({ id, name }) => (
            <Filter key={id} onClick={() => handleFilterClick(id)} active={filter === id}>
              {name}
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

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const filter = query.filter || "";
  return {
    props: {
      filter,
    },
  };
};
