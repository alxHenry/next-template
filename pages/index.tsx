import React, { FC } from "react";
import HomePage from "../components/HomePage";
import WithoutSSR from "../components/WithoutSSR";

// Without SSR because I don't want to fight material ui server side rendered
// stylesheets right now. that will require extra config with next.js
const Home: FC = () => (
  <WithoutSSR>
    <HomePage />
  </WithoutSSR>
);

export default Home;
