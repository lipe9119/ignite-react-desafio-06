import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const BookAssessContainer = styled(Box, {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

export const BookAssessHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "$4",

  "div:first-child": {
    display: "flex",
    alignItems: "center",
    gap: "$4",

    span: {
      fontSize: "$md",
      fontWeight: "$bold",
    },
  },
});

export const BookAssessContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  gap: "$4",
});

export const BookAssessFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "end",

  width: "100%",

  gap: "$2",

  button: {
    height: "$5",
  },

  "button:first-child": {
    color: "$purple-100",
  },

  "button:last-child": {
    color: "$green-100",
  },
});
