import React from "react";
import { LayoutProps } from "../types/interfaces";

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default MainLayout;
