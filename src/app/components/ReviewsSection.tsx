"use client";

import React, { useState, useEffect } from "react";
import { Star, User } from "lucide-react";
import { reviewsAPI, Review } from "../services/api";

interface ReviewsSectionProps {
  productId: string;
}

export default function ReviewsSection({ productId }: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [submitting, setSubmitting] = useState(false);

  // Mock user ID for now
  // const userId = "user123";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await reviewsAPI.getByProduct(productId);
        setReviews(data);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const review = await reviewsAPI.create({
        productId,
        rating: newReview.rating,
        comment: newReview.comment,
      });
      setReviews((prev) => [review, ...prev]);
      setNewReview({ rating: 5, comment: "" });
      alert("Review submitted!");
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-3xl font-serif text-[#1A2118] mb-8">
        Customer Reviews
      </h2>

      {/* Review Form */}
      <div className="bg-white p-6 rounded-2xl shadow-sm mb-12">
        <h3 className="text-xl font-bold mb-4">Write a Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview({ ...newReview, rating: star })}
                  className={`text-2xl transition-colors ${
                    star <= newReview.rating
                      ? "text-[#BC5633]"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">
              Review
            </label>
            <textarea
              required
              value={newReview.comment}
              onChange={(e) =>
                setNewReview({ ...newReview, comment: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#F2F0EA]/50 border border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-[#BC5633]/20 focus:outline-none transition-all"
              rows={4}
              placeholder="Share your thoughts..."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="px-8 py-3 bg-[#1A2118] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#BC5633] transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      {loading ? (
        <div className="text-center py-8">Loading reviews...</div>
      ) : reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2118]">
                      {review.userName}
                    </p>
                    <p className="text-xs text-gray-400">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="flex text-[#BC5633]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "currentColor" : "none"}
                      className={
                        i < review.rating ? "text-[#BC5633]" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
