import { Box } from "@/components/Box";
import { styled } from "@/styles";

export const RecentCardContainer = styled(Box, {
  display: "flex",
  flexDirection: "column",
  borderRadius: "$md",
  padding: "$6",
  gap: "$8",

  height: "17.5rem",
});

export const RecentCardHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
});

export const RecentCardProfileInfo = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$4",
});

export const RecentCardContent = styled("div", {
  display: "flex",
  gap: "$5",
  alignItems: "start",
  justifyContent: "start",
  width: "100%",

  div: {
    display: "flex",
    flexDirection: "column",

    lineHeight: "$base",
    fontSize: "$sm",
    color: "$gray-300",

    h3: {
      display: "flex",
      flexDirection: "column",
      gap: "$1",

      fontSize: "$md",
      color: "$gray-100",
      fontWeight: "$bold",
      span: {
        fontSize: "$sm",
        color: "$gray-400",
        fontWeight: "$regular",
      },
    },
  },
});
