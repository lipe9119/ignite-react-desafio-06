import { Box } from "@/components/Box";
import { Button } from "@/components/Button";
import { styled } from "@/styles";

export const ModalOverlay = styled("div", {
  position: "fixed",
  inset: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "rgba(0, 0, 0, 0.6)",
  zIndex: 1000,
});

export const ModalContainer = styled(Box, {
  position: "relative",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: "$gray-700",
  padding: "3.5rem 4.5rem",
  borderRadius: "$md",

  width: "100%",
  maxWidth: "30rem",
  gap: "2.5rem",

  [`> ${Button}`]: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    width: "auto",

    color: "$gray-400",

    "&:not(:disabled):hover": {
      background: "none",
    },
  },

  h2: {
    fontSize: "$md",
    color: "$gray-200",
  },
});

export const FormButtons = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  gap: "$4",

  width: "100%",

  img: {
    width: "32px",
    height: "32px",
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    maxWidth: "19rem",
  },
});
