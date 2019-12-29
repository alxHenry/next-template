import React, { FC, ReactNode } from "react";
import { useAuthRedirect } from "../../hooks/useAuthRedirect";

export interface WithAuthProps {
  children: ReactNode;
}

const WithAuth: FC<WithAuthProps> = ({ children }) => {
  useAuthRedirect();

  return <>{children}</>;
};

export default WithAuth;
