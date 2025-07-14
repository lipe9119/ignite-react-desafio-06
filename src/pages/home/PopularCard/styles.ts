import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const PopularCardContainer = styled(Box, {
  displayy: "flex",
  alignItems: "start",
  justifyContent: "start",
  gap: "$5",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    height: "100%",

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
