import { styled } from "@/styles";

export const ProfileContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",

  padding: "$10",
});

export const ProfileContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",

  gap: "$10",
});

export const BookList = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "$10",
});

export const SearchContainer = styled("div", {
  display: "flex",
  alignItems: "center",

  width: "100%",
  padding: "$5",
  marginBottom: "$10",

  border: "1px solid $gray-500",
  borderRadius: "$md",

  svg: {
    color: "$gray-500",
    height: "1.5rem",
    width: "1.5rem",
  },
});

export const SearchInput = styled("input", {
  all: "unset",

  display: "flex",
  flexDirection: "column",

  width: "100%",
});

export const ProfileDetailsContainer = styled("div", {
  borderLeft: "1px solid $gray-700",

  padding: "$10",
});
