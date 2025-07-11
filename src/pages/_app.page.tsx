import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

globalStyles();

export default function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}
