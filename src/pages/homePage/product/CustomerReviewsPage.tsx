import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ReviewProductCard from "@/components/products/reviews/ReviewProductCard";
import RatingOverview from "@/components/products/reviews/RatingOverview";
import ReviewFilters from "@/components/products/reviews/ReviewFilters";
import ReviewCard, {
  type Review,
} from "@/components/products/reviews/ReviewCard";
import ReviewToast from "@/components/products/reviews/ReviewToast";

const INITIAL_REVIEWS: Review[] = [
  {
    id: "1",
    authorName: "Adaeze O.",
    authorInitials: "AO",
    authorColor: "#7C3AED",
    date: "Apr 18, 2026",
    rating: 4,
    text: "Absolutely love this crib set! Very sturdy and the finish is smooth — no rough edges at all. Assembly was straightforward with the included guide. My baby sleeps so well in it.",
    verified: true,
    replied: false,
    flagged: false,
  },
  {
    id: "2",
    authorName: "Bola Adeyemi",
    authorInitials: "BA",
    authorColor: "#2563EB",
    date: "Apr 10, 2026",
    rating: 4,
    text: "Good quality overall. The mattress is firm which is exactly what I wanted for a newborn. Delivery was faster than expected. Took off one star because one of the bolts was missing but customer service sorted it quickly.",
    verified: true,
    replied: true,
    replyText:
      "Hi Bola, thank you for your kind words! We're glad our team could resolve the missing bolt quickly. We'll pass your feedback to our packaging team. Enjoy every moment with your little one! 🧸",
    flagged: false,
  },
  {
    id: "3",
    authorName: "Emeka Nwosu",
    authorInitials: "EN",
    authorColor: "#059669",
    date: "Mar 28, 2026",
    rating: 2,
    text: "Disappointed. The colour in the photos is much lighter than what was delivered. Also noticed a small scratch on one of the side rails. Expected better quality control for this price.",
    verified: false,
    replied: false,
    flagged: true,
  },
  {
    id: "4",
    authorName: "Funke T.",
    authorInitials: "FT",
    authorColor: "#DC2626",
    date: "Apr 16, 2026",
    rating: 5,
    text: "Third time buying from this seller. Always consistent quality. The waterproof mattress cover is a lifesaver. Highly recommend to any new parent.",
    verified: true,
    replied: false,
    flagged: false,
  },
  {
    id: "5",
    authorName: "Ngozi Ihejirika",
    authorInitials: "NI",
    authorColor: "#7C3AED",
    date: "Feb 25, 2026",
    rating: 4,
    text: "Beautiful crib, exactly as described. My baby is 3 months old now and still going strong. The height adjustment is really convenient as she grows.",
    verified: true,
    replied: false,
    flagged: false,
  },
  {
    id: "6",
    authorName: "Kelvin Eze",
    authorInitials: "KE",
    authorColor: "#0891B2",
    date: "Feb 8, 2026",
    rating: 3,
    text: "Average. The crib itself is fine but the mattress feels a bit thin. May need to buy a separate one. The seller responded quickly to my questions though.",
    verified: true,
    replied: false,
    flagged: false,
  },
  {
    id: "7",
    authorName: "Adaeze Obi",
    authorInitials: "AO",
    authorColor: "#7C3AED",
    date: "Jan 30, 2026",
    rating: 4,
    text: "Very happy with this purchase. Packaging was excellent — everything arrived in perfect condition. Setup took about 40 minutes. Nice product.",
    verified: true,
    replied: false,
    flagged: false,
  },
];

type ToastMsg = string | null;

export default function CustomerReviewsPage() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [filter, setFilter] = useState("All");
  const [toast, setToast] = useState<ToastMsg>(null);

  const showToast = (msg: string) => {
    setToast(msg);
  };

  const handleReplyPost = (id: string, text: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, replied: true, replyText: text } : r,
      ),
    );
    showToast("✓ Reply posted");
  };

  const handleReplyDelete = (id: string) => {
    setReviews((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, replied: false, replyText: "" } : r,
      ),
    );
    showToast("✓ Reply deleted");
  };

  const handleFlag = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, flagged: true } : r)),
    );
    showToast("✓ Review reported to Cadna for moderation");
  };

  const handleUnflag = (id: string) => {
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, flagged: false } : r)),
    );
    showToast("✓ Flag removed");
  };

  const filtered = reviews.filter((r) => {
    if (filter === "All") return true;
    if (filter === "★5") return r.rating === 5;
    if (filter === "★4") return r.rating === 4;
    if (filter === "★3") return r.rating === 3;
    if (filter === "★2") return r.rating === 2;
    if (filter === "★1") return r.rating === 1;
    if (filter === "Unreplied") return !r.replied;
    if (filter === "Flagged") return r.flagged;
    return true;
  });

  const replied = reviews.filter((r) => r.replied).length;
  const unreplied = reviews.filter((r) => !r.replied).length;
  const flagged = reviews.filter((r) => r.flagged).length;
  const verified = reviews.filter((r) => r.verified).length;

  return (
    <div className="space-y-5">
      {/* Back */}
      <button
        onClick={() => void navigate(-1)}
        className="flex items-center gap-2 text-[13px] text-[#9899A3] hover:text-[#4C4D60] transition"
      >
        <ArrowLeft size={15} /> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr] gap-5 items-start">
        {/* Left column */}
        <div className="space-y-4">
          <ReviewProductCard
            name="HTHIUM Portable Power Station"
            sku="BCS-001-WHT"
            price="₦420,000"
          />
          <RatingOverview
            average={4.8}
            total={7}
            breakdown={[3, 2, 1, 1, 0]}
            replied={replied}
            unreplied={unreplied}
            flagged={flagged}
            verifiedBuyers={verified}
          />
        </div>

        {/* Right column — filters + reviews */}
        <div className="space-y-4">
          <ReviewFilters active={filter} onChange={setFilter} />

          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-12 text-center">
                <p className="text-[13px] text-[#9899A3]">
                  No reviews match this filter.
                </p>
              </div>
            ) : (
              filtered.map((review) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onReplyPost={handleReplyPost}
                  onReplyDelete={handleReplyDelete}
                  onFlag={handleFlag}
                  onUnflag={handleUnflag}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <ReviewToast
          message={toast}
          onDone={() => {
            setToast(null);
          }}
        />
      )}
    </div>
  );
}
