import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ClientTable from "./components/ClientTable";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ClientTable />
  </ChakraProvider>
);
