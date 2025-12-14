import React from "react";
import clsx from "clsx";

interface NavbarLinkProps {
  text?: string;
  url?: string;
  className?: string;
  unsytled?: boolean;
  children?: React.ReactNode;
}

export const NavbarLink = ({
  text = "",
  url,
  className = "",
  unsytled = false,
  children,
}: NavbarLinkProps) => {
  const defaultClass =
    "font-semibold text-base text-black cursor-pointer focus:outline-none";

  return (
    <a href={url} className={clsx(!unsytled && defaultClass, className)}>
      {children ?? text}
    </a>
  );
};
