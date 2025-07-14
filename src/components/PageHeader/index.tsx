import { PageHeaderContainer } from "./styles";

interface PageHeaderProps {
  children: React.ReactNode;
}

export default function PageHeader({ children }: PageHeaderProps) {
  return <PageHeaderContainer>{children}</PageHeaderContainer>;
}
