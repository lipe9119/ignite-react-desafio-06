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

export default function RecentCard() {
  return (
    <RecentCardContainer>
      <RecentCardHeader>
        <RecentCardProfileInfo>
          <Avatar src="https://github.com/dornelles08.png" alt="" size="sm" />
          <div>
            Felipe Dornelles
            <span>Hoje</span>
          </div>
        </RecentCardProfileInfo>

        <Stars totalOfStars={4.5} />
      </RecentCardHeader>

      <RecentCardContent>
        <Image src={bookImage} alt="" width={108} height={152} />

        <div>
          <h3>
            O Hobbit
            <span>J.R.R Tolkien</span>
          </h3>
          Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet
          ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum
          fringilla velit ipsum. Sed vulputate massa velit nibh
        </div>
      </RecentCardContent>
    </RecentCardContainer>
  );
}
