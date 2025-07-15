import { styled } from "@/styles";

export const ProfileContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",

  gap: "$10",

  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: "$10",
  },
});

export const BookList = styled("div", {
  display: "flex",
  flexDirection: "column",
  minWidth: "10rem",

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

export const PersonalInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "$5",
});

export const ProfileDetailsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",

  borderLeft: "1px solid $gray-700",
});

export const Infos = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "$10",
});

export const InfoDetails = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",

  svg: {
    color: "$green-100",
  },
});

export const Divisor = styled("div", {
  margin: "$10 0",

  width: "2rem",
  height: "4px",
  borderRadius: "$full",

  background: "$gradient-horizontal",
});
