import { Plus, X, Phone } from "lucide-react";
import BubbleChat1 from "../../assets/images/bubble-chat-1.png";
import BubbleChat2 from "../../assets/images/bubble-chat-2.png";
import { useState } from "react";

export default function Faqs() {
  const [open1, setOpen1] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [open3, setOpen3] = useState<boolean>(false);
  const [open4, setOpen4] = useState<boolean>(false);
  const [open5, setOpen5] = useState<boolean>(false);
  const [open6, setOpen6] = useState<boolean>(false);

 return (
    <section id="faqs">
      <div className="mx-auto w-[95%] md:w-[85%] mt-10">
      <div className="text-center ">
        <a className="w-fit mx-auto py-1 px-4 bg-purple-100 text-purple-600 text-[10px] rounded-full font-medium capitalize">
          frequently asked questions
        </a>
        <h2 className="pt-3 font-semibold text-3xl text-gray-600">
          Got Questions? <span className="text-purple-500">Look here.</span>
        </h2>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row mt-5 gap-12">
          <div className="w-full lg:w-[70%]">

            {/* FAQ 1 */}
            <div className="py-4 px-5 rounded-2xl bg-[#F6F6FE]">
              <div
                className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
                onClick={() => {setOpen1(!open1)}}
              >
                <p>When will I receive my payout?</p>
                {open1 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>

              {open1 && (
                <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
                  You receive your payout after the order is confirmed as delivered,
                  or after a defined hold period.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="py-4 px-5 rounded-2xl bg-[#F6F6FE] mt-3">
              <div
                className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
                onClick={() => {setOpen2(!open2)}}
              >
                <p>Who handles delivery?</p>
                {open2 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>

              {open2 && (
                <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
                  Delivery depends on the mode selected at checkout.
                  <ul className="list-disc pl-5 pt-2">
                    <li>Customer pickup</li>
                    <li>Seller-handled delivery</li>
                    <li>External provider delivery</li>
                  </ul>
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="py-4 px-5 rounded-2xl bg-[#F6F6FE] mt-3">
              <div
                className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
                onClick={() => {setOpen3(!open3)}}
              >
                <p>Is KYC required to register?</p>
                {open3 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>

              {open3 && (
                <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
                  Yes, KYC may be required. Registration also requires admin approval.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="mt-3 py-4 px-5 rounded-2xl bg-[#F6F6FE]">
              <div
                className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
                onClick={() => {setOpen4(!open4)}}
              >
                <p>How do I list my products?</p>
                {open4 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>

              {open4 && (
                <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
                  Submit product → admin review → product goes live.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="mt-3 py-4 px-5 rounded-2xl bg-[#F6F6FE]">
              <div
                className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
                onClick={() => {setOpen5(!open5)}}
              >
                <p>What happens if a buyer requests a return?</p>
                {open5 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>

              {open5 && (
                <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
                  Returns are handled by the seller based on their return policy.
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="mt-3 py-4 px-5 rounded-2xl bg-[#F6F6FE]">
              <div
                className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
                onClick={() => {setOpen6(!open6)}}
              >
                <p>How do I contact support?</p>
                {open6 ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>

              {open6 && (
                <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
                  Contact support via WhatsApp or the support page.
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE PANEL */}
          <div className="hidden lg:block lg:w-[30%]">
            <div className="bg-indigo-700 text-center py-7 px-6 rounded-t-2xl rounded-bl-4xl">
              <div className="relative w-10 h-10 mx-auto">
                <img src={BubbleChat2} className="absolute top-1 left-2 w-10 h-10 z-0" />
                <img src={BubbleChat1} className="absolute top-0 left-0 w-10 h-10 z-10" />
              </div>

              <h3 className="text-white text-[16px] mt-2 font-semibold">
                Have different questions?
              </h3>

              <p className="text-white text-[12px] mt-2">
                Our team will answer all your questions quickly.
              </p>

              <button className="rounded-xl py-2 px-5 mt-5 text-indigo-900 text-[14px] bg-white">
                Contact Support
              </button>
            </div>

            <div className="bg-purple-600 py-3 px-4 mt-5 rounded-b-2xl rounded-tl-4xl">
              <div className="flex gap-2 items-center">
                <Phone className="text-indigo-700 bg-white w-8 h-8 p-2 rounded-full" />
                <div>
                  <h3 className="font-bold text-white text-[18px]">
                    24/7 Support
                  </h3>
                  <p className="text-[12px] text-white">
                    Your satisfaction is our{" "}
                    <span className="font-bold text-[#FFBC1B]">
                      top priority
                    </span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
