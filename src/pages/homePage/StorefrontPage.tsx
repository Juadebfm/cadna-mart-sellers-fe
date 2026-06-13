import StorefrontKYCBanner from "@/components/storeFront/StorefrontKYCBanner";
import StorefrontBanner from "@/components/storeFront/StorefrontBanner";
import StorefrontInfo from "@/components/storeFront/StorefrontInfo";
import StorefrontCategories from "@/components/storeFront/StorefrontCategories";
import StorefrontFulfillment from "@/components/storeFront/StorefrontFulfillment";

export default function StorefrontPage() {
  const kycDone = false; // toggle to true to see KYC done state

  return (
    <div className="space-y-5">
      <StorefrontKYCBanner kycDone={kycDone} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5 space-y-5">
          <StorefrontBanner />
          <StorefrontInfo />
        </div>

        {/* Right column */}
        <div className="space-y-5">
          <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
            <StorefrontCategories />
          </div>
          <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-5">
            <StorefrontFulfillment />
          </div>
        </div>
      </div>
    </div>
  );
}