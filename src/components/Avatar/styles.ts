import { styled } from "@/styles";
import Image from "next/image";

export const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const AvatarImage = styled(Image, {
  borderRadius: "$full",
  background: "$gradient-vertical",

  variants: {
    size: {
      sm: {
        width: "2.5rem",
        height: "2.5rem",
        padding: "1px",
      },
      md: {
        width: "4.5rem",
        height: "4.5rem",
        padding: "2px",
      },
      lg: {
        width: "6.5rem",
        height: "6.5rem",
        padding: "3px",
      },
    },
  },
});

export const AvatarFallback = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gray-600",
  borderRadius: "$full",

  svg: {
    width: "1.5rem",
    height: "1.5rem",
    color: "$gray-700",
  },

  variants: {
    size: {
      sm: {
        width: "2.5rem",
        height: "2.5rem",
        padding: "1px",
      },
      md: {
        width: "4.5rem",
        height: "4.5rem",
        padding: "2px",
      },
      lg: {
        width: "6.5rem",
        height: "6.5rem",
        padding: "3px",
      },
    },
  },
});
