import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { multiTheme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={multiTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
