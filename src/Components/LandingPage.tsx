import Navbar from "./Features/Navbar";
import Faqs from "./Features/Faqs";
import Footer from "./Footer";
import Sec2Img from "../assets/landing-page-section-1-img.png";
import EcommerceVendor1 from "../assets/ecommerce-vendor3d-1.png";
import EcommerceVendor2 from "../assets/ecommerce-vendor3d-2.png";
import LandingPortrait from "../assets/portrait-beautiful-african-woman-floral-coat.png";
import Rectangle1 from "../assets/landing-page-rectangle-1.png";
import Rectangle2 from "../assets/landing-page-rectangle-2.png";
import PageShoppingBox from "../assets/landing-page-box-img.png";
import HeroVisual from "../assets/landing-page-hero-visual.png";
import {
  CirclePlus,
  SquareCheck,
  Dock,
  Check,
  ArrowRight,
  Shield,
  Menu,
} from "lucide-react";

export default function LandingPage(){
  return (
    <div className="">
      <Navbar />
      <main>
        <section id="hero">
          <div className="bg-[#272864] mx-auto w-[95%] mt-6 lg:py-20 py-20 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-transparent to-transparent"></div>
            {/* left side */}
            <div className="w-[90%] mx-auto ">
              <div className=" ">
                <div className="w-full lg:w-1/2 text-center lg:text-left  ">
                  <p className="inline-block px-5 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    sell more. grow more
                  </p>
                  <p className="text-white text-[24px] font-medium md:text-[34px] lg:text-[45px] pt-3 lg:pt-0 leading-tight ">
                    Grow your business{" "}
                    <span className="text-[#FFBF00] font-semibold ">
                      without limits
                    </span>
                  </p>
                  <p className="text-white text-[12px] lg:text-[16px] pt-2 ">
                    Reach thousands of buyers across Nigeria. Manage your
                    products, orders, and payouts all from one clean dashboard.
                    Zero listing fees.
                  </p>
                  <button className="rounded-md bg-white px-15 py-2 text-sm font-medium text-indigo-900 hover:opacity-90 transition mt-10">
                    Start Selling
                  </button>
                </div>
              </div>
            </div>
            {/* right side */}
            <div>
              <div>
                <img
                  src={LandingPortrait}
                  alt="Landing Portrait"
                  className="absolute bottom-0 right-9 w-100  hidden lg:block z-[100]"
                  loading="lazy"
                />
              </div>

              <div>
                <img
                  src={Rectangle1}
                  alt="Rectangle 1"
                  className="absolute bottom-0 -right-30 w-100 hidden lg:block"
                  loading="lazy"
                />
              </div>

              <div>
                <img
                  src={Rectangle2}
                  alt="vendor 2"
                  className="absolute -bottom-110 right-0 w-100  hidden lg:block z-[1] "
                  loading="lazy"
                />
              </div>

              <div>
                <img
                  src={PageShoppingBox}
                  alt="Page Shopping Box"
                  className="absolute bottom-0 right-38 w-100 hidden lg:block z-[1] "
                  loading="lazy"
                />
              </div>

              <div>
                <img
                  src={HeroVisual}
                  alt="Hero Visual"
                  className="absolute bottom-25 right-20 w-100  hidden lg:block"
                  loading="lazy"
                />
              </div>

              <div className="absolute w-fit bottom-10 right-10 w-100  hidden lg:flex z-[100] gap-3 border border-gray-50 bg-white rounded-xl py-3 px-5  ">
                <Shield className="text-indigo-500 bg-indigo-100 py-2 px-3 rounded-xl w-10 h-10  " />

                <div>
                  <h4 className="text-[#0E0E0E] text-[15px] ">
                    Secured payout
                  </h4>
                  <p className="text-[#787878] text-[12px]  ">
                    ₦58,400 settled today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <hr className="w-[70%] mx-auto my-10 border-t border-indigo-50" />

          <div className="mx-auto w-[85%] my-15">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* LEFT IMAGE */}
              <div className="hidden lg:flex">
                <img
                  src={Sec2Img}
                  alt="Section 2 image"
                  className="w-100 h-auto"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="w-full lg:w-1/2">
                <div>
                  <p className="w-fit py-1 px-4 bg-purple-100 text-purple-600 text-[10px] rounded-full font-medium">
                    HOW IT WORKS
                  </p>

                  <p className="pt-3 font-semibold text-3xl text-gray-600">
                    Start selling in{" "}
                    <span className="text-purple-600">4 simple steps</span>
                  </p>

                  <p className="pt-2 text-gray-500 text-xs">
                    From sign-up to your first payout — the whole journey is
                    designed to be fast and straightforward.
                  </p>
                </div>

                <div className="relative rounded-md border border-purple-100 bg-purple-50/50 px-5 py-7 mt-5">
                  {/*DOTTED LINE*/}
                  <div className="absolute left-9 top-8 bottom-8 w-[2px] border-l-3 border-dashed border-purple-700 " />

                  <ol className="space-y-6 relative">
                    <li className="flex items-start gap-5 text-gray-600 font-medium relative z-10">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-medium z-10">
                        1
                      </span>
                      Create your account under 5 minutes
                    </li>

                    <li className="flex items-start gap-5 text-gray-600 font-medium relative z-10">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-600 text-white text-xs font-medium z-10">
                        2
                      </span>
                      Set up your storefront
                    </li>

                    <li className="flex items-start gap-5 text-gray-600 font-medium relative z-10">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-500 text-xs font-medium z-10">
                        3
                      </span>
                      Upload your products
                    </li>

                    <li className="flex items-start gap-5 text-gray-600 font-medium relative z-10">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-100 text-purple-500 text-xs font-medium z-10">
                        4
                      </span>
                      Receive orders & get paid
                    </li>
                  </ol>
                </div>

                {/* BUTTON */}
                <button className="rounded-md bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] px-10 py-2 text-sm font-medium text-white hover:opacity-90 transition mt-10">
                  Start Selling
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-[95%] md:w-[85%] mt-20">
            <div className="text-center ">
              <p className="w-fit py-1 px-4 bg-green-100 text-green-600 text-[10px] rounded-full font-medium mx-auto">
                Why Cadna Mart
              </p>
              <h2 className="pt-3 font-semibold text-3xl text-gray-600">
                Built for{" "}
                <span className="text-green-600">Nigerian sellers</span>
              </h2>
              <p className="py-2 text-gray-500 text-xs">
                Everything you need to run a successful online store, without
                the complexity.
              </p>
            </div>

            <div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 bg-[#EFFBF7] py-6 px-6 rounded-3xl ">
                <div className=" py-7 px-10 bg-white rounded-2xl border border-gray-100 ">
                  <CirclePlus className="text-indigo-500 bg-indigo-100 py-3 px-3 rounded-xl w-13 h-13" />
                  <h3 className="text-lg font-semibold pt-6 text-gray-700">
                    Reach more customers
                  </h3>
                  <p className="text-sm pt-2 text-gray-500">
                    Tap into a growing buyer base actively searching for baby
                    products, gadgets, cosmetics, household items and more. Your
                    products get discovered by people ready to buy.
                  </p>
                </div>

                <div className=" py-7 px-10 bg-white rounded-2xl border border-gray-100 ">
                  <SquareCheck className="text-indigo-500 bg-indigo-100 py-3 px-3 rounded-xl w-13 h-13" />
                  <h3 className="text-lg font-semibold pt-6 text-gray-700">
                    Zero listing fees
                  </h3>
                  <p className="text-sm pt-2 text-gray-500">
                    List as many products as you want at no cost. You only pay a
                    small commission when you successfully make a sale — so we
                    grow when you grow.
                  </p>
                </div>

                <div className=" py-7 px-10 bg-white rounded-2xl border border-gray-100 ">
                  <Dock className="text-indigo-500 bg-indigo-100 py-3 px-3 rounded-xl w-13 h-13" />
                  <h3 className="text-lg font-semibold pt-6 text-gray-700">
                    Secure, timely payouts
                  </h3>
                  <p className="text-sm pt-2 text-gray-500">
                    Your earnings are protected and settled directly to your
                    bank account after order confirmation. No chasing payments,
                    no delays, no hidden deductions.
                  </p>
                </div>

                <div className=" py-7 px-10 bg-white rounded-2xl border border-gray-100 ">
                  <Menu className="text-indigo-500 bg-indigo-100 py-3 px-3 rounded-xl w-13 h-13" />
                  <h3 className="text-lg font-semibold pt-6 text-gray-700">
                    Simple product management
                  </h3>
                  <p className="text-sm pt-2 text-gray-500">
                    Add, edit, pause, or remove listings from a clean dashboard.
                    Bulk upload support for power sellers with large catalogues
                    — no spreadsheet juggling required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className=" relative mx-auto w-[95%] mt-10 py-16 rounded-2xl overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2B2D6E] via-[#3B3FA8] to-[#4A3FBF] z-[-1000]" />

            {/* Glow Effects */}
            <div className="absolute inset-0">
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-gray-300/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 blur-3xl rounded-full" />
            </div>
            <div className="w-[90%] mx-auto ">
              <div className="mx-auto text-center ">
                <p className="w-fit mx-auto rounded-xl  border text-white  text-[12px] px-3 py-1 ">
                  PRICING
                </p>
                <h2 className="mt-2 text-white text-[28px] lg:text-[48px] font-medium text-white ">
                  Simple, transparent{" "}
                  <span className="text-[#FFBD2E] font-semibold ">pricing</span>
                </h2>
                <p className=" text-white  text-[18px] mt-2">
                  No surprises. Know exactly what you pay before you list your
                  first product.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-6 mt-14">
                <div className="w-full lg:w-1/2">
                  <div className="rounded-xl bg-white border border-gray-200   ">
                    <div className="py-3 border-b text-indigo-500 font-medium text-[13px] border-gray-100 px-4">
                      Fee breakdown
                    </div>
                    <div className="flex justify-between py-3 border-b text-gray-400 text-[14px] border-gray-100 px-4">
                      Listing fee{" "}
                      <span className=" text-[#1A7A4A] font-medium">
                        Free — ₦0
                      </span>
                    </div>
                    <div className="py-3 border-b text-gray-400 text-[14px] border-gray-100 px-4">
                      Commission per sale
                    </div>
                    <div className="flex justify-between py-3 border-b text-gray-400 text-[14px] border-gray-100 px-4">
                      Account registration{" "}
                      <span className=" text-[#1A7A4A] font-medium">
                        Free — ₦0
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b text-gray-400 text-[14px] border-gray-100 px-4">
                      Payment processing{" "}
                      <span className=" italic">Included</span>
                    </div>
                    <div className="flex justify-between py-3 border-b text-gray-400 text-[14px] border-gray-100 px-4">
                      Payout to bank{" "}
                      <span className="text-[#1A7A4A] font-medium">
                        Free — ₦0
                      </span>
                    </div>
                    <div className="flex justify-between py-3  text-gray-400 text-[14px] px-4 bg-[#F6F6FE] rounded-b-xl ">
                      Full fee schedule available in Seller Policy{" "}
                      <span className="text-indigo-500 text-[12px] flex items-center-safe gap-1 cursor-pointer ">
                        View policy <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 ">
                  <div className="rounded-xl bg-white border border-gray-200 px-4 py-4">
                    <h5 className="font-medium text-[13px] text-indigo-500 ">
                      Payout timeline
                    </h5>
                    <div className="flex mt-2 gap-4 items-center ">
                      <p className="bg-indigo-50 text-indigo-500 text-[22px] rounded-xl px-5 py-2 mx-auto font-[Fraunces] ">
                        T+X days
                      </p>
                      <p className="text-[#787878] text-[13px] ">
                        After delivery is confirmed by the buyer. Exact
                        settlement window will be confirmed — check back or{" "}
                        <a
                          href="#"
                          className="text-indigo-500 underline underline-offset-2 font-medium"
                        >
                          contact support
                        </a>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-gray-200 px-4 py-4 mt-3">
                    <h5 className="font-medium text-[13px] text-indigo-500 ">
                      Important policy notes
                    </h5>
                    <p className="text-[#787878] text-[13px] mt-2">
                      Sellers are responsible for accurate product descriptions
                      and timely fulfilment. Returns and refunds are handled per
                      the{" "}
                      <a
                        href="#"
                        className="text-indigo-500 underline underline-offset-2 font-medium"
                      >
                        Cadna Mart Seller Policy.
                      </a>{" "}
                      Cadna Mart reserves the right to withhold payouts in cases
                      of disputed orders pending resolution. KYC requirements
                      will be communicated during or after registration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mx-auto w-[95%] md:w-[85%] my-20">
            <div>
              <p className="w-fit py-1 px-4 bg-indigo-100 text-indigo-600 text-[10px] rounded-full font-medium">
                Before you start
              </p>
              <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-5">
                <h2 className="pt-3 font-semibold text-3xl text-gray-600">
                  What you need to{" "}
                  <span className="text-indigo-600">register</span>
                </h2>

                <button className="self-start lg:self-auto  rounded-md bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] px-15 py-2 text-sm font-medium text-white hover:opacity-90 transition">
                  Start Selling
                </button>
              </div>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="border border-indigo-100 p-4 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <Check className="text-indigo-500 bg-indigo-50  py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                    </div>
                    <div>
                      <h4 className="text-gray-600 font-medium">
                        Valid email address
                      </h4>
                      <p className="text-gray-500">
                        Used for verification and account communications
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-indigo-100 p-4 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <Check className="text-indigo-500 bg-indigo-50  py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                    </div>
                    <div>
                      <h4 className="text-gray-600 font-medium">
                        Personal details
                      </h4>
                      <p className="text-gray-500">
                        Your full name and phone number
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-indigo-100 p-4 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <Check className="text-indigo-500 bg-indigo-50  py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                    </div>
                    <div>
                      <h4 className="text-gray-600 font-medium">
                        Business name & address
                      </h4>
                      <p className="text-gray-500">
                        CAC number is optional for informal sellers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-indigo-100 p-4 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <Check className="text-indigo-500 bg-indigo-50  py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                    </div>
                    <div>
                      <h4 className="text-gray-600 font-medium">
                        Bank account details
                      </h4>
                      <p className="text-gray-500">
                        Bank name, account number, and account name
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-indigo-100 p-4 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <Check className="text-indigo-500 bg-indigo-50  py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                    </div>
                    <div>
                      <h4 className="text-gray-600 font-medium">
                        Business type
                      </h4>
                      <p className="text-gray-500">
                        Sole proprietor, LLC, or partnership
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-indigo-100 p-4 rounded-xl">
                  <div className="flex gap-5 items-center">
                    <div>
                      <Check className="text-indigo-500 bg-indigo-50  py-2 px-2 rounded-full w-9 h-9 flex items-center justify-center" />
                    </div>
                    <div>
                      <h4 className="text-gray-600 font-medium">Password</h4>
                      <p className="text-gray-500">
                        At least 8 characters with letters and numbers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Faqs />
        </section>

        <section>
          <div className="relative mt-20 py-12 px-7">
            {/* RADIAL GRADIENT */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4B008C_0%,_#6D28D9_45%,_#7C3AED_100%)] z-[-1000]"></div>

            {/* SOFT GLOW EFFECTS */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-purple-300/30 rounded-full blur-3xl"></div>

            <div className="absolute top-10 right-1/3 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl"></div>

            {/* LEFT IMAGE */}
            <img
              src={EcommerceVendor1}
              alt="vendor 1"
              className="absolute bottom-0 left-0 h-[100%]  hidden lg:block"
              loading="lazy"
            />

            {/* RIGHT IMAGE */}
            <img
              src={EcommerceVendor2}
              alt="vendor 2"
              className="absolute bottom-0 right-0 h-[100%] hidden lg:block"
              loading="lazy"
            />

            <div className="text-center">
              <h2 className="text-white text-[32px] lg:text-[62px] font-semibold ">
                Ready to start selling?
              </h2>
              <p className="text-white text-[16px]">
                Set up your store in minutes and start reaching customers across
                Nigeria.
              </p>
              <button className="rounded-xl py-2 px-5 mt-7 text-indigo-900 text-[14px] bg-white  ">
                Start Selling Today
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
