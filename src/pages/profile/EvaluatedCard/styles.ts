import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const EvaluatedCardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "$3",

  span: {
    fontSize: "$sm",
    color: "$gray-300",
  },
});

export const EvaluatedCardContent = styled(Box, {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",

  gap: "$5",
});

export const EvaluatedCardHeader = styled("div", {
  display: "flex",
  gap: "$6",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    minHeight: "100%",
    width: "100%",
    paddingBottom: "$1",

    h3: {
      display: "flex",
      flexDirection: "column",
      gap: "$1",

      fontSize: "$md",
      color: "$gray-100",
      fontWeight: "$bold",

      span: {
        fontSize: "$sm",
        color: "$gray-400",
        fontWeight: "$regular",
      },
    },
  },
});
