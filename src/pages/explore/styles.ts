import { styled } from "@/styles";

export const ExplorerHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  form: {
    width: "100%",
    maxWidth: "27rem",
  },
});

export const ExplorerContent = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: "$10",
});

export const FiltersContainer = styled("div", {
  display: "flex",

  gap: "$4",
});

export const Filter = styled("label", {
  padding: "$1 $4",

  border: "1px solid $purple-100",
  borderRadius: "$full",

  color: "$purple-100",

  variants: {
    active: {
      true: {
        border: "1px solid transparent",
        color: "$gray-100",
        backgroundColor: "$purple-200",
      },
      false: {
        cursor: "pointer",
      },
    },
  },
});

export const BookList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",

  gap: "$5",
});
