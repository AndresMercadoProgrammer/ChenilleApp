import { Routes } from "./routes/Routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes />
        <GlobalStyles />
      </ChakraProvider>
    </>
  );
}

export default App;
