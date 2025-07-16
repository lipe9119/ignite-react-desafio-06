import { Button } from "@/components/Button";
import Image from "next/image";
import { X } from "phosphor-react";
import { FormButtons, ModalContainer, ModalOverlay } from "./styles";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

import githubIconImage from "@/assets/github-icon.png";
import googleIconImage from "@/assets/google-icon.png";

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay className="modal-overlay">
      <ModalContainer className="modal-container">
        <Button onClick={onClose} size="sm" variant="ouline">
          <X size={24} />
        </Button>

        <h2>Faça login para deixar sua avaliação</h2>

        <FormButtons>
          <Button>
            <Image src={googleIconImage} alt="" width={32} height={32} />
            Entrar com Google
          </Button>

          <Button>
            <Image src={githubIconImage} alt="" width={32} height={32} />
            Entrar com Github
          </Button>
        </FormButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}
