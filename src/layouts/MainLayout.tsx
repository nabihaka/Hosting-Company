import React, { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};
