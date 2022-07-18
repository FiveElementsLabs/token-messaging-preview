import '../styles/globals.css';
// import { ChakraProvider } from '@chakra-ui/react';

function HackFSMessaging({ Component, pageProps }) {
  return (
    <div style={{ padding: '100px' }}>
      <Component {...pageProps} />;
    </div>
  );
}

export default HackFSMessaging;
