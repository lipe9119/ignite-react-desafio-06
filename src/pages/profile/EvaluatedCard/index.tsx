import Stars from "@/components/Stars";
import Image from "next/image";

import bookImage from "@/assets/books/codigo-limpo.png";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { EvaluatedCardContainer, EvaluatedCardContent, EvaluatedCardHeader } from "./styles";

export default function EvaluatedCard() {
  return (
    <EvaluatedCardContainer>
      <span>Há 2 dias</span>

      <EvaluatedCardContent>
        <EvaluatedCardHeader>
          <Image src={bookImage} alt="" width={98} height={134} />
          <div>
            <TitleSubtitle title="O Hobbit" subtitle="J.R.R Tolkien" size="sm" />

            <Stars totalOfStars={4.5} />
          </div>
        </EvaluatedCardHeader>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et magni atque soluta? Deserunt
        dicta omnis accusantium qui dolorem, repellat voluptas? Aliquam aliquid perferendis animi.
        Accusantium nam quae commodi quibusdam harum?
      </EvaluatedCardContent>
    </EvaluatedCardContainer>
  );
}
