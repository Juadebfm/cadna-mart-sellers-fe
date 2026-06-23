import { useState, useRef } from "react";
import { Upload } from "lucide-react";

const ID_TYPES = [
  "National ID (NIN)",
  "Driver's licence",
  "International passport",
  "Voter's card",
];

export default function KYCGovernmentIDUpload() {
  const [idType, setIdType] = useState("National ID (NIN)");
  const [idNumber, setIdNumber] = useState("");
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);

  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);

  const isValid = idNumber.trim() !== "" && frontFile !== null;

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-1 border-b border-[#E5E7EB] pb-3">
        Upload government ID
      </h2>
      <p className="text-[16px] text-[#696A7A] mt-3 mb-4">
        Accepted: National ID, Driver's licence, International passport, Voter's card.
      </p>

      <div className="space-y-4">
        {/* ID Type */}
        <div>
          <label className="text-[16px] font-medium text-[#4C4D60] mb-1 block">
            ID Type
          </label>
          <select
            value={idType}
            onChange={(e) => {setIdType(e.target.value)}}
            className="w-full px-3 py-2.5 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60] bg-white"
          >
            {ID_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* ID Number */}
        <div>
          <label className="text-[16px] font-medium text-[#4C4D60] mb-1 block">
            ID Number
          </label>
          <input
            type="text"
            placeholder="Enter your ID number"
            value={idNumber}
            onChange={(e) => {setIdNumber(e.target.value)}}
            className="w-full px-3 py-2.5 text-[13px] border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-[#5D5FEF] text-[#4C4D60]"
          />
        </div>

        {/* Upload front */}
        <div>
          <button
            onClick={() => frontRef.current?.click()}
            className="w-full flex flex-col items-center justify-center gap-2 py-6 border-2 border-dashed border-[#9899A3] rounded-xl bg-[#F1F2F4] hover:bg-[#FAFAFF] hover:border-[#CDCDFA] transition"
          >
            <Upload className="h-5 w-5 text-[#9899A3]" />
            <p className="text-[14px] text-[#9899A3] font-medium">
              {frontFile ? frontFile.name : "Upload front of ID"}
            </p>
            <p className="text-[11px] text-[#9899A3]">
              JPG or PNG · Max 5MB
            </p>
          </button>
          <input
            ref={frontRef}
            type="file"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={(e) => {setFrontFile(e.target.files?.[0] ?? null)}}
          />
        </div>

        {/* Upload back */}
        <div>
          <button
            onClick={() => backRef.current?.click()}
            className="w-full flex flex-col items-center justify-center gap-2 py-6 border-2 border-dashed border-[#9899A3] rounded-xl bg-[#F1F2F4] hover:bg-[#FAFAFF] hover:border-[#CDCDFA] transition"
          >
            <Upload className="h-5 w-5 text-[#9899A3]" />
            <p className="text-[14px] text-[#9899A3] font-medium">
              {backFile ? backFile.name : "Upload back of ID (if applicable)"}
            </p>
            <p className="text-[11px] text-[#9899A3]">
              JPG or PNG · Max 5MB
            </p>
          </button>
          <input
            ref={backRef}
            type="file"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={(e) => {setBackFile(e.target.files?.[0] ?? null)}}    
          />
        </div>

        {/* Submit button */}
        <button
          disabled={!isValid}
          className={`w-full py-3 rounded-xl text-[14px] font-semibold transition ${
            isValid
              ? "bg-[#5D5FEF] text-white hover:bg-[#4446D0] cursor-pointer"
              : "bg-[#EFEFFD] text-[#9294F4] cursor-not-allowed"
          }`}
        >
          Submit for Verification
        </button>

        {/* Security note */}
        <p className="text-[12px] text-[#BABAC1] text-center">
          Your documents are encrypted and handled securely.
        </p>
      </div>
    </div>
  );
}