import Stars from "@/components/Stars";
import Image from "next/image";

import { TitleSubtitle } from "@/components/TitleSubtitle";

import { Book } from "@/interfaces/Book";
import { LidoTag, PopularCardContainer } from "./styles";

interface ExplorerCardProps {
  lido?: boolean;
  handleClick?: () => void;
  book: Book;
}

export default function ExplorerCard({ book, lido, handleClick }: ExplorerCardProps) {
  const coverPath = book.cover_url.startsWith("public/")
    ? book.cover_url.replace("public", "")
    : book.cover_url;

  const coverUrl = coverPath.startsWith("/") ? coverPath : `/${coverPath}`;

  const rate = book.ratings.reduce((acc, rating) => acc + rating.rate, 0) / book.ratings.length;

  return (
    <PopularCardContainer onClick={handleClick} click={!!handleClick}>
      {lido && <LidoTag>LIDO</LidoTag>}
      <Image src={coverUrl} alt="" width={64} height={94} />

      <div>
        <TitleSubtitle title={book.name} subtitle={book.author} size="sm" />

        <Stars totalOfStars={rate} />
      </div>
    </PopularCardContainer>
  );
}
