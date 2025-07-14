import { styled } from "@/styles";
import Image from "next/image";

export const AvatarContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$gradient-vertical",
  borderRadius: "$full",

  variants: {
    size: {
      sm: {
        width: "2.5rem",
        height: "2.5rem",
      },
      md: {
        width: "4.5rem",
        height: "4.5rem",
      },
      lg: {
        width: "6.5rem",
        height: "6.5rem",
      },
    },
  },
});

export const AvatarImage = styled(Image, {
  borderRadius: "$full",
});
