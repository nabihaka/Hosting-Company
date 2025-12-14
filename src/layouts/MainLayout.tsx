"use client";

import React, { ReactNode, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { NavbarModal } from "@/components/NavbarModal";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onClick={handleOpenModal} />
      {children}
      <NavbarModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};
