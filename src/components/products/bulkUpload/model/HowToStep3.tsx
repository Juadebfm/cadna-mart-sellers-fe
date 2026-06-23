import { FolderOpen, FileText, FileCheckCorner } from "lucide-react";

export default function HowToStep3() {
  const steps = [
    {
      icon: <FolderOpen className="h-4 w-4 sm:h-5 sm:w-5 text-[#5D5FEF]" />,
      iconBg: "bg-[#EFEFFD]",
      iconBorder: "border-[#5D5FEF]",
      label: "Upload your image folder",
      desc: "Drag your entire product image folder onto the upload area, or click to browse and select all files. Up to 500 images per batch.",
    },
    {
      icon: <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-[#5D5FEF]" />,
      iconBg: "bg-[#EFEFFD]",
      iconBorder: "border-[#5D5FEF]",
      label: "Upload your CSV file",
      desc: "Once images are uploaded, proceed to Step 2 and upload your product CSV. The system will validate and preview the first few rows so you can confirm it looks right before processing.",
    },
    {
      icon: <FileCheckCorner className="h-4 w-4 sm:h-5 sm:w-5 text-[#00AB72]" />,
      iconBg: "bg-[#E6F8F2]",
      iconBorder: "border-[#008559]",
      label: "Click Submit & process",
      desc: "The backend takes over. You'll see a live provisioning screen as it uploads images to cloud storage, reads your CSV, matches images to products, and generates thumbnails. Keep the window open — it usually takes under a minute.",
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-5">
      <div>
        <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#4C4D60]">
          Upload your folder and CSV
        </h3>
        <p className="text-[12px] sm:text-[13px] text-[#696A7A] mt-1 leading-relaxed">
          Two separate uploads — images first, then CSV. The system processes
          them together on the backend.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {steps.map((step) => (
          <div key={step.label} className="flex items-start gap-3 sm:gap-4">
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${step.iconBg} border ${step.iconBorder}`}
            >
              {step.icon}
            </div>
            <div>
              <p className="text-[13px] sm:text-[16px] font-semibold text-[#4C4D60]">
                {step.label}
              </p>
              <p className="text-[11px] sm:text-[14px] text-[#696A7A] mt-0.5 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}