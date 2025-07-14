import { styled } from "@/styles";
import { Star, StarHalf } from "phosphor-react";

interface StarsProps {
  totalOfStars: number;
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
});

export default function Stars({ totalOfStars }: StarsProps) {
  let stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= totalOfStars;
    const isHalfFilled = starNumber - totalOfStars === 0.5;

    if (isFilled) {
      return <Star weight="fill" />;
    }
    if (isHalfFilled) {
      return <StarHalf weight="fill" />;
    }
    return <Star />;
  });

  return <StarsContainer>{stars}</StarsContainer>;
}
