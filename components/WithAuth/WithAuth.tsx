import React, { FC, ReactNode } from "react";
import { useAuth0 } from "../../hooks/useAuth0";
import LogInOutButton from "../LogInOutButton";

export interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: FC<WithAuthProps> = ({ children }) => {
  const { loading, user } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <LogInOutButton />;
  }

  return <>{children}</>;
};

export default WithAuth;
