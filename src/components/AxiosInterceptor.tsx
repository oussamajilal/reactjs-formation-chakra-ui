import { FC, useContext, useMemo } from "react";
import axios from "axios";
import { UserTokenContext } from "./UserTokenContext";

interface AxiosInterceptorProps {
  children: any;
}

const AxiosInterceptor: FC<AxiosInterceptorProps> = ({ children }) => {
  const { userToken } = useContext(UserTokenContext);

  useMemo(() => {
    axios.interceptors.request.use((request) => {
      if (userToken) request.headers.Authorization = userToken.accessToken;
      return request;
    });
  }, [userToken]);

  return children;
};

export default AxiosInterceptor;
