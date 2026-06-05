import {Copy} from "lucide-react"

interface Props {
  customerName: string;
  phone: string;
  address: string;
  courier: string;
  trackingNumber: string;
}

export default function OrderDetailShipping({
  customerName,
  phone,
  address,
  courier,
  trackingNumber,
}: Props) {
  const handleCopyTrackingNumber = () => {
    navigator.clipboard.writeText(trackingNumber).catch((err: unknown) => {
      console.error("Failed to copy:", err);
    });
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-6 border-b border-gray-100 pb-3">
        Shipping Information
      </h2>

      <div className="space-y-4">
        {/* Customer details */}
        <div>
          <p className="text-[16px] font-semibold text-[#8900FF]  mb-2">
            Customer details
          </p>
          <div className="space-y-2">
            <div>
              <p className="text-[12px] text-[#9899A3]">Name</p>
              <p className="text-[14px] font-semibold text-[#4C4D60] mt-0.5">
                {customerName}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-[#9899A3]  ">Phone Number</p>
              <p className="text-[14px] font-semibold text-[#4C4D60] mt-0.5">
                {phone}
              </p>
            </div>
            <div>
              <p className="text-[12px] text-[#9899A3]">Delivery Address</p>
              <p className="text-[14px] font-semibold text-[#4C4D60] mt-0.5">
                {address}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Delivery */}
        <div>
          <p className="text-[16px] font-medium text-[#8900FF]  mb-2  ">
            Delivery
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-[12px] text-[#9899A3] ">Courier</p>
              <p className="text-[14px] font-medium text-[#4C4D60] font-semibold mt-0.5">
                {courier}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400">Tracking number</p>

              <div className="flex items-center justify-between bg-[#F1F1FD] border border-[#CDCDFA] rounded-lg px-3 py-2 mt-0.5">
                <p className="text-[12px] font-medium text-[#5556D9]">
                  {trackingNumber}
                </p>

                <button
                 onClick={handleCopyTrackingNumber}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#B4B5F8] text-[10px] text-[#555555] bg-white hover:bg-gray-100 transition"
                >
                  <Copy className="h-3 w-3 shrink-0" />
                  Copy 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
