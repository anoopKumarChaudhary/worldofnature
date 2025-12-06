import { productsAPI, reviewsAPI } from "../../services/api";
import ProductClient from "./ProductClient";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = id;
  let product = null;
  let reviews = [];

  try {
    product = await productsAPI.getProduct(productId);
    reviews = await reviewsAPI.getByProduct(productId);
  } catch (error) {
    console.error("Failed to fetch product data:", error);
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F2F0EA] flex items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ShoppingCart className="w-10 h-10 text-[#1A2118]/20" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
            Product Not Found
          </h1>
          <p className="text-[#596157] mb-8">
            The item you are looking for has been moved or harvested.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2118] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return <ProductClient product={product} reviews={reviews} />;
}
