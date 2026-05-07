import { ArrowRight } from "lucide-react";

interface FeeRow {
  label: string;
  value?: string;
  italic?: boolean;
  isLast?: boolean;
}

const feeRows: FeeRow[] = [
  { label: "Listing fee", value: "Free — ₦0" },
  { label: "Commission per sale" },
  { label: "Account registration", value: "Free — ₦0" },
  { label: "Payment processing", value: "Included", italic: true },
  { label: "Payout to bank", value: "Free — ₦0", isLast: true },
];

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="relative mx-auto w-[95%] lg:h-[773px] mt-[100px] py-16 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B2D6E] via-[#3B3FA8] to-[#4A3FBF] z-[-1000]" />

        <div className="w-[90%] mx-auto">
          <div className="mx-auto text-center">
            <p className="w-fit mx-auto rounded-full border border-white/30 text-white text-[12px] px-4 py-1">
              PRICING
            </p>
            <h2 className="mt-2 text-white text-[28px] sm:text-[36px] lg:text-[48px] font-medium">
              Simple, transparent{" "}
              <span className="text-[#FFBD2E] font-semibold">pricing</span>
            </h2>
            <p className="text-white/80 text-[18px] mt-2">
              No surprises. Know exactly what you pay before you list your first
              product.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-14">
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl bg-white border border-gray-200">
                <div className="py-3 border-b text-indigo-500 font-medium text-[12px] tracking-[0.08em] uppercase border-gray-100 px-4">
                  Fee breakdown
                </div>
                {feeRows.map(({ label, value, italic, isLast }) => (
                  <div
                    key={label}
                    className={`flex justify-between py-3 ${isLast ? "" : "border-b"} text-gray-400 text-[14px] border-gray-100 px-4`}
                  >
                    {label}{" "}
                    {value && (
                      <span
                        className={
                          italic ? "italic" : "text-[#1A7A4A] font-medium"
                        }
                      >
                        {value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center py-3 text-gray-400 text-[14px] px-4 bg-[#F6F6FE] rounded-xl border border-gray-200">
                Full fee schedule available in Seller Policy{" "}
                <span className="text-indigo-500 text-[12px] flex items-center gap-1 cursor-pointer">
                  View policy <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="rounded-xl bg-white border border-gray-200 px-4 py-4">
                <h5 className="font-medium text-[12px] tracking-[0.08em] uppercase text-indigo-500">
                  Payout timeline
                </h5>
                <div className="flex mt-3 gap-4 items-center">
                  <p className="bg-indigo-50 text-indigo-500 text-[22px] leading-[1.1] rounded-xl h-[80px] w-[80px] flex flex-col items-center justify-center font-[Fraunces] shrink-0">
                    <span>T+X</span>
                    <span>days</span>
                  </p>
                  <p className="text-[#787878] text-[13px]">
                    After delivery is confirmed by the buyer. Exact settlement
                    window will be confirmed — check back or{" "}
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

              <div className="mt-6 rounded-xl bg-white border border-gray-200 px-4 py-4">
                <h5 className="font-medium text-[12px] tracking-[0.08em] uppercase text-indigo-500">
                  Important policy notes
                </h5>
                <p className="text-[#787878] text-[13px] mt-2">
                  Sellers are responsible for accurate product descriptions and
                  timely fulfilment. Returns and refunds are handled per the{" "}
                  <a
                    href="#"
                    className="text-indigo-500 underline underline-offset-2 font-medium"
                  >
                    Cadna Mart Seller Policy.
                  </a>{" "}
                  Cadna Mart reserves the right to withhold payouts in cases of
                  disputed orders pending resolution. KYC requirements will be
                  communicated during or after registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
