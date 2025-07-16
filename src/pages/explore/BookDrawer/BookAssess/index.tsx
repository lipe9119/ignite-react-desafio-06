import Avatar from "@/components/Avatar";
import { Button } from "@/components/Button";
import Stars from "@/components/Stars";
import TextArea from "@/components/TextArea";
import { Check, X } from "phosphor-react";
import { useState } from "react";
import { BookAssessSchema } from "..";
import {
  BookAssessContainer,
  BookAssessContent,
  BookAssessFooter,
  BookAssessHeader,
} from "./styles";

interface BookAssessProps {
  onClose: () => void;
  onSendAssess: (assess: BookAssessSchema) => void;
}

export default function BookAssess({ onClose, onSendAssess }: BookAssessProps) {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  function handleSendAssess() {
    onSendAssess({ rate, comment });
    onClose();
  }

  return (
    <BookAssessContainer as="form">
      <BookAssessHeader>
        <div>
          <Avatar src="https://github.com/dornelles08.png" alt="" size="sm" />
          <span>Felipe Dornelles</span>
        </div>
        <Stars
          totalOfStars={0}
          size="lg"
          editable
          onRate={(value) => console.log("Avaliado com:", value)}
        />
      </BookAssessHeader>

      <BookAssessContent>
        <TextArea placeholder="Escreva sua avaliação" />
      </BookAssessContent>

      <BookAssessFooter>
        <Button size="md" onClick={onClose}>
          <X size={24} />
        </Button>

        <Button size="md" type="submit" onClick={handleSendAssess}>
          <Check size={24} />
        </Button>
      </BookAssessFooter>
    </BookAssessContainer>
  );
}
