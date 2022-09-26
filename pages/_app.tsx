import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "../src/Layout";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../src/Theme/CustomTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      {/* <CssBaseline /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
