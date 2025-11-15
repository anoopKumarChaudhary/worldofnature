// ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./product.module.css"; // Matches your import

// You can place this icon component in a separate file or keep it here
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={styles.cartIcon}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

// Define the props interface for type-safety
interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  originalPrice,
  onAddToCart,
}) => {
  return (
    <div className={styles.card}>
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <Link href={`/product/${id}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className={styles.productImage}
          />
        </Link>
      </div>

      {/* Content Container */}
      <div className={styles.content}>
        <Link href={`/product/${id}`}>
          <h3 className={styles.title}>{title}</h3>
        </Link>
        <p className={styles.description}>{description}</p>

        {/* Footer with Price and Cart Button */}
        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{price}</span>
            {originalPrice && (
              <span className={styles.originalPrice}>{originalPrice}</span>
            )}
          </div>
          <button
            className={styles.cartButton}
            onClick={onAddToCart}
            aria-label="Add to cart"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
