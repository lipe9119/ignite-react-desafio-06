import { styled } from "@/styles";
import { ComponentProps, ElementType } from "react";

export const Box = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "$4 $6",
  backgroundColor: "$gray-700",
  borderRadius: "$sm",
  border: "1px solid $gray-700",

  fontSize: "$sm",
  fontWeight: "$regular",
  color: "$gray-300",
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
}

Box.displayName = "Box";
