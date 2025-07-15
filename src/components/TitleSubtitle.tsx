import { styled } from "@/styles";

interface TitleSubtitleProps {
  title: string;
  subtitle: string;
  size: "sm" | "md" | "lg";
  reverse?: boolean;
}

const TitleSubtitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",

  h2: {
    color: "$gray-100",
    lineHeight: "$short",
  },
  span: {
    color: "$gray-400",
    fontSize: "$sm",
    lineHeight: "$base",
  },

  variants: {
    size: {
      sm: {
        h2: {
          fontSize: "$md",
        },
      },
      md: {
        h2: {
          fontSize: "$lg",
        },
        span: {
          fontSize: "$md",
        },
      },
      lg: {
        h2: {
          fontSize: "$xl",
        },
      },
    },
  },
});

export function TitleSubtitle({ title, subtitle, size, reverse = false }: TitleSubtitleProps) {
  return (
    <TitleSubtitleContainer size={size}>
      {reverse ? (
        <>
          <span>{subtitle}</span>
          <h2>{title}</h2>
        </>
      ) : (
        <>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </>
      )}
    </TitleSubtitleContainer>
  );
}
