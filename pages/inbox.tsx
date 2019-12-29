import React, { FC } from "react";
import Auth0Provider from "../components/Auth0Provider";
import InboxPage from "../components/InboxPage";
import WithAuth from "../components/WithAuth";
import WithoutSSR from "../components/WithoutSSR";

const Home: FC = () => (
  <WithoutSSR>
    <Auth0Provider>
      <WithAuth>
        <InboxPage />
      </WithAuth>
    </Auth0Provider>
  </WithoutSSR>
);

export default Home;
