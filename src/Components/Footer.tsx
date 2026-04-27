import { useState,  } from "react";
import Logo from "../assets/cadna-mart-footer-logo.png";
import {
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer(){
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="w-full relative " id="support">
      {/* Newsletter Section */}
      <div className="bg-[#F6F6FE]">
        <div className="mx-auto w-[95%] md:w-[85%] py-12 px-3">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 text-center lg:text-left">
            
            {/* LEFT SIDE */}
            <div className="lg:w-1/2">
              <h3 className="text-[32px] font-medium text-gray-400">
                Stay in the <span className="text-purple-500">loop</span>
              </h3>
              <p className="text-gray-400 text-[16px]">
                Get seller tips, platform updates, and growth guides straight to your inbox.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
              <form
                
                className="flex flex-col md:flex-row items-center gap-3 w-full"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value)}}
                  className="h-10 px-4 rounded-md bg-white border border-gray-200 outline-none w-full md:w-auto"
                  required
                />

                <button
                  type="submit"
                  className="h-10 px-6 rounded-md bg-indigo-500 text-white whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-900 text-gray-300 lg:text-left text-center px-6 lg:px-[100px] min-h-[400px] sm:h-[588px] flex flex-col py-10 sm:py-0">
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 w-full pb-8 sm:pb-0">

            {/* Logo + Description */}
            <div className="col-span-2 md:col-span-1">
              <img
                src={Logo}
                alt="Cadna Mart"
                loading="lazy"
                className="w-40 sm:w-52 mb-4 sm:mb-6 mx-auto lg:ml-0"
              />
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Cadna Mart is your trusted hybrid e-commerce platform. Sourcing
                directly from manufacturers to bring you best prices.
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                ABOUT US
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="hover:text-white cursor-pointer">About Cadna Mart</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                CUSTOMER SERVICE
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">How to Shop</li>
                <li className="hover:text-white cursor-pointer">Delivery Options</li>
                <li className="hover:text-white cursor-pointer">Return Policy</li>
              </ul>
            </div>

            {/* Grow With Cadna */}
            <div>
              <h4 className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">
                GROW WITH CADNA
              </h4>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="hover:text-white cursor-pointer">Sell with Cadna</li>
                <li className="hover:text-white cursor-pointer">Become an Investor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center text-sm sm:text-base text-gray-400 gap-4">
          <p>© 2026 CADNA MART. ALL RIGHTS RESERVED.</p>

          <div className="flex gap-6 items-center text-gray-300">
            <FaYoutube size={22} className="cursor-pointer hover:text-white transition" />
            <FaTwitter size={22} className="cursor-pointer hover:text-white transition" />
            <FaLinkedinIn size={22} className="cursor-pointer hover:text-white transition" />
            <FaFacebookF size={22} className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}