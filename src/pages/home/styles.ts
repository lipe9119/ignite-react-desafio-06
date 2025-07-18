import { styled } from "@/styles";

export const HomeContent = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",

  gap: "$10",
});

export const LastRead = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",

  marginBottom: "$10",
});

export const LastReadHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    color: "$purple-100",
    fontSize: "$sm",
    fontWeight: "$bold",
    textDecoration: "none",
  },
});

export const Recents = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",
});

export const RecentsContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Populars = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",

  position: "sticky",
  top: "$5",
  height: "calc(100vh - (2.5rem))",
});

export const PopularsHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  a: {
    display: "flex",
    alignItems: "center",
    gap: "$2",

    color: "$purple-100",
    fontSize: "$sm",
    fontWeight: "$bold",
    textDecoration: "none",
  },
});

export const PopularsContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});
