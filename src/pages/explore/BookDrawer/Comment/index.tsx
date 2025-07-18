import Avatar from "@/components/Avatar";
import Stars from "@/components/Stars";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { Rating } from "@/interfaces/Rating";
import dayjs from "dayjs";
import { CommentContainer, CommentHeader } from "./styles";

interface CommentProps {
  rating: Rating;
}

export default function Comment({ rating }: CommentProps) {
  if (!rating) return null;

  const date = dayjs(rating.created_at).format("DD/MM/YYYY");
  return (
    <CommentContainer>
      <CommentHeader>
        <div>
          <Avatar alt="" src={rating.user.avatar_url} size="sm" />
          <TitleSubtitle title={rating.user.name} subtitle={date} size="sm" />
        </div>
        <Stars totalOfStars={rating.rate} />
      </CommentHeader>
      <p>{rating.description}</p>
    </CommentContainer>
  );
}
