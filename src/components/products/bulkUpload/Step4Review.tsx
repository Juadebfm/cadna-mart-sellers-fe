import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: string;
  stock: number;
  category: string;
  image: string;
}

const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "HTHIUM Portable Power Station", price: "₦420,000", stock: 5,  category: "Electronics",       image: "" },
  { id: "2", name: "Redmi A5 Smartphone",           price: "₦85,000",  stock: 20, category: "Phones & tablets",  image: "" },
  { id: "3", name: "NIVEA Radiant & Beauty Body Lotion 600ml", price: "₦8,300", stock: 40, category: "Beauty & Personal Care", image: "" },
  { id: "4", name: 'HP 24" Windows 11 LED Monitor', price: "₦165,000", stock: 16, category: "Electronics",       image: "" },
  { id: "5", name: "OURITEL Android 16 Smartphone", price: "₦105,000", stock: 12, category: "Electronics",       image: "" },
  { id: "6", name: "EAGEAT Bluetooth RGB Wireless Mouse", price: "₦8,500", stock: 30, category: "Electronics",   image: "" },
  { id: "7", name: 'Lenovo 27" FHD All-in-One Monitor', price: "₦285,000", stock: 8, category: "Electronics",   image: "" },
  { id: "8", name: "Women's High-Waist Skinny Jeans", price: "₦8,500", stock: 40, category: "Fashion",           image: "" },
];

export default function Step4Review() {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[16px] font-semibold text-[#5D5FEF]">Review your products</p>
          <p className="text-[13px] text-[#9899A3]">
            Check each product before publishing. Click any card to edit details.
          </p>
        </div>
        <button
          onClick={() => void navigate("/seller/products")}
          className="px-5 py-2.5 rounded-lg bg-[#5D5FEF] text-white text-[13px] font-semibold hover:bg-[#4B4DD6] transition"
        >
          Publish Products
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {MOCK_PRODUCTS.map((product) => (
          <div
            key={product.id}
            onClick={() => void navigate(`/seller/products/${product.id}/edit`)}
            className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden cursor-pointer hover:shadow-md hover:border-[#5D5FEF] transition-all group"
          >
            {/* Image */}
            <div className="aspect-square bg-[#F3F3F8] flex items-center justify-center">
              {product.image ? (
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#EFEFFD] flex items-center justify-center">
                  <span className="text-[#5D5FEF] text-[18px] font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="px-3 py-3">
              <p className="text-[12px] font-semibold text-[#4C4D60] truncate">{product.name}</p>
              <p className="text-[13px] font-bold text-[#5D5FEF] mt-0.5">{product.price}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-[10px] text-[#9899A3] truncate">{product.category}</p>
                <p className="text-[10px] text-[#9899A3]">Stock: {product.stock}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}