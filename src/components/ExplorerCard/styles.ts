import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const PopularCardContainer = styled(Box, {
  position: "relative",
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  gap: "$5",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    height: "100%",
  },

  variants: {
    click: {
      true: {
        cursor: "pointer",
      },
    },
  },
});

export const LidoTag = styled("span", {
  position: "absolute",
  top: 0,
  right: 0,

  background: "$green-300",
  color: "$green-100",

  fontWeight: "$bold",
  fontSize: "$xs",
  lineHeight: "$shorter",

  padding: "$1 $2",
  borderTopRightRadius: "$md",
  borderBottomLeftRadius: "$sm",
});
