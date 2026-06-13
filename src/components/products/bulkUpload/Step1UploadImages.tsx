import { useRef, useState } from "react";
import { FolderOpen, X } from "lucide-react";

interface Props {
  onContinue: () => void;
}

interface UploadedImage {
  name: string;
  url: string;
  failed?: boolean;
}

export default function Step1UploadImages({ onContinue }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList) => {
    const newImages: UploadedImage[] = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .map((f) => ({ name: f.name, url: URL.createObjectURL(f) }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files);
  };

  const handleRemove = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const failed  = images.filter((i) => i.failed).length;
  const ready   = images.filter((i) => !i.failed).length;

  return (
    <div className="space-y-6">
      {/* Naming guide */}
      <div>
        <p className="text-[13px] font-medium text-[#4C4D60] mb-3">
          How to name your image files
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "First product", filename: "A1.jpg" },
            { label: "Second image (same product)", filename: "A2.jpg" },
            { label: "Next product", filename: "B1.jpg" },
            { label: "After Z", filename: "AA1.jpg" },
          ].map((item) => (
            <div key={item.filename} className="bg-[#FAFAFF] rounded-xl border border-[#E5E7EB] px-4 py-3">
              <p className="text-[11px] text-[#9899A3] mb-1">{item.label}</p>
              <p className="text-[13px] font-semibold text-[#5D5FEF]">{item.filename}</p>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-[#9899A3] mt-2">
          Use letters A–Z then AA, AB… followed by a number for multiple images per product. The letter prefix is the matching key in your CSV.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`w-full rounded-xl border-2 border-dashed cursor-pointer transition-colors flex flex-col items-center justify-center py-12 gap-3 ${
          isDragging ? "border-[#5D5FEF] bg-[#EFEFFD]" : "border-[#CDCDFA] bg-[#FAFAFF] hover:bg-[#EFEFFD]"
        }`}
      >
        <FolderOpen size={32} className="text-[#5D5FEF]" />
        <p className="text-[13px] text-[#5D5FEF] font-medium">
          Drop your image folder here or click to browse
        </p>
        <p className="text-[11px] text-[#9899A3]">
          JPG, PNG, WebP supported · Max 5 MB per file · Up to 100 files per batch
        </p>
        <button className="mt-1 px-5 py-2 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition">
          Select Folder
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => { if (e.target.files) handleFiles(e.target.files); }}
      />

      {/* Image preview grid */}
      {images.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-[#4C4D60] font-medium">
              {images.length} images selected
            </p>
            <button
              onClick={() => setImages([])}
              className="text-[12px] text-red-500 hover:underline"
            >
              Clear all
            </button>
          </div>

          {(failed > 0 || ready > 0) && (
            <p className="text-[12px] text-[#9899A3]">
              {ready} images uploaded successfully
              {failed > 0 && `, ${failed} failed`}
            </p>
          )}

          <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
            {images.map((img, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-[#E5E7EB] group">
                <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                <button
                  onClick={(e) => { e.stopPropagation(); handleRemove(i); }}
                  className="absolute top-0.5 right-0.5 w-5 h-5 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  <X size={10} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-end">
        <button
          onClick={onContinue}
          disabled={images.length === 0}
          className="px-6 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue to CSV upload →
        </button>
      </div>
    </div>
  );
}