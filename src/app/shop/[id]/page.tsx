"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { productsAPI } from "../../services/api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { ShoppingBag, Heart } from "lucide-react";
import ReviewsSection from "../../components/ReviewsSection";
import { wishlistAPI } from "../../services/api";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number | string;
  imageUrl: string;
  category: string;
  rating?: number;
  reviewCount?: number;
}

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productsAPI.getProduct(id as string);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const price =
      typeof product.price === "number"
        ? product.price
        : parseFloat(product.price.replace(/[^0-9.]/g, ""));

    dispatch(
      addToCart({
        id: product._id,
        name: product.title,
        price,
        image: product.imageUrl,
        quantity: 1,
      })
    );
    alert("Added to cart!");
  };

  const handleAddToWishlist = async () => {
    if (!product) return;
    // Mock user ID
    const userId = "user123";
    try {
      await wishlistAPI.addToWishlist(userId, product._id);
      alert("Added to wishlist!");
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary-900"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32 text-center">Product not found</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EA] pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-[#1A2118] mb-4">
                {product.title}
              </h1>
              <p className="text-2xl font-bold text-[#BC5633]">
                {typeof product.price === "number"
                  ? `$${product.price.toFixed(2)}`
                  : product.price}
              </p>
            </div>

            <p className="text-lg text-[#596157] leading-relaxed">
              {product.description}
            </p>

            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-[#1A2118] text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-[#BC5633] transition-colors flex items-center justify-center gap-3"
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center text-[#1A2118] hover:text-[#BC5633] hover:border-[#BC5633] transition-colors"
              >
                <Heart size={24} />
              </button>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-xs font-bold mb-1">
                    Category
                  </span>
                  <span className="font-medium text-[#1A2118]">
                    {product.category}
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 uppercase tracking-widest text-xs font-bold mb-1">
                    Rating
                  </span>
                  <span className="font-medium text-[#1A2118]">
                    {product.rating || 0} / 5 ({product.reviewCount || 0}{" "}
                    reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection productId={product._id} />

        {/* Related Products */}
        <RelatedProducts currentProductId={product._id} />
      </div>
    </div>
  );
}

const RelatedProducts = ({ currentProductId }: { currentProductId: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        const allProducts = await productsAPI.getProducts();
        // Filter out current product and take first 3
        const related = allProducts
          .filter((p) => p._id !== currentProductId)
          .slice(0, 3);
        setProducts(related);
      } catch (error) {
        console.error("Failed to fetch related products", error);
      }
    };
    fetchRelated();
  }, [currentProductId]);

  if (products.length === 0) return null;

  return (
    <div className="mt-24 border-t border-[#1A2118]/10 pt-16">
      <h2 className="text-3xl font-serif text-[#1A2118] mb-12 text-center">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product._id} className="h-full">
             {/* We need to import ProductCard. Since we can't easily add imports to the top with replace_file_content in this chunk, 
                 I will assume I need to add the import in a separate step or use a dynamic import if I was lazy, 
                 but I should do it properly. For now, I'll just render a simplified card or I will add the import in the next step.
                 Actually, I can't use ProductCard here without importing it. 
                 I will add the import in a separate step.
             */}
             <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F9F8F6]">
                  <img 
                    src={product.imageUrl} 
                    alt={product.title} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[#1A2118] mb-2">{product.title}</h3>
                  <p className="text-[#BC5633] font-bold">${typeof product.price === 'number' ? product.price : product.price}</p>
                  <a href={`/product/${product._id}`} className="mt-4 block w-full py-3 border border-[#1A2118]/10 rounded-full text-center text-xs font-bold uppercase tracking-widest hover:bg-[#1A2118] hover:text-white transition-colors">
                    View Product
                  </a>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
