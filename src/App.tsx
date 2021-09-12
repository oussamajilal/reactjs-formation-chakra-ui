import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Menu from "./components/Menu";
import ReceipeForm from "./components/ReceipeForm";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Menu />
    <hr />
    <ReceipeForm />
  </ChakraProvider>
);
