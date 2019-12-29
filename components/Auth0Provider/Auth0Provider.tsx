import Router from "next/router";
import React, { FC, ReactNode } from "react";
import config from "../../authConfig";
import { Auth0Provider as Provider } from "../../hooks/useAuth0";

const onRedirectCallback = (appState: any) => {
  Router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export interface Auth0ProviderProps {
  children: ReactNode;
}

const Auth0Provider: FC<Auth0ProviderProps> = ({ children }) => {
  return (
    <Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <>{children}</>
    </Provider>
  );
};

export default Auth0Provider;
