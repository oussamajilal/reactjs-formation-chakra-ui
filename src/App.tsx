import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ClientList from "./components/Client/ClientList";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <ClientList />
    </ChakraProvider>
  </QueryClientProvider>
);
