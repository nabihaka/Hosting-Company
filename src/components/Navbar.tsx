import LogoRed from "@/assets/png/logo_red.png";
import IconPhone from "@/assets/svg/phone.svg";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  return (
    <nav className="pt-10 px-28">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-16.25">
          <img src={LogoRed.src} alt="Logo Red" className="h-15" />
          <NavbarLink text="Our Services" />
          {/* <div className="mt-1 px-3">
              <hr className="border border-(--color-primary) rounded-full" />
            </div> */}
        </div>
        <div className="absolute bottom-3.25 left-42 w-[77.2px]">
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
          <a href="#" className="flex items-center gap-1.5">
            <img src={IconPhone.src} alt="Phone Icon" />
            <p className="font-semibold text-base text-black">+2349067322844</p>
          </a>
        </div>
      </div>
    </nav>
  );
};
