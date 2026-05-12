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
      <div className="relative mx-auto w-[95%] mt-10 py-16 rounded-2xl overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B2D6E] via-[#3B3FA8] to-[#4A3FBF] z-[-1000]" />

        {/* Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-gray-300/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 blur-3xl rounded-full z-[-10]" />
        </div>

        <div className="w-[90%] mx-auto">
          {/* Header */}
          <div className="mx-auto text-center">
            <p className="w-fit mx-auto rounded-xl border text-white text-[12px] px-3 py-1">
              PRICING
            </p>
            <h2 className="mt-2 text-white text-[28px] lg:text-[48px] font-medium">
              Simple, transparent{" "}
              <span className="text-[#FFBD2E] font-semibold">pricing</span>
            </h2>
            <p className="text-white text-[18px] mt-2">
              No surprises. Know exactly what you pay before you list your first product.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 mt-14">
            {/* LEFT — Fee breakdown */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl bg-white border border-gray-200">
                <div className="py-3 border-b text-indigo-500 font-medium text-[13px] border-gray-100 px-4">
                  Fee breakdown
                </div>
                {feeRows.map(({ label, value, italic, isLast }) => (
                  <div
                    key={label}
                    className={`flex justify-between py-3 text-gray-400 text-[14px] px-4 ${isLast ? "" : "border-b border-gray-100"}`}
                  >
                    {label}
                    {value && (
                      <span className={italic ? "italic" : "text-[#1A7A4A] font-medium"}>
                        {value}
                      </span>
                    )}
                  </div>
                ))}
                <div className="flex justify-between py-3 text-gray-400 text-[14px] px-4 bg-[#F6F6FE] rounded-b-xl">
                  Full fee schedule available in Seller Policy
                  <span className="text-indigo-500 text-[12px] flex items-center gap-1 cursor-pointer">
                    View policy <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — Timeline + Policy */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-xl bg-white border border-gray-200 px-4 py-4">
                <h5 className="font-medium text-[13px] text-indigo-500">
                  Payout timeline
                </h5>
                <div className="flex mt-2 gap-4 items-center">
                  <p className="bg-indigo-50 text-indigo-500 text-[22px] rounded-xl px-5 py-2 font-[Fraunces] shrink-0">
                    T+X days
                  </p>
                  <p className="text-[#787878] text-[13px]">
                    After delivery is confirmed by the buyer. Exact settlement
                    window will be confirmed — check back or{" "}
                    <a href="#" className="text-indigo-500 underline underline-offset-2 font-medium">
                      contact support
                    </a>.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white border border-gray-200 px-4 py-4 mt-3">
                <h5 className="font-medium text-[13px] text-indigo-500">
                  Important policy notes
                </h5>
                <p className="text-[#787878] text-[13px] mt-2">
                  Sellers are responsible for accurate product descriptions and
                  timely fulfilment. Returns and refunds are handled per the{" "}
                  <a href="#" className="text-indigo-500 underline underline-offset-2 font-medium">
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
