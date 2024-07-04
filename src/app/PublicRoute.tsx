import { useSDK } from "@metamask/sdk-react";
import { useLocation, Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
  const { connected, account } = useSDK();

  const { state } = useLocation();
  if (connected && account) {
    return (
      <Navigate to={state?.redirectUrl ? state.redirectUrl : "/"} replace />
    );
  }
  return (
    <>
      <Outlet />
    </>
  );
};
