interface Props {
  weight: string;
  deliveryMethod: string;
  onWeightChange: (v: string) => void;
  onDeliveryMethodChange: (v: string) => void;
}

const DELIVERY_METHODS = [
  "Cadna Logistics",
  "Seller Owned Courier",
  "Partner Courier",
];

export default function EditProductShipping({
  weight,
  deliveryMethod,
  onWeightChange,
  onDeliveryMethodChange,
}: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-5 border-b border-gray-100 pb-3">
        Shipping
      </h2>

      <div className="space-y-4">
        <div>
          <label className="text-[14px] text-[#4C4D60] mb-1 block">
            Weight (kg)
          </label>
          <input
            type="number"
            placeholder="e.g. 3.5kg"
            value={weight}
            onChange={(e) => {onWeightChange(e.target.value)}}
            className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
          />
        </div>

        <div>
          <label className="text-[14px] text-[#4C4D60] mb-1 block">
            Delivery Method
          </label>
          <select
            value={deliveryMethod}
            onChange={(e) => {onDeliveryMethodChange(e.target.value)}}
            className="w-full px-3 py-2 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60] bg-white"
          >
            {DELIVERY_METHODS.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}