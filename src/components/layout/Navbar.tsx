import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/images/logos/cadna-mart-main-logo.png";
import { ButtonLink } from "@/components/ui/Button";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      <div className="bg-white">
        <div className="px-4 sm:px-6 lg:px-[120px]">
          <div className="flex items-center justify-between h-[80px]">
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
              <a
                href="#hero"
                className="text-[16px] text-[#4C4D60] hover:text-[#7B61FF]"
              >
                How it works
              </a>
              <a
                href="#pricing"
                className="text-[16px] text-[#4C4D60] hover:text-[#5D5FEF]"
              >
                Pricing
              </a>
              <a
                href="#faqs"
                className="text-[16px] text-[#4C4D60] hover:text-[#5D5FEF]"
              >
                FAQs
              </a>
              <a
                href="#support"
                className="text-[16px] text-[#4C4D60] hover:text-[#5D5FEF]"
              >
                Support
              </a>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-3">
                <ButtonLink to="/signup" variant="outline" size="sm">
                  Sign in
                </ButtonLink>

                <ButtonLink to="/signup" variant="primary" size="sm">
                  Start Selling
                </ButtonLink>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] group"
                onClick={() => { setMobileOpen(true); }}
                aria-label="Open menu"
              >
                <span className="block w-6 h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 group-hover:w-5" />
                <span className="block w-4 h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 group-hover:w-6" />
                <span className="block w-6 h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 group-hover:w-5" />
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
