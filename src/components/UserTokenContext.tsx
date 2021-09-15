import React from "react";
import { UserToken } from "./UserTypes";

export const UserTokenContext = React.createContext({
  userToken: null as UserToken | null,
  updateUserToken: (userToken: UserToken) => {},
});
