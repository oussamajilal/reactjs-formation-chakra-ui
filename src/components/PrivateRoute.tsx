import * as React from "react";
import { useContext } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { UserTokenContext } from "./UserTokenContext";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const context = useContext(UserTokenContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        context.userToken?.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
