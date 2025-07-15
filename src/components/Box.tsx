import { styled } from "@/styles";
import { ComponentProps, ElementType } from "react";

export const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "$4 $6",
  backgroundColor: "$gray-700",
  borderRadius: "$md",
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = "Box";
