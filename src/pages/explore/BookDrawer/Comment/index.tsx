import Avatar from "@/components/Avatar";
import Stars from "@/components/Stars";
import { TitleSubtitle } from "@/components/TitleSubtitle";
import { CommentContainer, CommentHeader } from "./styles";

export default function Comment() {
  return (
    <CommentContainer>
      <CommentHeader>
        <div>
          <Avatar alt="" src="https://github.com/dornelles08.png" size="sm" />
          <TitleSubtitle title="Felipe Dornelles" subtitle="Hoje" size="sm" />
        </div>
        <Stars totalOfStars={5} />
      </CommentHeader>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus id dignissimos
      perferendis officia placeat deserunt sit cupiditate exercitationem unde molestias magni, autem
      quisquam quam, facilis beatae voluptate dolor ratione?
    </CommentContainer>
  );
  CommentContainer;
}
