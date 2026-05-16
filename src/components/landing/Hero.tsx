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
      <div className="relative mx-auto mt-6 lg:h-[700px] w-[95%] overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#44459A_0%,#2F2E71_58%,#28265F_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(125,129,255,0.26),transparent_34%),radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.05),transparent_20%)]"></div>

        {/* Mobile-only decorative background art */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
          aria-hidden="true"
        >
          <img
            src={Rectangle1}
            alt=""
            className="absolute -right-16 -top-12 h-[300px] w-auto max-w-none opacity-30"
            loading="lazy"
          />
          <img
            src={Rectangle2}
            alt=""
            className="absolute -bottom-16 -left-20 h-[280px] w-auto max-w-none opacity-25"
            loading="lazy"
          />
          <img
            src={HeroVisual}
            alt=""
            className="absolute -right-10 bottom-6 w-[260px] max-w-none opacity-15 sm:right-4 sm:w-[320px]"
            loading="lazy"
          />
        </div>

        <div className="relative h-full">
          <div className="px-6 pb-10 pt-20 text-center sm:px-10 lg:absolute lg:left-[76px] lg:top-[186px] lg:w-[560px] lg:px-0 lg:pb-0 lg:pt-0 lg:text-left">
            <p className="inline-flex h-[38px] items-center rounded-xl border border-white/20 bg-white/8 px-4 text-[11px] font-medium uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm lg:px-5">
              Sell more. Grow more
            </p>

            <h1 className="mt-4 max-w-[620px] leading-[0.98]">
              <span className="block text-[32px] font-medium text-white sm:text-[44px] md:text-[52px] lg:whitespace-nowrap lg:text-[64px]">
                Grow your business{" "}
              </span>
              <span className="block text-[32px] font-semibold text-[#FFBF2F] sm:text-[44px] md:text-[52px] lg:text-[64px]">
                without limits
              </span>
            </h1>

            <p className="mt-7 max-w-[560px] text-[16px] leading-[1.55] text-white/82 lg:text-[17px]">
              Reach thousands of buyers across Nigeria. Manage your products,
              orders, and payouts all from one clean dashboard. Zero listing
              fees.
            </p>

            <ButtonLink to="/signup" variant="white-glow" className="mt-11">
              Start Selling
            </ButtonLink>
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
            <img
              src={Rectangle1}
              alt="Purple shape"
              className="absolute -right-[8px] top-0 z-0 h-[520px] w-auto max-w-none"
              loading="lazy"
            />
            <img
              src={Rectangle2}
              alt="Yellow shape"
              className="absolute -right-[48px] bottom-0 z-20 h-[700px] w-auto max-w-none"
              loading="lazy"
            />
            <img
              src={HeroVisual}
              alt="Seller dashboard preview"
              className="absolute right-[101px] top-[192px] z-10 w-[534px] max-w-none"
              loading="lazy"
            />
            <img
              src={PageShoppingBox}
              alt="Shopping boxes"
              className="absolute bottom-0 right-[170px] z-[12] w-[650px] max-w-none"
              loading="lazy"
            />
            <img
              src={LandingPortrait}
              alt="Seller portrait"
              className="absolute bottom-0 right-[88px] z-[15] w-[600px] max-w-none"
              loading="lazy"
            />

            <div className="absolute bottom-[70px] right-[50px] z-40 flex items-center gap-4 rounded-[18px] border border-[#ECEBFF] bg-white px-7 py-4 shadow-[0_18px_40px_rgba(12,12,48,0.18)]">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#EEF1FF]">
                <Shield className="h-6 w-6 text-[#5D5FEF]" />
              </div>

              <div>
                <h4 className="text-[18px] font-medium text-[#141414]">
                  Secured payout
                </h4>
                <p className="text-[14px] text-[#7A7A7A]">
                  ₦58,400 settled today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
