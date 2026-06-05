import { useState } from "react";
import Thumbnail from "@/assets/images/product/thumbnail.png";
import Thumbnail2 from "@/assets/images/product/thumbnail2.png";
import Thumbnail3 from "@/assets/images/product/thumbnail3.png";
import Thumbnail4 from "@/assets/images/product/thumbnail4.png";
import Thumbnail5 from "@/assets/images/product/thumbnail5.png";

const IMAGES = [Thumbnail, Thumbnail2, Thumbnail3, Thumbnail4, Thumbnail5];

export default function ViewGallery() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 space-y-3">
      {/* Main image */}
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
        <img
          src={IMAGES[selected]}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 flex-wrap">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setSelected(i);
            }}
            className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition ${
              selected === i
                ? "border-[#5D5FEF]"
                : "border-transparent hover:border-gray-200"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${(i + 1).toString()}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
