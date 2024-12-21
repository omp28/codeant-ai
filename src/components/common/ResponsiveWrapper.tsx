import React from "react";
import { useResponsive } from "../../hooks/useResponsive";

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  className = "",
}) => {
  const { isMobile } = useResponsive();

  return (
    <div className={`${className} ${isMobile ? "px-4" : "px-8"}`}>
      {children}
    </div>
  );
};
