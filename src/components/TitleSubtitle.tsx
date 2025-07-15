import { styled } from "@/styles";

interface TitleSubtitleProps {
  title: string;
  subtitle: string;
  size: "sm" | "md" | "lg";
  center?: boolean;
  reverse?: boolean;
}

const TitleSubtitleContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

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
    center: {
      true: {
        alignItems: "center",
      },
    },
  },
});

export function TitleSubtitle({
  title,
  subtitle,
  size,
  reverse = false,
  center = false,
}: TitleSubtitleProps) {
  if (reverse) {
    return (
      <TitleSubtitleContainer size={size}>
        <span>{subtitle}</span>
        <h2>{title}</h2>
      </TitleSubtitleContainer>
    );
  }

  return (
    <TitleSubtitleContainer size={size} center={center}>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </TitleSubtitleContainer>
  );
}
