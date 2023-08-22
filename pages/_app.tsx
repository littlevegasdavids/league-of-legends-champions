import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/ChampionCard.css";

const customTheme = extendTheme({
  styles:{
      global:{
          body:{
              bg: "#010A13"
          }
      },
  },
  fonts:{
      body: "'BeaufortforLOL'"
  },
  fontSizes: {
      "7xl": "5rem"
  }, 
  breakpoints:{
      mobile: "375px", 
      tablet: "750px", 
      monitor: "1024px"
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box m={5}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
