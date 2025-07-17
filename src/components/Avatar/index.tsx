import { User } from "phosphor-react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";

interface AvatarProps {
  src?: string | null;
  alt: string;
  size: "sm" | "md" | "lg";
}

export default function Avatar({ size, src, alt }: AvatarProps) {
  const width = size === "sm" ? 32 : size === "md" ? 72 : 104;
  const height = size === "sm" ? 32 : size === "md" ? 72 : 104;

  return (
    <AvatarContainer>
      {src ? (
        <AvatarImage src={src} alt={alt} width={width} height={height} size={size} />
      ) : (
        <AvatarFallback size={size}>
          <User size={24} />
        </AvatarFallback>
      )}
    </AvatarContainer>
  );
}
