import axios from "axios";
import * as React from "react";
import { UserTokenContext } from "./UserTokenContext";

const AxiosInterceptor: React.FC = ({ children }) => {
  const { userToken } = React.useContext(UserTokenContext);

  React.useMemo(() => {
    axios.interceptors.request.use((request) => {
      if (userToken) request.headers.Authorization = userToken.accessToken;
      return request;
    });
  }, [userToken]);

  return <>{children}</>;
};

export default AxiosInterceptor;
