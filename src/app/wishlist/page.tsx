"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import { wishlistAPI } from "../services/api";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";

interface WishlistItem {
  id: string;
  title: string;
  price: string | number;
  imageUrl: string;
  description: string;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false);
      return;
    }

    const fetchWishlist = async () => {
      if (user?.id) {
        try {
          const data = await wishlistAPI.getWishlist(user.id);
          setWishlistItems(data.products || []);
        } catch (error) {
          console.error("Failed to fetch wishlist:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchWishlist();
  }, [isAuthenticated, user, router]);

  const handleRemove = async (productId: string) => {
    if (!user?.id) return;
    try {
      await wishlistAPI.removeFromWishlist(user.id, productId);
      setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
    } catch (error) {
      console.error("Failed to remove from wishlist:", error);
    }
  };

  const handleAddToCart = (product: WishlistItem) => {
    const price =
      typeof product.price === "number"
        ? product.price
        : parseFloat(product.price.replace(/[^0-9.]/g, ""));

    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price,
        image: product.imageUrl,
        quantity: 1,
      })
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EA] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-serif text-[#1A2118] mb-8">My Wishlist</h1>

        {!isAuthenticated ? (
          <div className="text-center py-20">
            <p className="text-xl text-[#596157] mb-6">
              Please login to view your wishlist.
            </p>
            <Link
              href="/login"
              className="inline-block bg-[#1A2118] text-white px-8 py-3 rounded-full hover:bg-[#BC5633] transition-colors"
            >
              Login
            </Link>
          </div>
        ) : wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-[#596157] mb-6">
              Your wishlist is empty.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-[#1A2118] text-white px-8 py-3 rounded-full hover:bg-[#BC5633] transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-[#1A2118] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#BC5633] font-bold mb-4">
                    {typeof item.price === "number"
                      ? `$${item.price.toFixed(2)}`
                      : item.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-3 bg-[#1A2118] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#BC5633] transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
