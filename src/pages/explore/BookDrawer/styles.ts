import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { styled } from "@/styles";

export const DrawerOverlay = styled("div", {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
});

export const Drawer = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  width: "40rem",
  height: "100%",
  backgroundColor: "$gray-800",
  padding: "2rem",
  overflowY: "auto",

  display: "flex",
  flexDirection: "column",
  alignItems: "end",

  [`${Button}`]: {
    width: "auto",

    "&:not(:disabled):hover": {
      background: "none",
    },
  },

  "&::-webkit-scrollbar": {
    width: "0.5rem",
  },
  "&::-webkit-scrollbar-track": {
    background: "$gray-700",
    borderRadius: "$full",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "$gray-600",
    borderRadius: "$full",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "$gray-500",
  },
});

export const DrawerContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$5",
  width: "100%",
});

export const BookInfos = styled(Box, {
  display: "flex",
  flexDirection: "column",

  padding: "$8",
  gap: "$8",
});

export const BookInfosHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  height: "100%",
  width: "100%",

  gap: "$10",

  "> div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export const BookInfosFooter = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",

  width: "100%",
  padding: "$5 0",

  borderTop: "1px solid $gray-600",
});

export const InfoDetails = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",

  svg: {
    color: "$green-100",
  },
});

export const CommentsHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  [`${Button}`]: {
    color: "$purple-100",
  },
});

export const CommentsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "$6",
});
