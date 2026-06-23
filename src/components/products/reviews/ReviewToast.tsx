import { useEffect } from "react";
import { Check } from "lucide-react";

interface Props {
  message: string;
  onDone: () => void;
}

export default function ReviewToast({ message, onDone }: Props) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => {
      clearTimeout(t);
    };
  }, [onDone]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#1E1B3A] text-white text-[13px] font-medium px-4 py-3 rounded-xl shadow-lg">
      <Check size={14} className="text-[#00AB72]" />
      {message}
    </div>
  );
}
