import { useEffect } from "react";
import { useAuth0 } from "./useAuth0";

export const useAuthRedirect = () => {
  const { isAuthenticated, loading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loading, loginWithRedirect]);
};
