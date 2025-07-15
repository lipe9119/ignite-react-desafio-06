import { styled } from "@/styles";

const PageHeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  svg: {
    color: "$green-100",
  },

  span: {
    fontSize: "$2xl",
    fontWeight: "$bold",
    color: "$gray-100",
  },
});

interface PageHeaderProps {
  children: React.ReactNode;
}

export default function PageHeader({ children }: PageHeaderProps) {
  return <PageHeaderContainer>{children}</PageHeaderContainer>;
}
