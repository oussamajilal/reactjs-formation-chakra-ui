import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ClientList from "./components/ClientList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ClientList />
  </ChakraProvider>
);
