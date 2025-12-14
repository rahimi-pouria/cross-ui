import * as React from "react";
import { AppProps } from "next/app";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import '@/app/globals.css'
const theme = createTheme({
    palette: {
        mode: "light",
    },
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
