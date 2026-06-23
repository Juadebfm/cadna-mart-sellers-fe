import { useRef, useState } from "react";
import { FileText, Check, Download, ArrowLeft,  } from "lucide-react";

interface Props {
  onBack: () => void;
  onSubmit: () => void;
}

const CSV_COLUMNS = [
  { col: "product_name", example: "Baby Crib Set", required: true },
  { col: "category", example: "Baby Products", required: true },
  { col: "price", example: "24500", required: true },
  {
    col: "image_prefix",
    example: "A (matches A1.jpg, A2.jpg…)",
    required: true,
  },
  { col: "description", example: "High quality wooden crib", required: false },
  { col: "stock", example: "20", required: false },
];

// ── Generate and download sample CSV/XLSX with correct headers and example row based on CSV_COLUMNS definition ──
function downloadSampleCSV() {
  const headers = CSV_COLUMNS.map((c) => c.col).join(",");
  const example = CSV_COLUMNS.map((c) => `"${c.example}"`).join(",");
  const csv = `${headers}\n${example}`;
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cadnamart_bulk_upload_sample.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function downloadSampleXLSX() {
  // Same content as CSV but .xlsx extension for Excel users
  const headers = CSV_COLUMNS.map((c) => c.col).join(",");
  const example = CSV_COLUMNS.map((c) => `"${c.example}"`).join(",");
  const csv = `${headers}\n${example}`;
  const blob = new Blob([csv], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cadnamart_bulk_upload_sample.xlsx";
  a.click();
  URL.revokeObjectURL(url);
}

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
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="space-y-4">
      {/* Column reference */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 sm:px-6 py-5 space-y-4">
        <p className="text-[16px] font-semibold text-[#5D5FEF]">
          Step 2 — Upload your product CSV
        </p>

        {/* Table — scrolls horizontally on mobile */}
        <div className="rounded-xl border border-[#E5E7EB] overflow-x-auto">
          <table className="w-full text-sm min-w-[420px]">
            <thead>
              <tr className="bg-[#F3F3F8] border-b border-[#E5E7EB]">
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider">
                  Column
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider">
                  Example
                </th>
                <th className="px-4 py-3 text-left text-[12px] font-medium text-[#4C4D60] uppercase tracking-wider">
                  Required?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#F3F4F6]">
              {CSV_COLUMNS.map((row) => (
                <tr key={row.col}>
                  <td className="px-4 py-3 text-[13px] font-medium text-[#5D5FEF]">
                    {row.col}
                  </td>
                  <td className="px-4 py-3 text-[13px] text-[#4C4D60]">
                    {row.example}
                  </td>
                  <td className="px-4 py-3 text-[13px]">
                    {row.required ? (
                      <span className="flex items-center gap-1 text-[#008559]">
                        <Check size={13} /> Required
                      </span>
                    ) : (
                      <span className="text-[#696A7A]">Optional</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Download buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <p className="text-[12px] sm:text-[13px] text-[#9899A3]">
            Use this as a starting template
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <button
              onClick={downloadSampleCSV}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#8900FF] text-white text-[13px] font-medium hover:bg-[#6503bc] transition w-full sm:w-auto"
            >
              <Download size={13} />
              <span>Download CSV</span>
            </button>
            <button
              onClick={downloadSampleXLSX}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#8900FF] text-[#8900FF] text-[13px] font-medium hover:bg-[#F3E6FF] transition w-full sm:w-auto"
            >
              <Download size={13} />
              <span>Download XLSX</span>
            </button>
          </div>
        </div>
      </div>

      {/* Upload CSV */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 sm:px-6 py-5 space-y-4">
        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => {
            setIsDragging(false);
          }}
          onDrop={handleDrop}
          onClick={() => {
            if (!csvFile) inputRef.current?.click();
          }}
          className={`w-full rounded-xl border-2 border-dashed cursor-pointer transition-colors flex flex-col items-center justify-center py-10 sm:py-12 gap-2 text-center px-4 ${
            isDragging
              ? "border-[#5D5FEF] bg-[#EFEFFD]"
              : "border-[#CDCDFA] bg-[#FAFAFF] hover:bg-[#EFEFFD]"
          }`}
        >
          <FileText size={28} className="text-[#5D5FEF] shrink-0" />
          <p className="text-[14px] sm:text-[16px] text-[#5D5FEF] font-medium">
            Drop your CSV file here or click to browse
          </p>
          <p className="text-[12px] sm:text-[13px] text-[#4C4D60]">
            .csv or .xlsx files only
          </p>
        </div>

        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
          }}
        />

        {/* Uploaded file row */}
        {csvFile && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white">
            <div className="flex items-center gap-3 min-w-0">
              <FileText size={18} className="text-[#5D5FEF] shrink-0" />
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-[#4C4D60] truncate">
                  {csvFile.name}
                </p>
                <p className="text-[11px] text-[#9899A3]">
                  {(csvFile.size / 1024).toFixed(0)} KB
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex items-center gap-1 text-[12px] text-[#00AB72] font-medium">
                <Check size={13} /> Validated
              </span>
              <button
                onClick={() => {
                  setCsvFile(null);
                }}
                className="text-[12px] text-red-400 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <button
            onClick={onBack}
            className="text-[13px] text-[#9899A3] hover:text-[#4C4D60] transition text-center sm:text-left border border-[#E5E7EB] px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={13} className="inline-block mr-1" />
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!csvFile}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit & Process
            <ArrowLeft size={13} className="inline-block ml-1 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
