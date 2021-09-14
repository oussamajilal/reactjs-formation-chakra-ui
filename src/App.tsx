import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import ClientList from "./components/Client/ClientList";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { QueryClient, QueryClientProvider } from "react-query";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Profile from "./components/Profile/Profile";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <BrowserRouter>
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <ClientList />
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
);
