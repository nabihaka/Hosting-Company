"use client";

import React from "react";
import { FaBars } from "react-icons/fa";
import LogoRed from "@/assets/png/logo_red.png";
import IconPhone from "@/assets/svg/phone.svg";
import { navbarLinks } from "@/models/navbarLinks";
import { NavbarLink } from "./NavbarLink";

interface NavbarProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Navbar = ({ onClick }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 pt-8 px-10 xl:pt-10 xl:px-28 bg-white">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-16.25">
          <img src={LogoRed.src} alt="Logo Red" className="h-11 xl:h-15" />
          <NavbarLink text="Our Services" className="hidden xl:block" />
        </div>
        <button onClick={onClick} type="button" className="xl:hidden">
          <FaBars className="text-xl" />
        </button>
        <div className="absolute bottom-3.25 left-39 px-3 w-25.75 hidden xl:block">
          <hr className="border border-(--color-primary) rounded-full" />
        </div>
        <div className="items-center gap-8.25 hidden xl:flex">
          {navbarLinks.map((navLink) => (
            <NavbarLink key={navLink.id} text={navLink.name} />
          ))}
        </div>
        <div className="items-center gap-7.5 hidden xl:flex">
          <NavbarLink text="Account" />
          <div className="h-5 border border-(--color-dad8d8)"></div>
          <NavbarLink
            unsytled
            className="flex items-center gap-1.5 cursor-pointer"
          >
            <img src={IconPhone.src} alt="Phone Icon" />
            <p className="font-semibold text-base text-black">+2349067322844</p>
          </NavbarLink>
        </div>
      </div>
    </nav>
  );
};

{
  /* <div className="mt-1 px-3">
              <hr className="border border-(--color-primary) rounded-full" />
            </div> */
}
