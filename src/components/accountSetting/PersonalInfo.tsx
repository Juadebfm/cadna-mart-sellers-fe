import { useState, useRef } from "react";
import { Pencil } from "lucide-react";

export default function PersonalInfo() {
  const [editing, setEditing] = useState(false);
  const [firstName, setFirstName] = useState("Ada");
  const [lastName, setLastName] = useState("Okafor");
  const [email, setEmail] = useState("ada@adasboutique.ng");
  const [phone, setPhone] = useState("801 234 5678");
  const avatarRef = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 sm:px-5 sm:py-5 space-y-4">
      <p className="text-[15px] sm:text-[16px] font-semibold text-[#5D5FEF] pb-2 border-b border-[#E5E7EB]">
        Personal Information
      </p>

      {/* Avatar */}
      <div className="flex justify-center">
        <div className="relative w-20 h-20">
          <div className="w-20 h-20 rounded-full bg-purple-100 overflow-hidden flex items-center justify-center">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl font-bold text-purple-500">AO</span>
            )}
          </div>
          <button
            onClick={() => avatarRef.current?.click()}
            className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#5D5FEF] flex items-center justify-center border-2 border-white"
          >
            <Pencil size={10} className="text-white" />
          </button>
          <input
            ref={avatarRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setAvatarUrl(URL.createObjectURL(file));
            }}
          />
        </div>
      </div>

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <label className="text-[12px] text-[#9899A3]">First name</label>
          <input
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
            disabled={!editing}
            className="w-full px-3 py-2 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] disabled:bg-gray-50 disabled:text-gray-400"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[12px] text-[#9899A3]">Last name</label>
          <input
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
            disabled={!editing}
            className="w-full px-3 py-2 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] disabled:bg-gray-50 disabled:text-gray-400"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className="text-[12px] text-[#9899A3]">Email address</label>
        <input
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          disabled={!editing}
          className="w-full px-3 py-2 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] disabled:bg-gray-50 disabled:text-gray-400"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label className="text-[12px] text-[#9899A3]">Phone number</label>
        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 px-3 py-2 border border-[#E5E7EB] rounded-lg bg-gray-50 text-[13px] text-[#4C4D60] shrink-0">
            🇳🇬 +234
          </div>
          <input
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}}
            disabled={!editing}
            className="flex-1 min-w-0 px-3 py-2 text-[13px] text-[#4C4D60] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] disabled:bg-gray-50 disabled:text-gray-400"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          onClick={() => {setEditing((v) => !v)}}
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#B054FF] text-[#8900FF] text-[14px] sm:text-[15px] font-medium hover:bg-[#FAFAFF] transition"
        >
          <Pencil size={13} />
          {editing ? "Cancel Edit" : "Edit Profile"}
        </button>
        {editing && (
          <button
            onClick={() => {setEditing(false)}}
            className="flex-1 py-2.5 rounded-lg bg-[#EFEFFD] text-[#9294F4] text-[14px] sm:text-[15px] font-medium hover:bg-[#5D5FEF] hover:text-white transition"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
}