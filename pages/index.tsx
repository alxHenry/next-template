import React, { FC } from "react";
import Auth0Provider from "../components/Auth0Provider";
import HomePage from "../components/HomePage";
import WithAuth from "../components/WithAuth";
import WithoutSSR from "../components/WithoutSSR";

const Home: FC = () => (
  <WithoutSSR>
    <Auth0Provider>
      <WithAuth>
        <HomePage />
      </WithAuth>
    </Auth0Provider>
  </WithoutSSR>
);

export default Home;
