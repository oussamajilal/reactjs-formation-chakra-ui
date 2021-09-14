import React from "react";
import { Client } from "./Client/Client";

export const UserContext = React.createContext({
  user: null as Client | null,
  updateUser: (user: Client) => {},
});
