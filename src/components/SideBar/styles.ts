import { styled } from "@/styles";

export const SideBarContainer = styled("aside", {
  display: "grid",
  flexDirection: "column",
  gridTemplateRows: "auto 1fr auto",
  alignItems: "center",
  justifyContent: "center",

  width: "14.5rem",
  borderRadius: 12,
  margin: "$5",
  padding: "$10",

  background: "$gray-700",
});

export const SideBarHeader = styled("div", {});

export const SideBarBody = styled("div", {});

export const SideBarFooter = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
