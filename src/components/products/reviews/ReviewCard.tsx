import { useState } from "react";
import { Star, Reply, Flag, Check } from "lucide-react";

export interface Review {
  id: string;
  authorName: string;
  authorInitials: string;
  authorColor: string;
  date: string;
  rating: number;
  text: string;
  verified: boolean;
  replied: boolean;
  replyText?: string;
  flagged: boolean;
}

interface Props {
  review: Review;
  onReplyPost: (id: string, text: string) => void;
  onReplyDelete: (id: string) => void;
  onFlag: (id: string) => void;
  onUnflag: (id: string) => void;
}

export default function ReviewCard({
  review,
  onReplyPost,
  onReplyDelete,
  onFlag,
  onUnflag,
}: Props) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState(review.replyText ?? "");

  const handlePost = () => {
    if (!replyText.trim()) return;
    onReplyPost(review.id, replyText);
    setShowReplyBox(false);
  };

  const handleEdit = () => {
    setReplyText(review.replyText ?? "");
    setShowReplyBox(true);
  };

  return (
    <div className="bg-white rounded-xl border border-[#E5E7EB] px-4 py-4 space-y-3">
      {/* Author row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-semibold shrink-0"
            style={{ backgroundColor: review.authorColor }}
          >
            {review.authorInitials}
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <p className="text-[13px] font-semibold text-[#4C4D60]">
                {review.authorName}
              </p>
              {review.verified && (
                <span className="flex items-center gap-0.5 text-[11px] text-[#00AB72]">
                  <Check size={11} /> Verified purchase
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#9899A3]">{review.date}</p>
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            className={
              s <= review.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-200 fill-gray-200"
            }
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-[13px] text-[#4C4D60] leading-relaxed">
        {review.text}
      </p>

      {/* Replied box */}
      {review.replied && !showReplyBox && (
        <div className="bg-[#FAFAFF] border border-[#E5E7EB] rounded-xl px-4 py-3 space-y-1">
          <div className="flex items-center gap-2">
            <Reply size={12} className="text-[#9899A3]" />
            <p className="text-[11px] text-[#9899A3]">Your reply · Recent</p>
          </div>
          <p className="text-[13px] text-[#4C4D60]">{review.replyText}</p>
          <div className="flex gap-3 pt-1">
            <button
              onClick={handleEdit}
              className="text-[12px] text-[#5D5FEF] hover:underline"
            >
              Edit reply
            </button>
            <button
              onClick={() => {
                onReplyDelete(review.id);
              }}
              className="text-[12px] text-red-400 hover:underline"
            >
              Delete reply
            </button>
          </div>
        </div>
      )}

      {/* Reply textarea */}
      {showReplyBox && (
        <div className="bg-[#FAFAFF] border border-[#E5E7EB] rounded-xl px-4 py-3 space-y-2">
          <textarea
            value={replyText}
            onChange={(e) => {
              setReplyText(e.target.value);
            }}
            rows={3}
            placeholder="Write your reply..."
            className="w-full text-[13px] text-[#4C4D60] bg-transparent resize-none focus:outline-none"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setShowReplyBox(false);
              }}
              className="px-3 py-1.5 rounded-lg border border-[#E5E7EB] text-[12px] text-[#4C4D60] hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handlePost}
              disabled={!replyText.trim()}
              className="px-3 py-1.5 rounded-lg bg-[#5D5FEF] text-white text-[12px] font-medium hover:bg-[#4B4DD6] transition disabled:opacity-40"
            >
              Post reply
            </button>
          </div>
        </div>
      )}

      {/* Flagged banner */}
      {review.flagged && (
        <div className="flex items-center justify-between gap-2 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
          <div className="flex items-center gap-1.5">
            <Flag size={12} className="text-red-400" />
            <p className="text-[12px] text-red-500">
              Reported to Cadna — under review
            </p>
          </div>
          <button
            onClick={() => {
              onUnflag(review.id);
            }}
            className="text-[12px] text-[#4C4D60] border border-[#E5E7EB] px-2 py-0.5 rounded-lg hover:bg-white transition"
          >
            Undo
          </button>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        {/* Reply button */}
        {!review.replied && !showReplyBox && (
          <button
            onClick={() => {
              setShowReplyBox(true);
            }}
            className="flex items-center gap-1.5 text-[12px] text-[#4C4D60] hover:text-[#5D5FEF] transition"
          >
            <Reply size={13} /> Reply
          </button>
        )}

        {/* Replied badge */}
        {review.replied && !showReplyBox && (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6F8F2] text-[#00AB72] text-[11px] font-medium border border-green-200">
            <Check size={11} /> Replied
          </span>
        )}

        {/* Flag / Flagged */}
        {!review.flagged ? (
          <button
            onClick={() => {
              onFlag(review.id);
            }}
            className="flex items-center gap-1.5 text-[12px] text-[#4C4D60] hover:text-red-500 transition"
          >
            <Flag size={13} /> Flag review
          </button>
        ) : (
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-500 text-[11px] font-medium border border-red-200">
            <Flag size={11} /> Flagged
          </span>
        )}
      </div>
    </div>
  );
}
