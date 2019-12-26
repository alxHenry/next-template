import dynamic from "next/dynamic";
import React, { FC, ReactNode } from "react";

export interface WithoutSSRProps {
  children: ReactNode;
}

const WithoutSSR: FC<WithoutSSRProps> = ({ children }) => <>{children}</>;

export default dynamic(() => Promise.resolve(WithoutSSR), {
  ssr: false
});
