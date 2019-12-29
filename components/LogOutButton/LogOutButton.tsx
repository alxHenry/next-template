import { Button } from "@material-ui/core";
import React, { FC, useCallback } from "react";
import { useAuth0 } from "../../hooks/useAuth0";

const LogOutButton: FC = () => {
  const { logout } = useAuth0();

  const onLogoutClick = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Button variant="contained" color="secondary" onClick={onLogoutClick}>
      Log Out
    </Button>
  );
};

export default LogOutButton;
