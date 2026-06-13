import { X } from "lucide-react";

interface Props {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function TransactionModalShell({ title, onClose, children }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm flex flex-col max-h-[90vh]">

        {/* Header — fixed, never scrolls */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
          <p className="text-[15px] font-semibold text-[#4C4D60]">{title}</p>
          <button onClick={onClose}>
            <X size={16} className="text-[#9899A3]" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1">
          {children}
        </div>

      </div>
    </div>
  );
}