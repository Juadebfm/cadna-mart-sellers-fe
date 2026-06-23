import { Check, CircleAlert, ShieldAlert } from "lucide-react";

type StepStatus = "complete" | "required" | "locked";

interface Step {
  label: string;
  status: StepStatus;
  number: number;
}

const STEPS: Step[] = [
  { label: "Business registration", status: "complete", number: 1 },
  { label: "Personal Information", status: "complete", number: 2 },
  { label: "Government ID Upload", status: "required", number: 3 },
  { label: "Bank account verification", status: "locked", number: 4 },
  { label: "Review & approval", status: "locked", number: 5 },
];

function StepItem({ label, status, number }: Step) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-xl border ${
        status === "complete"
          ? "bg-[#F0FDF4] border-[#BBF7D0]"
          : status === "required"
          ? "bg-[#FAF5FF] border-[#E9D5FF]"
          : "bg-white border-[#E5E7EB]"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Icon / Number */}
        {status === "complete" ? (
          <div className="w-8 h-8 rounded-full bg-[#00AB72] flex items-center justify-center shrink-0">
            <Check className="h-5 w-5 text-white" />
          </div>
        ) : status === "required" ? (
          <div className="w-8 h-8 rounded-full bg-[#8900FF] flex items-center justify-center shrink-0">
           <CircleAlert className="h-5 w-5 text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-[#D5D5E8] flex items-center justify-center shrink-0">
            <span className="text-white text-[18px] font-semibold">
              {number}
            </span>
          </div>
        )}

        {/* Label */}
        <p
          className={`text-[16px] font-medium ${
            status === "complete"
              ? "text-[#008559]"
              : status === "required"
              ? "text-[#7D00E8]"
              : "text-[#D5D5E8]"
          }`}
        >
          {label}
        </p>
      </div>

      {/* Status badge */}
      <span
        className={`text-[16px] font-semibold ${
          status === "complete"
            ? "text-[#00AB72]"
            : status === "required"
            ? "text-[#8900FF]"
            : "text-[#9899A3]"
        }`}
      >
        {status === "complete"
          ? "Complete"
          : status === "required"
          ? "Required"
          : "Locked"}
      </span>
    </div>
  );
}

export default function KYCVerificationStatus() {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-4 border-b border-[#E5E7EB] pb-3">
        Verification Status
      </h2>

      {/* Warning banner — shield icon */}
      <div className="flex items-center gap-3 bg-[#FDEFF6] border border-[#FACDE4] rounded-xl px-4 py-3 mb-4">
        <div className="">
          <ShieldAlert className="h-8 w-8 text-[#EF5DA8]" />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-[#EF5DA8]">
            Complete your KYC to publish your products
          </p>
          <p className="text-[12px] text-[#AA4277] mt-0.5">
            Submit all required documents to publish your store and unlock payouts.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        {STEPS.map((step) => (
          <StepItem key={step.label} {...step} />
        ))}
      </div>
    </div>
  );
}