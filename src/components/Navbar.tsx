import LogoRed from "@/assets/png/logo_red.png";
import IconPhone from "@/assets/svg/phone.svg";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 pt-10 px-28 bg-white">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-16.25">
          <img src={LogoRed.src} alt="Logo Red" className="h-15" />
          <NavbarLink text="Our Services" />
          {/* <div className="mt-1 px-3">
              <hr className="border border-(--color-primary) rounded-full" />
            </div> */}
        </div>
        <div className="absolute bottom-3.25 left-39 px-3 w-25.75">
          <hr className="border border-(--color-primary) rounded-full" />
        </div>
        <div className="flex items-center gap-8.25">
          <NavbarLink text="About" />
          <NavbarLink text="Blog & News" />
          <NavbarLink text="Contact" />
        </div>
        <div className="flex items-center gap-7.5">
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
