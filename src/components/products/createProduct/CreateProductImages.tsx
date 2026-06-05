import { Plus, X } from "lucide-react";
import { useRef } from "react";

interface Props {
  images: string[];
  onAddImage: (file: File) => void;
  onRemoveImage: (index: number) => void;
}

export default function CreateProductImages({
  images,
  onAddImage,
  onRemoveImage,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onAddImage(file);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
      <h2 className="text-[18px] font-semibold text-[#5D5FEF] mb-5 border-b border-gray-100 pb-3">
        Product Images
      </h2>

      <div className="flex flex-wrap gap-3">
        {/* Existing images */}
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-24 h-24 rounded-xl border border-[#E5E7EB] overflow-hidden"
          >
            <img
              src={img}
              alt={`Product ${String(i + 1)}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => {
                onRemoveImage(i);
              }}
              className="absolute top-1 right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition"
            >
              <X className="h-3 w-3 text-gray-500" />
            </button>
          </div>
        ))}

        {/* Upload button */}
        <button
          onClick={() => inputRef.current?.click()}
          className="w-24 h-24 rounded-xl border-2 border-dashed border-[#CDCDFA] bg-[#FAFAFF] flex items-center justify-center hover:bg-[#EFEFFD] transition"
        >
          <Plus className="h-6 w-6 text-[#5D5FEF]" />
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <p className="text-[14px] text-[#9899A3] mt-3">
        First image is used as the cover. Drag to reorder. JPG, PNG · Max 5MB
        each.
      </p>
    </div>
  );
}
