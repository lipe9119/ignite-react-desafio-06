import Avatar from "@/components/Avatar";
import Stars from "@/components/Stars";
import Image from "next/image";
import {
  RecentCardContainer,
  RecentCardContent,
  RecentCardHeader,
  RecentCardProfileInfo,
} from "./styles";

import bookImage from "@/assets/books/codigo-limpo.png";
import { TitleSubtitle } from "@/components/TitleSubtitle";

export default function RecentCard() {
  return (
    <RecentCardContainer>
      <RecentCardHeader>
        <RecentCardProfileInfo>
          <Avatar src="https://github.com/dornelles08.png" alt="" size="sm" />
          <TitleSubtitle title="Felipe Dornelels" subtitle="Hoje" size="sm" />
        </RecentCardProfileInfo>

        <Stars totalOfStars={4.5} />
      </RecentCardHeader>

      <RecentCardContent>
        <Image src={bookImage} alt="" width={108} height={152} />

        <div>
          <TitleSubtitle title="O Hobbit" subtitle="J.R.R Tolkien" size="sm" />
          Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet
          ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum
          fringilla velit ipsum. Sed vulputate massa velit nibh
        </div>
      </RecentCardContent>
    </RecentCardContainer>
  );
}
