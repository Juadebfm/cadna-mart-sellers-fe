import {  Package2, ArrowRight } from "lucide-react";

interface Props {
  onOpenTicket: () => void;
}

export default function SupportChannels({ onOpenTicket }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* WhatsApp Support */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-4 flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-[#E6F8F2] flex items-center justify-center shrink-0">
          <Package2 size={20} className="text-[#00AB72]" />
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#4C4D60]">
            WhatsApp Support
          </p>
          <p className="text-[16px] text-[#696A7A] mt-0.5">
            Fastest response • Mon – Fri • 9am – 6pm WAT
          </p>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[13px] text-[#008559] font-medium mt-2 hover:underline"
          >
            Chat now 
            <ArrowRight size={13} />
          </a>
        </div>
      </div>

      {/* Submit a ticket */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-4 flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-[#EFEFFD] flex items-center justify-center shrink-0">
          <Package2 size={20} className="text-[#5D5FEF]" />
        </div>
        <div>
          <p className="text-[18px] font-medium text-[#4C4D60]">
            Submit a ticket
          </p>
          <p className="text-[16px] text-[#696A7A] mt-0.5">
            For detailed issues • Reply within 1 business day
          </p>
          <button
            onClick={onOpenTicket}
            className="inline-flex items-center gap-1 text-[13px] text-[#5D5FEF] font-medium mt-2 hover:underline"
          >
            Open ticket 
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}