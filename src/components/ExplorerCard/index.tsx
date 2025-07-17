import Stars from "@/components/Stars";
import Image from "next/image";

import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Book } from "@/pages/explore/index.page";
import { LidoTag, PopularCardContainer } from "./styles";

interface ExplorerCardProps {
  lido?: boolean;
  handleClick?: () => void;
  book: Book;
}

export default function ExplorerCard({ book, lido, handleClick }: ExplorerCardProps) {
  return (
    <PopularCardContainer onClick={handleClick} click={!!handleClick}>
      {lido && <LidoTag>LIDO</LidoTag>}
      <Image src={`/${book.cover_url}`} alt="" width={64} height={94} />

      <div>
        <TitleSubtitle title={book.name} subtitle={book.author} size="sm" />

        <Stars totalOfStars={4.5} />
      </div>
    </PopularCardContainer>
  );
}
