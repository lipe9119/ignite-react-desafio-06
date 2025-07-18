import Image from "next/image";

import Stars from "@/components/Stars";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Rating } from "@/interfaces/Rating";
import dayjs from "dayjs";
import { LastReadContainer, LastReadContent, LastReadHeader } from "./styles";

interface LastReadCardProps {
  rating: Rating;
}

export default function LastReadCard({ rating }: LastReadCardProps) {
  if (!rating) return null;

  const coverPath = rating.book.cover_url.startsWith("public/")
    ? rating.book.cover_url.replace("public", "")
    : rating.book.cover_url;
  const coverUrl = coverPath.startsWith("/") ? coverPath : `/${coverPath}`;

  const date = dayjs(rating.created_at).format("DD/MM/YYYY");

  return (
    <LastReadContainer>
      <Image src={coverUrl} width={108} height={152} alt="" />

      <LastReadContent>
        <LastReadHeader>
          <span>{date}</span>
          <Stars totalOfStars={rating.rate} />
        </LastReadHeader>
        <TitleSubtitle title={rating.book.name} subtitle={rating.book.author} size="sm" />
        <p>{rating.description}</p>
      </LastReadContent>
    </LastReadContainer>
  );
}
