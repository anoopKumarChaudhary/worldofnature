"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setSelectedProduct } from "../../redux/features/products/productsSlice";
import { addToCart, CartItem } from "../../redux/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { products, selectedProduct } = useSelector(
    (state: RootState) => state.products
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const productId = params.id as string;

  useEffect(() => {
    const product = products.find((p) => p.id === productId);
    dispatch(setSelectedProduct(product || null));
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].value);
    }
  }, [productId, products, dispatch]);

  if (!selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Link href="/shop" className="text-primary-bg hover:text-cta-hover">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.images[0],
      quantity: quantity,
      size: selectedSize,
    };
    dispatch(addToCart(cartItem));
    alert("Added to cart!");
  };

  const averageRating =
    selectedProduct.reviews.length > 0
      ? selectedProduct.reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        ) / selectedProduct.reviews.length
      : 0;

  return (
    <div className="min-h-screen bg-product">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-muted hover:text-text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-border"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-muted hover:text-text-secondary"
                >
                  Shop
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-border"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <span className="text-text-secondary">
                  {selectedProduct.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          {/* Image gallery */}
          <div className="w-full">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <Image
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                width={600}
                height={600}
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            {/* Image thumbnails */}
            {selectedProduct.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4 mt-4">
                {selectedProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? "ring-2 ring-green-500" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${selectedProduct.name} ${index + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-center object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {selectedProduct.name}
            </h1>

            {/* Rating */}
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <svg
                    key={rating}
                    className={`${
                      averageRating > rating ? "text-yellow-400" : "text-border"
                    } h-5 w-5 flex-shrink-0`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="ml-2 text-sm text-muted">
                {averageRating.toFixed(1)} ({selectedProduct.reviews.length}{" "}
                reviews)
              </p>
            </div>

            {/* Price */}
            <div className="mt-4">
              <p className="text-3xl font-bold text-foreground">
                ${selectedProduct.price}
                {selectedProduct.originalPrice && (
                  <span className="ml-2 text-lg text-muted line-through">
                    ${selectedProduct.originalPrice}
                  </span>
                )}
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-text-primary">
                {selectedProduct.description}
              </p>
            </div>

            {/* Size selection */}
            {selectedProduct.sizes.length > 0 && (
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">Size</h3>
                </div>
                <fieldset className="mt-2">
                  <div className="grid grid-cols-3 gap-3">
                    {selectedProduct.sizes.map((size) => (
                      <label
                        key={size.value}
                        className={`relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-card-bg focus:outline-none cursor-pointer ${
                          selectedSize === size.value
                            ? "bg-brand-success/20 border-brand-success text-brand-success"
                            : "border-border text-foreground"
                        }`}
                      >
                        <input
                          type="radio"
                          name="size-choice"
                          value={size.value}
                          checked={selectedSize === size.value}
                          onChange={() => setSelectedSize(size.value)}
                          className="sr-only"
                        />
                        <span>{size.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-foreground">
                  Quantity
                </h3>
              </div>
              <div className="mt-2 flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:bg-card-bg"
                >
                  -
                </button>
                <span className="mx-4 text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex items-center justify-center w-8 h-8 rounded-full border border-border hover:bg-card-bg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedProduct.inStock}
                className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-text ${
                  selectedProduct.inStock
                    ? "bg-primary-bg hover:bg-cta-hover"
                    : "bg-muted cursor-not-allowed"
                }`}
              >
                {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            {/* Product details */}
            <div className="mt-8">
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-medium text-foreground">
                  Ingredients
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {selectedProduct.ingredients}
                </p>
              </div>

              <div className="border-t border-border pt-8 mt-8">
                <h3 className="text-sm font-medium text-foreground">
                  Sourcing
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {selectedProduct.sourcing}
                </p>
              </div>

              <div className="border-t border-border pt-8 mt-8">
                <h3 className="text-sm font-medium text-foreground">
                  Taste Profile
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {selectedProduct.tasteProfile}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {selectedProduct.reviews.map((review) => (
              <div key={review.id} className="border-b border-border pb-6">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className={`${
                          review.rating > rating
                            ? "text-yellow-400"
                            : "text-border"
                        } h-4 w-4 flex-shrink-0`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="ml-2 text-sm text-text-secondary">
                    {review.userName}
                  </p>
                  <p className="ml-2 text-sm text-muted">{review.date}</p>
                </div>
                <p className="mt-2 text-text-primary">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
