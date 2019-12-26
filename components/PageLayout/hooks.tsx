import HomeIcon from "@material-ui/icons/Home";
import InboxIcon from "@material-ui/icons/Inbox";
import React, { useMemo } from "react";

export interface NavigationOption {
  readonly key: string;
  readonly name: string;
  readonly href: string;
  readonly onRenderIcon: () => React.ReactElement;
}

export const useAppNavigationOptions: () => NavigationOption[] = () =>
  useMemo(
    () => [
      {
        key: "home",
        name: "Home",
        onRenderIcon: () => <HomeIcon />,
        href: "/"
      },
      {
        key: "inbox",
        name: "Inbox",
        onRenderIcon: () => <InboxIcon />,
        href: "/inbox"
      }
    ],
    []
  );
