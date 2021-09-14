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
import { Client } from "./components/Client/Client";
import { UserContext } from "./components/UserContext";

const queryClient = new QueryClient();

export const App = () => {
  const [user, setUser] = React.useState<Client | null>(null);

  function updateUser(user: Client) {
    setUser(user);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <UserContext.Provider value={{ user, updateUser }}>
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
        </UserContext.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
