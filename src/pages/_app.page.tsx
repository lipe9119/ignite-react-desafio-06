import { DefaultLayout } from "@/components/DefaultLayout";
import { queryClient } from "@/lib/react-query";
import { globalStyles } from "@/styles/global";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

globalStyles();

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const getLayout = (Component as any).getLayout || ((page: React.ReactNode) => page);

  const page = (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </SessionProvider>
    </QueryClientProvider>
  );

  return getLayout(page);
}
