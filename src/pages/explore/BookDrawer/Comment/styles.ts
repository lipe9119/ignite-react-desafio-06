import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const CommentContainer = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
});

export const CommentHeader = styled("div", {
  display: "flex",
  alignContent: "start",
  justifyContent: "space-between",
  width: "100%",

  "div:first-child": {
    display: "flex",
    alignItems: "center",
    gap: "$4",
  },
});
