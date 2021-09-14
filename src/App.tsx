import * as React from "react";
import {
  Menu,
  MenuButton,
  ChakraProvider,
  Flex,
  theme,
  Spacer,
  IconButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import ClientList from "./components/Client/ClientList";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { QueryClient, QueryClientProvider } from "react-query";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { DragHandleIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex>
          <Spacer />
          <ColorModeSwitcher />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link to="/">
                <MenuItem icon={<DragHandleIcon />}>Home Page</MenuItem>
              </Link>
              <Link to="/profile">
                <MenuItem icon={<StarIcon />}>Profile</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
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
