import Stars from "@/components/Stars";
import Image from "next/image";

import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Rating } from "@/interfaces/Rating";
import dayjs from "dayjs";
import { EvaluatedCardContainer, EvaluatedCardContent, EvaluatedCardHeader } from "./styles";

interface EvaluatedCardProps {
  rating: Rating;
}

export default function EvaluatedCard({ rating }: EvaluatedCardProps) {
  const date = dayjs(rating.created_at).format("DD/MM/YYYY");

  const coverPath = rating.book.cover_url.startsWith("public/")
    ? rating.book.cover_url.replace("public", "")
    : rating.book.cover_url;
  const coverUrl = coverPath.startsWith("/") ? coverPath : `/${coverPath}`;

  return (
    <EvaluatedCardContainer>
      <span>{date}</span>

      <EvaluatedCardContent>
        <EvaluatedCardHeader>
          <Image src={coverUrl} alt="" width={98} height={134} />
          <div>
            <TitleSubtitle title={rating.book.name} subtitle={rating.book.author} size="sm" />

            <Stars totalOfStars={rating.rate} />
          </div>
        </EvaluatedCardHeader>
        <p>{rating.description}</p>
      </EvaluatedCardContent>
    </EvaluatedCardContainer>
  );
}
