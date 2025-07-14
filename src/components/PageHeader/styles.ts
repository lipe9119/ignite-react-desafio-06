import { styled } from "@/styles";

export const PageHeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  svg: {
    color: "$green-100",
  },

  span: {
    fontSize: "$2xl",
    fontWeight: "$bold",
    color: "$gray-100",
  },
});
