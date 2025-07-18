import { Button } from "@/components/Button";
import Image from "next/image";
import { BookmarkSimple, BookOpen, X } from "phosphor-react";
import {
  BookInfos,
  BookInfosFooter,
  BookInfosHeader,
  CommentsContainer,
  CommentsHeader,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  InfoDetails,
} from "./styles";

import Stars from "@/components/Stars";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Book } from "@/interfaces/Book";
import { Rating } from "@/interfaces/Rating";
import { api } from "@/lib/axios";
import { queryClient } from "@/lib/react-query";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import BookAssess from "./BookAssess";
import Comment from "./Comment";
import LoginModal from "./LoginModal";

interface BookDrawerProps {
  book: Book;
  onClose: () => void;
}

export interface BookAssessSchema {
  description: string;
  rate: number;
}

export default function BookDrawer({ book, onClose }: BookDrawerProps) {
  if (!book) return null;

  const session = useSession();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const isLoged = session.status === "authenticated";
  const user = session.data?.user;

  function handleAssess() {
    if (!isLoged) {
      setIsModalOpen(true);
      return;
    }
    setIsCommentOpen(true);
  }

  async function handleSendAssess(assess: BookAssessSchema) {
    const { data: rating } = await api.post("ratings", {
      description: assess.description,
      rate: assess.rate,
      user_id: user?.id,
      book_id: book.id,
    });

    await queryClient.invalidateQueries({
      queryKey: ["ratings", book.id]
    });
  }

  const coverPath = book.cover_url.startsWith("public/")
    ? book.cover_url.replace("public", "")
    : book.cover_url;
  const coverUrl = coverPath.startsWith("/") ? coverPath : `/${coverPath}`;
  const rate = book.ratings.reduce((acc, rating) => acc + rating.rate, 0) / book.ratings.length;

  const categories = book.categories.map((category) => category.name).join(", ");

  const { data: ratings } = useQuery<Rating[]>({
    queryKey: ["ratings", book.id],
    queryFn: async () => {
      const response = await api.get(`ratings/${book.id}`);
      return response.data;
    },
  });

  return (
    <DrawerOverlay>
      <Drawer>
        <Button onClick={onClose} size="sm" variant="ouline">
          <X size={24} />
        </Button>

        <DrawerContent>
          <BookInfos>
            <BookInfosHeader>
              <Image src={coverUrl} alt="" width={171} height={242} />

              <div>
                <TitleSubtitle title={book.name} subtitle={book.author} size="md" />

                <div>
                  <Stars totalOfStars={rate} />
                  <span>{book.ratings.length} avaliações</span>
                </div>
              </div>
            </BookInfosHeader>

            <BookInfosFooter>
              <InfoDetails>
                <BookmarkSimple size={32} />
                <TitleSubtitle title={categories} subtitle="Categoria" size="sm" reverse />
              </InfoDetails>

              <InfoDetails>
                <BookOpen size={32} />
                <TitleSubtitle
                  title={book.total_pages.toString()}
                  subtitle="Páginas"
                  size="sm"
                  reverse
                />
              </InfoDetails>
            </BookInfosFooter>
          </BookInfos>

          <CommentsHeader>
            Avaliações
            <Button variant="ouline" size="sm" onClick={handleAssess}>
              Avaliar
            </Button>
          </CommentsHeader>

          <CommentsContainer>
            {isCommentOpen && (
              <BookAssess onClose={() => setIsCommentOpen(false)} onSendAssess={handleSendAssess} />
            )}
            {ratings?.map((rating) => (
              <Comment key={rating.id} rating={rating} />
            ))}
          </CommentsContainer>
        </DrawerContent>
      </Drawer>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DrawerOverlay>
  );
}
