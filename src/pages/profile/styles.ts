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

  paddingBottom: "$10",

  gap: "$10",
});

export const ProfileDetailsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",

  position: "sticky",
  top: "$5",
  height: "calc(100vh - (2.5rem))",

  borderLeft: "1px solid $gray-700",
});

export const PersonalInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "$5",
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
