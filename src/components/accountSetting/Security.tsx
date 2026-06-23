import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Security() {
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [twoFactor, setTwoFactor] = useState(true);
  const [show, setShow] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggle = (field: "current" | "new" | "confirm") => {
    setShow((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const fields = [
    {
      key: "current" as const,
      label: "Current Password",
      value: current,
      setter: setCurrent,
    },
    {
      key: "new" as const,
      label: "New Password",
      value: newPass,
      setter: setNewPass,
    },
    {
      key: "confirm" as const,
      label: "Confirm New Password",
      value: confirm,
      setter: setConfirm,
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5 space-y-4">
      <p className="text-[18px] font-semibold text-[#5D5FEF] mb-4 pb-2 border-b border-[#E5E7EB] ">Security</p>

      {/* Password fields */}
      <div className="space-y-3">
        {fields.map(({ key, label, value, setter }) => (
          <div key={key} className="relative">
            <input
              type={show[key] ? "text" : "password"}
              placeholder={label}
              value={value}
              onChange={(e) => {
                setter(e.target.value);
              }}
              className="w-full px-3 py-2.5 pr-10 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF]"
            />
            <button
              onClick={() => {
                toggle(key);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9899A3] hover:text-[#4C4D60] transition"
            >
              {show[key] ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 rounded-lg bg-gray-100 text-[#9899A3] text-[13px] font-medium hover:bg-[#EFEFFD] hover:text-[#5D5FEF] transition">
        Update Changes
      </button>

      {/* Two-Factor Authentication */}
      <div className="border-t border-[#F3F4F6] pt-4 space-y-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[13px] font-semibold text-[#4C4D60]">
              Two-Factor Authentication
            </p>
            <p className="text-[12px] text-[#9899A3] mt-0.5">
              Add an extra layer of security to your account by enabling
              two-factor authentication.
            </p>
          </div>
          <button
            onClick={() => {
              setTwoFactor((v) => !v);
            }}
            className={`relative w-11 h-6 rounded-full transition-colors shrink-0 mt-0.5 ${
              twoFactor ? "bg-[#5D5FEF]" : "bg-gray-200"
            }`}
          >
            <span
              className={`absolute top-0.75 left-0.75 w-4.5 h-4.5 bg-white rounded-full shadow transition-transform duration-200 ${
                twoFactor ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
