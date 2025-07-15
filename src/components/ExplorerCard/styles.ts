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
  },
});
