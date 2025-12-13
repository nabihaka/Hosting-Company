import React from "react";

interface NavbarLinkProps {
  text: string;
  url?: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ text, url }) => {
  return (
    <a
      href={url}
      className="font-semibold text-base text-black focus:outline-none"
    >
      {text}
    </a>
  );
};
