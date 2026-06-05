import { Plus, X } from "lucide-react";
import { useRef, useState } from "react";
import Thumbnail from "@/assets/images/product/thumbnail.png";
import Thumbnail2 from "@/assets/images/product/thumbnail2.png";
import Thumbnail3 from "@/assets/images/product/thumbnail3.png";
import Thumbnail4 from "@/assets/images/product/thumbnail4.png";

interface Props {
  images?: string[];
  onAddImage: (file: File) => void;
  onRemoveImage: (index: number) => void;
}

export default function EditProductImages({
  images,
  onAddImage,
  onRemoveImage,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Use internal state seeded with defaults so images always show
  const [localImages, setLocalImages] = useState<string[]>(
    images && images.length > 0
      ? images
      : [Thumbnail, Thumbnail2, Thumbnail3, Thumbnail4],
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLocalImages((prev) => [...prev, url]);
    onAddImage(file);
  };

  const handleRemove = (index: number) => {
    setLocalImages((prev) => prev.filter((_, i) => i !== index));
    onRemoveImage(index);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-5 border-b border-gray-100 pb-3">
        Product Images
      </h2>

      <div className="flex flex-wrap gap-3">
        {localImages.map((img, i) => (
          <div
            key={i}
            className="relative w-35 h-35 rounded-xl border border-[#E5E7EB] overflow-hidden shrink-0"
          >
            <img
              src={img}
              alt={`Product ${String(i + 1)}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("❌ Image failed:", e.currentTarget.src);
              }}
            />

            {/* Cover label */}
            {i === 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white text-[11px] font-medium text-center py-1">
                Cover
              </div>
            )}

            {/* Remove */}
            <button
              onClick={() => {
                handleRemove(i);
              }}
              className="absolute top-1.5 right-1.5 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        ))}

        {/* Upload slot */}
        <button
          onClick={() => inputRef.current?.click()}
          className="w-35 h-35 rounded-xl border-2 border-dashed border-[#CDCDFA] bg-[#FAFAFF] flex items-center justify-center hover:bg-[#EFEFFD] transition shrink-0"
        >
          <Plus className="h-7 w-7 text-[#5D5FEF]" />
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <p className="text-[13px] text-[#9899A3] mt-4">
        First image is used as the cover. Drag to reorder. JPG, PNG · Max 5MB
        each.
      </p>
    </div>
  );
}
