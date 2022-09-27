import "../styles/globals.css";
import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { Layout } from "../src/Layout";
// import { ThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/Theme/CustomTheme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
