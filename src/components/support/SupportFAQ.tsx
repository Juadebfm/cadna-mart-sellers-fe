import { useState } from "react";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "How do I update my order status?",
    answer:
      "Go to Orders, find the order you want to update, click View, then use the Update Status buttons to move the order through the fulfilment flow.",
  },
  {
    question: "Why is my wallet balance on hold?",
    answer:
      "Funds are held in escrow until the buyer confirms delivery. Once confirmed, the amount is released to your wallet automatically within 24 hours.",
  },
  {
    question: "How do I upload images for my products?",
    answer:
      "When creating or editing a product, scroll to the Product Images section and click the upload area or drag and drop your image files there.",
  },
  {
    question: "My store is not visible to buyers. Why?",
    answer:
      "Your store goes live only after KYC verification is complete. Please complete your identity verification under KYC Verification in the sidebar.",
  },
  {
    question: "A buyer raised a dispute on my order. What happens?",
    answer:
      "Returns and refund disputes are handled through the platform's resolution process. Sellers are expected to respond within a defined window. Details of the returns policy are outlined in the Seller Policy document.",
  },
];

export default function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <p className="text-[18px] font-semibold text-[#5D5FEF] mb-4 border-b pb-3 border-[#E5E7EB]">
        Frequently asked questions
      </p>

      <div className="">
        {FAQS.map((faq, i) => (
          <div key={i} className="py-4 px-5 rounded-2xl ">
            {/* Question row */}
            <div
              className="flex justify-between items-center cursor-pointer text-[#4C4D60] font-medium gap-3 border-b border-[#E5E7EB] pb-3"
              onClick={() => {setOpenIndex(openIndex === i ? null : i)}}
            >
              <p className="text-[16px]">{faq.question}</p>
              <Plus
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openIndex === i ? "rotate-45" : ""
                }`}
              />
            </div>

            {/* Answer */}
            {openIndex === i && (
              <div className="mt-3 ">
                <p className="text-[#696A7A] text-[16px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}