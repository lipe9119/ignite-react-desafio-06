import Stars from "@/components/Stars";
import Image from "next/image";

import bookImage from "@/assets/books/codigo-limpo.png";
import { PopularCardContainer } from "./styles";

export default function PopularCard() {
  return (
    <PopularCardContainer>
      <Image src={bookImage} alt="" width={64} height={94} />

      <div>
        <h3>
          O Hobbit
          <span>J.R.R Tolkien</span>
        </h3>

        <Stars totalOfStars={4.5} />
      </div>
    </PopularCardContainer>
  );
}
