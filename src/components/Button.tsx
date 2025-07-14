import { styled } from "@/styles";
import { ComponentProps, ElementType } from "react";

export const Button = styled("button", {
  all: "unset",

  padding: "0 $4",
  borderRadius: "$md",
  gap: "$5",

  width: "100%",

  fontWeight: "bold",
  color: "$gray-200",
  fontSize: "$lg",

  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray-200",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  variants: {
    variant: {
      primary: {
        background: "$gray-600",

        "&:not(:disabled):hover": {
          background: "$gray-500",
        },
      },
      ouline: {
        "&:not(:disabled):hover": {
          background: "$gray-600",
        },
      },
    },

    size: {
      sm: {
        height: "2.5rem",
      },
      md: {
        height: "3.5rem",
      },
      lg: {
        height: "4.5rem",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "lg",
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = "Button";
