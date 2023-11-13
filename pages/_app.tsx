import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/ChampionCard.css";
import "../styles/ChampionPage.css";
import "../styles/font.css";
import Head from "next/head";
import { AppProps } from "next/app";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#010A13",
      },
    },
  },
  fonts: {
    body: "'BeaufortforLOL'",
  },
  fontSizes: {
    "7xl": "5rem",
  },
  breakpoints: {
    mobile: "375px",
    tablet: "750px",
    monitor: "1024px",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <link rel="icon" href="leagueIcon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box m={5}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
