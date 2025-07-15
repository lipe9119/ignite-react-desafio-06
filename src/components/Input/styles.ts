import { styled } from "@/styles";

export const InputContainer = styled("div", {
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
