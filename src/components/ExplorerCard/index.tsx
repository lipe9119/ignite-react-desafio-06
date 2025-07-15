import Stars from "@/components/Stars";
import Image from "next/image";

import bookImage from "@/assets/books/codigo-limpo.png";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { LidoTag, PopularCardContainer } from "./styles";

interface ExplorerCardProps {
  lido?: boolean;
}

export default function ExplorerCard({ lido }: ExplorerCardProps) {
  console.log(lido);
  
  return (
    <PopularCardContainer>
      {lido && <LidoTag>LIDO</LidoTag>}
      <Image src={bookImage} alt="" width={64} height={94} />

      <div>
        <TitleSubtitle title="O Hobbit" subtitle="J.R.R Tolkien" size="sm" />

        <Stars totalOfStars={4.5} />
      </div>
    </PopularCardContainer>
  );
}
