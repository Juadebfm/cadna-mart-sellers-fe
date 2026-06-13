import { useRef, useState } from "react";
import { FileText, CheckCircle2, Download } from "lucide-react";

interface Props {
  onBack: () => void;
  onSubmit: () => void;
}

const CSV_COLUMNS = [
  { col: "product_name", example: "Baby Crib Set",                required: true  },
  { col: "category",     example: "Baby Products",                required: true  },
  { col: "price",        example: "24500",                        required: true  },
  { col: "image_prefix", example: "A (matches A1.jpg, A2.jpg…)", required: true  },
  { col: "description",  example: "High quality wooden crib",     required: false },
  { col: "stock",        example: "20",                           required: false },
];

export default function Step2UploadCSV({ onBack, onSubmit }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (file.name.endsWith(".csv") || file.name.endsWith(".xlsx")) {
      setCsvFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <p className="text-[15px] font-semibold text-[#5D5FEF]">
        Step 2 — Upload your product CSV
      </p>

      {/* Column reference table */}
      <div className="rounded-xl border border-[#E5E7EB] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F3F3F8] border-b border-[#E5E7EB]">
              <th className="px-4 py-3 text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider">Column</th>
              <th className="px-4 py-3 text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider">Example</th>
              <th className="px-4 py-3 text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider">Required?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F3F4F6]">
            {CSV_COLUMNS.map((row) => (
              <tr key={row.col}>
                <td className="px-4 py-3 text-[13px] font-medium text-[#5D5FEF]">{row.col}</td>
                <td className="px-4 py-3 text-[13px] text-[#4C4D60]">{row.example}</td>
                <td className="px-4 py-3 text-[13px]">
                  {row.required ? (
                    <span className="flex items-center gap-1 text-[#00AB72]">
                      <CheckCircle2 size={13} /> Required
                    </span>
                  ) : (
                    <span className="text-[#9899A3]">Optional</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Download sample CSV */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5D5FEF] text-white text-[12px] font-medium hover:bg-[#4B4DD6] transition">
          <Download size={13} />
          Download sample CSV
        </button>
        <p className="text-[12px] text-[#9899A3]">Use this as a starting template</p>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => !csvFile && inputRef.current?.click()}
        className={`w-full rounded-xl border-2 border-dashed cursor-pointer transition-colors flex flex-col items-center justify-center py-12 gap-2 ${
          isDragging ? "border-[#5D5FEF] bg-[#EFEFFD]" : "border-[#CDCDFA] bg-[#FAFAFF] hover:bg-[#EFEFFD]"
        }`}
      >
        <FileText size={28} className="text-[#5D5FEF]" />
        <p className="text-[13px] text-[#5D5FEF] font-medium">
          Drop your CSV file here or click to browse
        </p>
        <p className="text-[11px] text-[#9899A3]">.csv or .xlsx files only</p>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept=".csv,.xlsx"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
      />

      {/* Uploaded file row */}
      {csvFile && (
        <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-3">
            <FileText size={18} className="text-[#5D5FEF]" />
            <div>
              <p className="text-[13px] font-medium text-[#4C4D60]">{csvFile.name}</p>
              <p className="text-[11px] text-[#9899A3]">
                {(csvFile.size / 1024).toFixed(0)} KB
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[12px] text-[#00AB72] font-medium">
              <CheckCircle2 size={13} /> Validated
            </span>
            <button
              onClick={() => setCsvFile(null)}
              className="text-[12px] text-red-400 hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      {/* Footer nav */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="text-[13px] text-[#9899A3] hover:text-[#4C4D60] transition"
        >
          ← Back
        </button>
        <button
          onClick={onSubmit}
          disabled={!csvFile}
          className="px-6 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Submit & Process →
        </button>
      </div>
    </div>
  );
}