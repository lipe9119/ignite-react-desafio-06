import { DefaultLayout } from "@/components/DefaultLayout";
import { globalStyles } from "@/styles/global";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

globalStyles();

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  const page = (
    <SessionProvider session={session}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  );

  return getLayout(page);
}
