import { useRef, useState } from "react";
import { Upload, ImageUp } from "lucide-react";

export default function StorefrontBanner() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const logoRef = useRef<HTMLInputElement>(null);

  const handleBanner = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setBannerUrl(URL.createObjectURL(file));
  };

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setLogoUrl(URL.createObjectURL(file));
  };

  return (
    <div className="space-y-4">
      {/* Banner upload */}
      <div
        onClick={() => inputRef.current?.click()}
        className="w-full h-40 rounded-xl border-2 border-dashed border-[#9294F4] bg-[#F6F6FE] hover:bg-[#EFEFFD] transition cursor-pointer flex flex-col items-center justify-center gap-2 overflow-hidden"
      >
        {bannerUrl ? (
          <img
            src={bannerUrl}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <Upload size={22} className="text-[#5D5FEF]" />
            <p className="text-[14px] text-[#5D5FEF] font-medium">
              Click to upload banner image
            </p>
          </>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleBanner}
      />

      {/* Store logo */}
      <div className="flex items-center gap-3">
        <div
          onClick={() => logoRef.current?.click()}
          className="w-12 h-12 rounded-full border-2 border-dashed border-[#CDCDFA] bg-[#FAFAFF] hover:bg-[#EFEFFD] transition cursor-pointer flex items-center justify-center overflow-hidden shrink-0"
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          ) : (
            <ImageUp size={16} className="text-[#5D5FEF]" />
          )}
        </div>
        <div>
          <p className="text-[16px] font-medium text-[#4C4D60]">Store logo</p>
          <p className="text-[12px] text-[#9899A3]">
            PNG or JPG · Min 200×200px
          </p>
        </div>
      </div>
      <input
        ref={logoRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleLogo}
      />
    </div>
  );
}
