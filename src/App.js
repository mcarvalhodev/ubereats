import "./App.css";
import "@fontsource/roboto";
import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import { Router } from "./router/Router";

import theme from "./theme/index";
import GlobalState from "./global/GlobalSate";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container p={0}>
        <GlobalState>
          <Router />
        </GlobalState>
      </Container>
    </ChakraProvider>
  );
};

export default App;
