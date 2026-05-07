import { Plus, Phone, MessageCircle, MessageCircleMore } from "lucide-react";
import { useState, type ReactNode } from "react";
import SectionPill from "@/components/ui/SectionPill";
import { Button } from "@/components/ui/Button";

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
    <div className="rounded-2xl bg-[#F6F6FE] transition-colors duration-200 hover:bg-[#EAEAFB]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full min-h-[90px] py-4 px-5 justify-between items-center cursor-pointer text-indigo-500 font-medium text-[16px] sm:text-[18px] lg:text-[22px] text-left"
      >
        <span>{question}</span>
        <Plus
          className={`w-[22px] h-[22px] shrink-0 transition-transform duration-300 ease-out ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mx-5 pt-3 pb-[40px] min-h-[60px] border-t border-gray-200 text-[#4C4D60] text-[16px]">
            {children}
          </div>
        </div>
      </div>
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
        <div className="text-center ">
          <SectionPill color="purple" className="mx-auto">
            frequently asked questions
          </SectionPill>
          <h2 className="pt-3 font-medium text-[34px] sm:text-[42px] lg:text-[52px] text-gray-600">
            Got Questions?{" "}
            <span className="font-semibold text-purple-500">Look here.</span>
          </h2>
        </div>

        <div>
          <div className="flex flex-col lg:flex-row mt-5 gap-12">
            <div className="w-full lg:w-[70%] space-y-3">
              <FaqItem
                question="When will I receive my payout?"
                open={openIndex === 0}
                onToggle={() => { toggle(0); }}
              >
                Payouts settle <span className="font-medium">T+1 business day</span> after
                the buyer confirms the order as delivered, straight to the
                verified bank account on your seller profile — no manual
                withdrawals required. Settlement may pause if KYC is incomplete
                or the order is flagged in a dispute.
              </FaqItem>

              <FaqItem
                question="Who handles delivery?"
                open={openIndex === 1}
                onToggle={() => { toggle(1); }}
              >
                Delivery is determined per-order by the option the buyer picks
                at checkout. Each seller decides which of these to enable based
                on their products and location:
                <ul className="list-disc pl-5 pt-2">
                  <li>
                    <span className="font-medium">Customer pickup</span> — buyer
                    collects from your store or an agreed pickup point.
                  </li>
                  <li>
                    <span className="font-medium">Seller-handled delivery</span>{" "}
                    — you dispatch the order yourself or through your own
                    riders.
                  </li>
                  <li>
                    <span className="font-medium">External provider</span> — a
                    third-party logistics partner picks up and delivers on your
                    behalf.
                  </li>
                </ul>
              </FaqItem>

              <FaqItem
                question="Is KYC required to register?"
                open={openIndex === 2}
                onToggle={() => { toggle(2); }}
              >
                Yes. To keep payouts safe and meet regulatory requirements,
                every seller completes KYC during onboarding — typically a
                government-issued ID, your bank details, and basic business
                information. An admin reviews and approves your account before
                listings go live and payouts can be released.
              </FaqItem>

              <FaqItem
                question="How do I list my products?"
                open={openIndex === 3}
                onToggle={() => { toggle(3); }}
              >
                Listing is fully self-serve once your account is approved. Open
                your dashboard, go to <span className="font-medium">Products → Add new</span>,
                fill in title, images, price, and inventory — your listing goes
                live <span className="font-medium">immediately</span>. For
                larger catalogues, use the bulk upload tool to publish many
                products at once. Cadna may take down listings that violate
                platform policy.
              </FaqItem>

              <FaqItem
                question="What happens if a buyer requests a return?"
                open={openIndex === 4}
                onToggle={() => { toggle(4); }}
              >
                Cadna runs a uniform return window across all listings, and the
                seller fulfills the refund or exchange. The buyer opens a
                return request from their order page within the window, and
                you'll be notified to approve it and arrange the logistics. If
                you and the buyer can't reach agreement, our support team
                steps in to mediate and decide the outcome.
              </FaqItem>

              <FaqItem
                question="How do I contact support?"
                open={openIndex === 5}
                onToggle={() => { toggle(5); }}
              >
                We're reachable on multiple channels — pick whichever is
                fastest for you:
                <ul className="list-disc pl-5 pt-2">
                  <li>
                    <span className="font-medium">WhatsApp</span> — quickest
                    for urgent order or payout issues.
                  </li>
                  <li>
                    <span className="font-medium">Email</span> — best for
                    documentation, receipts, or non-urgent requests.
                  </li>
                  <li>
                    <span className="font-medium">In-app contact form</span> —
                    submit a ticket directly from your seller dashboard.
                  </li>
                  <li>
                    <span className="font-medium">Phone hotline</span> —
                    available during business hours for live assistance.
                  </li>
                </ul>
              </FaqItem>
            </div>

            {/* RIGHT SIDE PANEL */}
            <div className="hidden lg:block lg:w-[30%]">
              <div className="bg-[#4243AA] py-[50px] px-6 rounded-t-2xl rounded-bl-4xl flex flex-col items-center text-center">
                <div className="relative w-[110px] h-[95px] mx-auto">
                  <MessageCircle
                    className="absolute top-0 right-0 w-[52px] h-[52px] text-white scale-x-[-1]"
                    strokeWidth={2.5}
                    fill="#34D399"
                  />
                  <MessageCircleMore
                    className="absolute bottom-0 left-0 w-[82px] h-[82px] text-white"
                    strokeWidth={2.5}
                    fill="#34D399"
                  />
                </div>

                <h3 className="text-white text-[20px] font-semibold mt-6">
                  Have different questions?
                </h3>

                <p className="text-white text-[14px] mt-2 leading-snug">
                  Our team will answer all your questions. We ensure a{" "}
                  <span className="font-semibold">quick response.</span>
                </p>

                <Button variant="white" className="mt-7">
                  Contact Support
                </Button>
              </div>

              <div className="bg-purple-600 py-5 px-5 mt-5 rounded-b-2xl rounded-tl-4xl">
                <div className="flex gap-4 items-center">
                  <Phone className="text-indigo-700 bg-white w-11 h-11 p-2.5 rounded-full shrink-0" />
                  <div>
                    <h3 className="font-bold text-white text-[20px] leading-tight">
                      24/7 Support
                    </h3>
                    <p className="text-[14px] text-white mt-1">
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
