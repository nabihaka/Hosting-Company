import HeroImage from "@/assets/jpg/hero_image.jpg";
import Triangle from "@/assets/svg/triangle.svg";

export const SectionServices = () => {
  return (
    <section className="hidden mt-24 mb-19.75 px-28">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex flex-col gap-1 mb-6.5 w-fit">
            <div className="flex items-center gap-6">
              <p className="font-semibold text-base text-(--color-primary)">
                Hosting
              </p>
              <p className="font-semibold text-base">Domain</p>
              <p className="font-semibold text-base">SEO</p>
              <p className="font-semibold text-base">Email</p>
            </div>
            <div className="relative mt-1 mx-1 h-[1.5px] bg-(--color-e5e5e5) rounded-full">
              <div className="absolute -left-1 px-1.5 w-16">
                <hr className="border border-(--color-primary) rounded-full" />
              </div>
            </div>
          </div>
          <h1 className="mb-8.5 max-w-150 font-bold text-[64px] text-(--color-2e2e2e) leading-[77.5px]">
            Premium Web Hosting for Your Website
          </h1>
          <p className="mb-15 max-w-md font-inter font-normal text-base text-(--color-808080) leading-7 tracking-[0.05em]">
            Blazing fast web hosting for individuals and businesses of all sizes
            backed by 24x7x365 Support.
          </p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="py-3 px-4 font-normal text-sm text-white leading-6 bg-(--color-primary) rounded-lg cursor-pointer shadow-[0_0_64px_0_rgba(176,0,0,0.3)] transition ease-in-out hover:bg-red-800 active:bg-red-900 focus:outline-none"
            >
              Create an Account
            </button>
            <button
              type="button"
              className="py-3 px-4 font-normal text-sm text-black leading-6 bg-white border border-black rounded-lg cursor-pointer transition duration-200 ease-in-out hover:bg-black hover:text-white focus:outline-none"
            >
              Choose your plan
            </button>
          </div>
        </div>
        <div className="relative px-6.25">
          <img src={HeroImage.src} alt="Hero Image" className="h-126" />
          <img
            src={Triangle.src}
            alt="Triangle"
            className="absolute top-16 right-0 h-10"
          />
          <img
            src={Triangle.src}
            alt="Triangle"
            className="absolute bottom-39 left-0 h-10 scale-x-[-1]"
          />
          <img
            src={Triangle.src}
            alt="Triangle"
            className="absolute bottom-10 right-0 h-18"
          />
        </div>
      </div>
    </section>
  );
};
