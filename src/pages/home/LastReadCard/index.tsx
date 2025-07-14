import Image from "next/image";

import bookImage from "@/assets/books/codigo-limpo.png";
import Stars from "@/components/Stars";
import { LastReadContainer, LastReadContent, LastReadHeader } from "./styles";

export default function LastReadCard() {
  return (
    <LastReadContainer>
      <Image src={bookImage} width={108} height={152} alt="Book image" />

      <LastReadContent>
        <LastReadHeader>
          <span>Hoje</span>
          <Stars totalOfStars={4.5} />
        </LastReadHeader>
        <h3>
          O Hobbit
          <span>J.R.R Tolkien</span>
        </h3>
        Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet
      </LastReadContent>
    </LastReadContainer>
  );
}
