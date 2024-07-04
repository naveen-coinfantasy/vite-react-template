import { useSDK } from "@metamask/sdk-react";
import { useLocation, Navigate, Outlet } from "react-router";

export const PrivateRoute = () => {
  const { connecting, connected, account, ready } = useSDK();
  const { pathname, search } = useLocation();
  console.log({ connecting, connected, account, ready });
  
  if (connecting || ready === false) {
    return <h1>Loading</h1>;
  }
  if (connected === false || !account) {
    return (
      <Navigate
        to={"/login"}
        state={{
          redirectUrl: `${pathname}${search ? search : ""}`,
        }}
        replace
      />
    );
  }
  return (
    <>
      <Outlet />
    </>
  );
};
