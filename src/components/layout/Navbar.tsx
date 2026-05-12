import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="w-full shadow-sm py-1 bg-white ">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* LEFT SECTION */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center justify-center mb-2">
                <img
                  src={logo}
                  alt="CadnaMart logo"
                  className="w-32 h-10"
                  loading="lazy"
                />
              </Link>
            </div>

            {/* MIDDLE SECTION */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#hero" className="text-[12px] text-[#4C4D60] hover:text-[#7B61FF]">
                How it works
              </a>
              <a href="#pricing" className="text-[12px] text-[#4C4D60] hover:text-[#5D5FEF]">
                Pricing
              </a>
              <a href="#faqs" className="text-[12px] text-[#4C4D60] hover:text-[#5D5FEF]">
                FAQs
              </a>
              <a href="#support" className="text-[12px] text-[#4C4D60] hover:text-[#5D5FEF]">
                Support
              </a>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  to="/signup"
                  className="rounded-md border border-[#D7D7DB] px-5 py-2 text-sm font-medium text-[#4C4D60] hover:bg-[#D7D7DB]/5 transition"
                >
                  Sign in
                </Link>
                <Link
                  to="/login"
                  className="rounded-md bg-gradient-to-r from-[#5B5BD6] to-[#7B61FF] px-5 py-2 text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Start Selling
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
                onClick={() => { setMobileOpen(!mobileOpen); }}
                aria-label="Open menu"
              >
                <span
                  className={`block h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 ${
                    mobileOpen ? "w-6 rotate-45 translate-y-[7px]" : "w-6"
                  }`}
                />
                <span
                  className={`block h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 w-0" : "w-4"
                  }`}
                />
                <span
                  className={`block h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 ${
                    mobileOpen ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => { setMobileOpen(false); }}
      />
    </header>
  );
}