import React, { FC } from "react";
import PageLayout from "../PageLayout";
import SharedHeader from "../SharedHeader";

const HomePage: FC = () => (
  <>
    <SharedHeader />
    <PageLayout name="Home">Home Content</PageLayout>
  </>
);

export default HomePage;
