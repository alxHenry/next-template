import { Button } from "@material-ui/core";
import React, { FC, useCallback } from "react";
import { useAuth0 } from "../../hooks/useAuth0";

const LogInOutButton: FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const onLogoutClick = useCallback(() => {
    logout();
  }, [logout]);

  const onLoginClick = useCallback(() => {
    loginWithRedirect({});
  }, [loginWithRedirect]);

  return isAuthenticated ? (
    <Button variant="contained" color="secondary" onClick={onLogoutClick}>
      Log Out
    </Button>
  ) : (
    <Button variant="contained" color="secondary" onClick={onLoginClick}>
      Log In
    </Button>
  );
};

export default LogInOutButton;
