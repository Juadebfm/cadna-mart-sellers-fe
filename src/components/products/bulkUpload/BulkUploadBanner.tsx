interface Props {
  onHowTo: () => void;
}

export default function BulkUploadBanner({ onHowTo }: Props) {
  return (
    <div className="flex items-center justify-between gap-4 bg-[#5D5FEF] text-white rounded-xl px-5 py-3.5">
      <div className="flex items-center gap-2">
        <span className="text-white text-[18px]">ℹ</span>
        <p className="text-[13px]">
          New to bulk upload? Learn how to prepare your files correctly before you start.
        </p>
      </div>
      <button
        onClick={onHowTo}
        className="shrink-0 px-4 py-1.5 rounded-lg bg-white text-[#5D5FEF] text-[12px] font-semibold hover:bg-gray-100 transition"
      >
        How to bulk upload
      </button>
    </div>
  );
}