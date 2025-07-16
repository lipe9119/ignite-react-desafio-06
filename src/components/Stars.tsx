import { styled } from "@/styles";
import { Star, StarHalf } from "phosphor-react";

interface StarsProps {
  totalOfStars: number;
  size?: "sm" | "md" | "lg";
}

const StarsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  color: "$purple-100",

  svg: {
    height: "1.25rem",
    width: "1.25rem",
  },

  variants: {
    size: {
      sm: {
        svg: {
          height: "1.25rem",
          width: "1.25rem",
        },
      },
      md: {
        svg: {
          height: "1.5rem",
          width: "1.5rem",
        },
      },
      lg: {
        svg: {
          height: "1.75rem",
          width: "1.75rem",
        },
      },
    },
  },

  defaultVariants: {
    size: "sm",
  },
});

export default function Stars({ totalOfStars, size }: StarsProps) {
  let stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= totalOfStars;
    const isHalfFilled = starNumber - totalOfStars === 0.5;

    if (isFilled) {
      return <Star key={index} weight="fill" />;
    }
    if (isHalfFilled) {
      return <StarHalf key={index} weight="fill" />;
    }
    return <Star key={index} />;
  });

  return <StarsContainer size={size}>{stars}</StarsContainer>;
}
