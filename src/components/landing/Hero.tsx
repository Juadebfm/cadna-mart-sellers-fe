import { Shield } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import LandingPortrait from "@/assets/images/landing/portrait-beautiful-african-woman-floral-coat.png";
import Rectangle1 from "@/assets/images/landing/landing-page-rectangle-1.png";
import Rectangle2 from "@/assets/images/landing/landing-page-rectangle-2.png";
import PageShoppingBox from "@/assets/images/landing/landing-page-box-img.png";
import HeroVisual from "@/assets/images/landing/landing-page-hero-visual.png";

export default function Hero() {
  return (
    <section id="hero">
      <div className="bg-[#272864] mx-auto w-[95%] mt-6 lg:py-20 py-20 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-transparent to-transparent"></div>

        {/* Left side */}
        <div className="w-[90%] mx-auto relative ">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="inline-block px-5 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              sell more. grow more
            </p>
            <p className="text-white text-[24px] font-medium md:text-[34px] lg:text-[45px] pt-3 lg:pt-0 leading-tight">
              Grow your business{" "}
              <span className="text-[#FFBF00] font-semibold">
                without limits
              </span>
            </p>
            <p className="text-white text-[12px] lg:text-[16px] pt-2">
              Reach thousands of buyers across Nigeria. Manage your products,
              orders, and payouts all from one clean dashboard. Zero listing
              fees.
            </p>
            <ButtonLink to="/signup" variant="white-glow"  size="sm" className="mt-10 px-10">
              Start Selling
            </ButtonLink>
          </div>
        </div>

        {/* Right side images */}
        <div>
          <img
            src={LandingPortrait}
            alt="Landing Portrait"
            className="absolute bottom-0 right-9 w-100 hidden lg:block z-[100]"
            loading="lazy"
          />
          <img
            src={Rectangle1}
            alt="Rectangle 1"
            className="absolute bottom-0 right-0 w-100 hidden lg:block"
            loading="lazy"
          />
          <img
            src={Rectangle2}
            alt="Rectangle 2"
            className="absolute -bottom-50 right-0 w-100 hidden lg:block z-[1]"
            loading="lazy"
          />
          <img
            src={PageShoppingBox}
            alt="Page Shopping Box"
            className="absolute bottom-0 right-38 w-100 hidden lg:block z-[1]"
            loading="lazy"
          />
          <img
            src={HeroVisual}
            alt="Hero Visual"
            className="absolute bottom-25 right-20 w-100 hidden lg:block"
            loading="lazy"
          />

          {/* Secured payout card */}
          <div className="absolute w-fit bottom-10 right-10 hidden lg:flex z-[100] gap-3 border border-gray-50 bg-white rounded-xl py-3 px-5">
            <Shield className="text-indigo-500 bg-indigo-100 py-2 px-3 rounded-xl w-10 h-10" />
            <div>
              <h4 className="text-[#0E0E0E] text-[15px]">Secured payout</h4>
              <p className="text-[#787878] text-[12px]">₦58,400 settled today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}