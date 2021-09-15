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
import { UserTokenContext } from "./components/UserTokenContext";
import Login from "./components/Login/Login";
import { UserToken } from "./components/UserTypes";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

export const App = () => {
  const [userToken, setUserToken] = React.useState<UserToken | null>(null);

  function updateUserToken(userToken: UserToken) {
    setUserToken(userToken);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <UserTokenContext.Provider value={{ userToken, updateUserToken }}>
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
              <PrivateRoute path="/profile">
                <Profile />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute exact path="/">
                <ClientList />
              </PrivateRoute>
            </Switch>
          </BrowserRouter>
        </UserTokenContext.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
