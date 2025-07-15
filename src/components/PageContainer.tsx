import { styled } from "@/styles";
import { ComponentProps, ElementType } from "react";

export const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$10",

  padding: "$10",
});

export interface PageContainerProps extends ComponentProps<typeof PageContainer> {
  as?: ElementType;
}

PageContainer.displayName = "PageContainer";
