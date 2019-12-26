import React, { FC } from "react";
import InboxPage from "../components/InboxPage";
import WithoutSSR from "../components/WithoutSSR";

// Without SSR because I don't want to fight material ui server side rendered
// stylesheets right now. that will require extra config with next.js
const Home: FC = () => (
  <WithoutSSR>
    <InboxPage />
  </WithoutSSR>
);

export default Home;
