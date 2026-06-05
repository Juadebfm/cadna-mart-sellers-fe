interface Props {
  method: string;
  status: string;
  date: string;
  transactionId: string;
}

export default function OrderDetailPayment({
  method,
  status,
  date,
  transactionId,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5556D9] mb-4 border-b border-gray-100 pb-3">
        Payment
      </h2>
      <div className="space-y-3">
        <div>
          <p className="text-[12px] text-[#9899A3]">Method</p>
          <p className="text-[14px] font-medium text-[#4C4D60] mt-0.5">
            {method}
          </p>
        </div>
        <div>
          <p className="text-[12px] text-[#9899A3]">Status</p>
          <p className="text-[14px] font-semibold text-[#008559] mt-0.5">
            {status}
          </p>
        </div>
        <div>
          <p className="text-[12px] text-[#9899A3]">Date</p>
          <p className="text-[14px] text-[#4C4D60] mt-0.5">{date}</p>
        </div>
        <div>
          <p className="text-[12px] text-[#9899A3]">Transaction ID</p>
          <p className="text-[14px] font-semibold text-[#8900FF] mt-0.5">
            {transactionId}
          </p>
        </div>
      </div>
    </div>
  );
}