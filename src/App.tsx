import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ClientList from "./components/ClientList";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <ClientList />
  </ChakraProvider>
);
