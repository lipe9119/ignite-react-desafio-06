import { styled } from "@/styles";
import { Star, StarHalf } from "phosphor-react";
import { useState } from "react";

interface StarsProps {
  totalOfStars: number;
  size?: "sm" | "md" | "lg";
  editable?: boolean;
  onRate?: (value: number) => void;
}

const StarsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  color: "$purple-100",
  cursor: "default",

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
    editable: {
      true: { cursor: "pointer" },
    },
  },

  defaultVariants: {
    size: "sm",
  },
});

export default function Stars({ totalOfStars, size, editable = false, onRate }: StarsProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const [currentValue, setCurrentValue] = useState(totalOfStars);

  function handleClick(value: number) {
    if (!editable) return;
    setCurrentValue(value);
    onRate?.(value);
  }

  function handleMouseMove(event: React.MouseEvent, index: number) {
    if (!editable) return;

    const { left, width } = (event.target as HTMLElement).getBoundingClientRect();
    const isHalf = event.clientX - left < width / 2;
    const value = isHalf ? index + 0.5 : index + 1;
    setHoverValue(value);
  }

  function handleMouseLeave() {
    if (!editable) return;
    setHoverValue(null);
  }

  const displayedValue = hoverValue ?? currentValue;

  let stars = Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= displayedValue;
    const isHalfFilled = starNumber - displayedValue === 0.5;

    let icon = <Star />;
    if (isFilled) icon = <Star key={index} weight="fill" />;
    if (isHalfFilled) icon = <StarHalf key={index} weight="fill" />;

    if (!editable) return <span key={index}>{icon}</span>;

    return (
      <span
        key={index}
        onClick={() => handleClick(hoverValue ?? starNumber)}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={handleMouseLeave}
      >
        {icon}
      </span>
    );
  });

  return (
    <StarsContainer size={size} editable={editable}>
      {stars}
    </StarsContainer>
  );
}
