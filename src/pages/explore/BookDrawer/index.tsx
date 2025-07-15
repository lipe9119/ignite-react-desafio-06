import { Button } from "@/components/Button";
import Image from "next/image";
import { BookmarkSimple, BookOpen, X } from "phosphor-react";
import {
  BookInfos,
  BookInfosFooter,
  BookInfosHeader,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  InfoDetails,
} from "./styles";

interface BookDrawerProps {
  book: any;
  onClose: () => void;
}

import bookImage from "@/assets/books/fragmentos-do-horror.png";
import Stars from "@/components/Stars";
import { TitleSubtitle } from "@/components/TitleSubtitle";

export default function BookDrawer({ book, onClose }: BookDrawerProps) {
  if (!book) return null;

  return (
    <DrawerOverlay>
      <Drawer>
        <Button onClick={onClose} size="sm" variant="ouline">
          <X size={24} />
        </Button>

        <DrawerContent>
          <BookInfos>
            <BookInfosHeader>
              <Image src={bookImage} alt="" width={171} height={242} />

              <div>
                <TitleSubtitle
                  title="14 Hábitos de Desenvolvedores Altamente Produtivos"
                  subtitle="Zeno Rocha"
                  size="md"
                />

                <div>
                  <Stars totalOfStars={5} />
                  <span>5 avaliações</span>
                </div>
              </div>
            </BookInfosHeader>

            <BookInfosFooter>
              <InfoDetails>
                <BookmarkSimple size={32} />
                <TitleSubtitle
                  title="Computação, educação"
                  subtitle="Categoria"
                  size="sm"
                  reverse
                />
              </InfoDetails>

              <InfoDetails>
                <BookOpen size={32} />
                <TitleSubtitle title="160" subtitle="Páginas" size="sm" reverse />
              </InfoDetails>
            </BookInfosFooter>
          </BookInfos>
        </DrawerContent>
      </Drawer>
    </DrawerOverlay>
  );
}
