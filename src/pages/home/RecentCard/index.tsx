import Avatar from "@/components/Avatar";
import Stars from "@/components/Stars";
import Image from "next/image";
import {
  RecentCardContainer,
  RecentCardContent,
  RecentCardHeader,
  RecentCardProfileInfo,
} from "./styles";

import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Book } from "@/interfaces/Book";
import { User } from "@/interfaces/User";
import dayjs from "dayjs";

interface RecentCardProps {
  book: Book;
  user: User;
  rate: number;
  description: string;
  created_at: string;
}

export default function RecentCard({ book, description, rate, user, created_at }: RecentCardProps) {
  const date = dayjs(created_at).format("DD/MM/YYYY");

  const coverPath = book.cover_url.startsWith("public/")
    ? book.cover_url.replace("public", "")
    : book.cover_url;

  const coverUrl = coverPath.startsWith("/") ? coverPath : `/${coverPath}`;

  return (
    <RecentCardContainer>
      <RecentCardHeader>
        <RecentCardProfileInfo>
          <Avatar src={user.avatar_url} alt="" size="sm" />
          <TitleSubtitle title={user.name} subtitle={date} size="sm" />
        </RecentCardProfileInfo>

        <Stars totalOfStars={rate} />
      </RecentCardHeader>

      <RecentCardContent>
        <Image src={coverUrl} alt="" width={108} height={152} />

        <div>
          <TitleSubtitle title={book.name} subtitle={book.author} size="sm" />
          {description}
        </div>
      </RecentCardContent>
    </RecentCardContainer>
  );
}
