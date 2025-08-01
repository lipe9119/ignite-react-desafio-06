import ExplorerCard from "@/components/ExplorerCard";
import Input from "@/components/Input";
import { PageContainer } from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import { Book } from "@/interfaces/Book";
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Binoculars } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { buildNextAuthOptions } from "../api/auth/[...nextauth].api";
import BookDrawer from "./BookDrawer";
import { BookList, ExplorerContent, ExplorerHeader, Filter, FiltersContainer } from "./styles";

export interface Category {
  id: string;
  name: string;
}

interface ExploreProps {
  filter: string;
  search: string;
}

const searchSchema = z.object({
  search: z.string(),
});

type SearchFormData = z.infer<typeof searchSchema>;

export default function Explore({ filter, search }: ExploreProps) {
  const [selectedBook, setSelectedBook] = useState<undefined | Book>(undefined);
  const session = useSession();
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const user = session.data?.user;

  const { data: books } = useQuery<Book[]>({
    queryKey: ["books", filter, search, user?.id],
    queryFn: async () => {
      const response = await api.get("books", {
        params: {
          category: filter,
          search,
          userId: user?.id,
        },
      });
      return response.data;
    },
  });

  console.log(books);
  

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

  function handleSearch(data: SearchFormData) {
    const params = new URLSearchParams(router.query as any);
    params.set("search", data.search);
    params.set("filter", filter);

    router.push(`/explore?${params.toString()}`);
  }

  function handleBookClick(bookId: string) {
    const book = books?.find((book) => book.id === bookId);
    if (!book) return;
    setSelectedBook(book);
  }

  return (
    <PageContainer>
      <ExplorerHeader>
        <PageHeader>
          <Binoculars size={32} />
          <span>Explorar</span>
        </PageHeader>

        <form onSubmit={handleSubmit(handleSearch)}>
          <Input placeholder="Buscar livro ou autor" buttonType="submit" {...register("search")} />
        </form>
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
              handleClick={() => handleBookClick(book.id)}
              lido={book.lido}
            />
          ))}
        </BookList>
      </ExplorerContent>

      {selectedBook && (
        <BookDrawer book={selectedBook} onClose={() => setSelectedBook(undefined)} />
      )}
    </PageContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  const filter = query.filter || "";
  const search = query.search || "";
  return {
    props: {
      filter,
      search,
      session: await getServerSession(req, res, buildNextAuthOptions(req, res)),
    },
  };
};
