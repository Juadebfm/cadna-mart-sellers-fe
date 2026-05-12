import { Plus, Phone } from "lucide-react";
import { useState, type ReactNode } from "react";
import SectionPill from "@/components/ui/SectionPill";
import { Button } from "@/components/ui/Button";
import BubbleChat from "@/assets/images/landing/bubble-chat.png";

function FaqItem({
  question,
  children,
  open,
  onToggle,
}: {
  question: string;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="py-4 px-5 rounded-2xl bg-[#F6F6FE]">
      <div
        className="flex justify-between items-center cursor-pointer text-indigo-500 font-medium"
        onClick={onToggle}
      >
        <p>{question}</p>
        <Plus
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </div>

      {open && (
        <div className="mt-3 border-t border-gray-200 text-gray-400 text-[16px] pt-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faqs">
      <div className="mx-auto w-[95%] md:w-[85%] mt-10">
        <div className="text-center">
          <SectionPill color="purple" className="mx-auto">
            frequently asked questions
          </SectionPill>
          <h2 className="pt-3 font-semibold text-3xl text-gray-600">
            Got Questions? <span className="text-purple-500">Look here.</span>
          </h2>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row mt-5 gap-12">
            <div className="w-full lg:w-[70%] space-y-3">
              <FaqItem
                question="When will I receive my payout?"
                open={openIndex === 0}
                onToggle={() => {
                  toggle(0);
                }}
              >
                Payouts settle{" "}
                <span className="font-medium">T+1 business day</span> after the
                buyer confirms the order as delivered, straight to the verified
                bank account on your seller profile — no manual withdrawals
                required. Settlement may pause if KYC is incomplete or the order
                is flagged in a dispute.
              </FaqItem>

              <FaqItem
                question="Who handles delivery?"
                open={openIndex === 1}
                onToggle={() => {
                  toggle(1);
                }}
              >
                Delivery is determined per-order by the option the buyer picks
                at checkout. Each seller decides which of these to enable:
                <ul className="list-disc pl-5 pt-2">
                  <li>
                    <span className="font-medium">Customer pickup</span> — buyer
                    collects from your store.
                  </li>
                  <li>
                    <span className="font-medium">Seller-handled delivery</span>{" "}
                    — you dispatch the order yourself.
                  </li>
                  <li>
                    <span className="font-medium">External provider</span> — a
                    third-party logistics partner delivers.
                  </li>
                </ul>
              </FaqItem>

              <FaqItem
                question="Is KYC required to register?"
                open={openIndex === 2}
                onToggle={() => {
                  toggle(2);
                }}
              >
                Yes. Every seller completes KYC during onboarding — typically a
                government-issued ID, your bank details, and basic business
                information. An admin reviews and approves your account before
                listings go live.
              </FaqItem>

              <FaqItem
                question="How do I list my products?"
                open={openIndex === 3}
                onToggle={() => {
                  toggle(3);
                }}
              >
                Listing is fully self-serve once your account is approved. Open
                your dashboard, go to{" "}
                <span className="font-medium">Products → Add new</span>, fill in
                title, images, price, and inventory — your listing goes live{" "}
                <span className="font-medium">immediately</span>.
              </FaqItem>

              <FaqItem
                question="What happens if a buyer requests a return?"
                open={openIndex === 4}
                onToggle={() => {
                  toggle(4);
                }}
              >
                The buyer opens a return request from their order page, and
                you'll be notified to approve it and arrange the logistics. If
                you and the buyer can't reach agreement, our support team steps
                in to mediate.
              </FaqItem>

              <FaqItem
                question="How do I contact support?"
                open={openIndex === 5}
                onToggle={() => {
                  toggle(5);
                }}
              >
                We're reachable on multiple channels:
                <ul className="list-disc pl-5 pt-2">
                  <li>
                    <span className="font-medium">WhatsApp</span> — quickest for
                    urgent issues.
                  </li>
                  <li>
                    <span className="font-medium">Email</span> — best for
                    non-urgent requests.
                  </li>
                  <li>
                    <span className="font-medium">In-app contact form</span> —
                    submit a ticket from your dashboard.
                  </li>
                  <li>
                    <span className="font-medium">Phone hotline</span> —
                    available during business hours.
                  </li>
                </ul>
              </FaqItem>
            </div>

            {/* RIGHT SIDE PANEL */}
            <div className="hidden lg:block lg:w-[30%]">
              <div className="bg-indigo-700 text-center py-7 px-6 rounded-t-2xl rounded-bl-4xl">
                <div className=" mx-auto">
                  <img src={BubbleChat} className="a w-15 h-15 mx-auto " />
                </div>
                <h3 className="text-white text-[16px] mt-2 font-semibold">
                  Have different questions?
                </h3>
                <p className="text-white text-[12px] mt-2">
                  Our team will answer all your questions quickly.
                </p>
                <Button variant="white" size="sm" className="mt-5 px-5">
                  Contact Support
                </Button>
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
