import { AvatarContainer, AvatarImage } from "./styles";

interface AvatarProps {
  src: string;
  alt: string;
  size: "sm" | "md" | "lg";
}

export default function Avatar({ size, src, alt }: AvatarProps) {
  const width = size === "sm" ? 32 : size === "md" ? 72 : 104;
  const height = size === "sm" ? 32 : size === "md" ? 72 : 104;

  return (
    <AvatarContainer>
      <AvatarImage src={src} alt={alt} width={width} height={height} size={size} />
    </AvatarContainer>
  );
}
