import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { light } from "@/scss/MaterialTheme";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo/client";

import "../scss/app.scss";
import "../scss/pc/main.scss";
import "../scss/mobile/main.scss";
  // Global integration

export default function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  const[theme, setTheme] = useState(createTheme(light));

  // socket , redux
  return (
    <ApolloProvider client={client}>
     <ThemeProvider theme={theme}>
       <CssBaseline />
        <Component {...pageProps} />    {/** FILe tarqatish */}
       </ThemeProvider>
    </ApolloProvider>
  
  );
}
