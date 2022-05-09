import type { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box } from "@mui/material";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "../components/Global/Navbar/Navbar";
import ColorModeProvider from "../theme/ColorMode";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ColorModeProvider>
        {/* eslint-disable-next-line */}
        <Hydrate state={pageProps.dehydratedState}>
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
              position: "absolute",
              padding: "0",
              margin: "0",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflowX: "hidden"
            }}
          >
            <Navbar />
            <Component {...pageProps} />
          </Box>
        </Hydrate>
      </ColorModeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
