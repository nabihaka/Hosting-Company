import React from "react";

interface NavbarLinkProps {
  text?: string;
  url?: string;
  className?: string;
  unsytled?: boolean;
  children?: React.ReactNode;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  text = "",
  url,
  className = "",
  unsytled = false,
  children,
}) => {
  const defaultClass =
    "font-semibold text-base text-black cursor-pointer focus:outline-none";

  return (
    <a href={url} className={`${unsytled ? "" : defaultClass} ${className}`}>
      {children ?? text}
    </a>
  );
};
