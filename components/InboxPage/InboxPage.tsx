import React, { FC } from "react";
import PageLayout from "../PageLayout";
import SharedHeader from "../SharedHeader";

const InboxPage: FC = () => (
  <>
    <SharedHeader />
    <PageLayout name="Inbox">Inbox Content</PageLayout>
  </>
);

export default InboxPage;
