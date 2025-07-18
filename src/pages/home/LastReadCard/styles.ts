import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const LastReadContainer = styled(Box, {
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "start",
  gap: "$10",
  borderRadius: "$md",
  width: "100%",
});

export const LastReadContent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const LastReadHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "span:fist-child": {
    color: "$gray-400",
    fontSize: "$sm",
  },
});
