import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

function HackFSMessaging({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default HackFSMessaging;
