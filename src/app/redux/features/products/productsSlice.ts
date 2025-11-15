import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  ingredients: string;
  sourcing: string;
  tasteProfile: string;
  sizes: { value: string; label: string }[];
  category: string;
  inStock: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ProductsState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [
    {
      id: "1",
      name: "Organic Green Tea",
      price: 24.99,
      originalPrice: 29.99,
      images: ["/won3.png", "/wonh1.JPG", "/wonh2.jpeg"],
      description:
        "Premium organic green tea sourced from sustainable farms in Japan. Known for its delicate flavor and numerous health benefits.",
      ingredients: "100% Organic Green Tea Leaves",
      sourcing: "Sourced from certified organic farms in Kyoto, Japan",
      tasteProfile: "Light, grassy notes with a fresh, clean finish",
      sizes: [
        { value: "250g", label: "250g" },
        { value: "500g", label: "500g" },
        { value: "1kg", label: "1kg" },
      ],
      category: "Tea",
      inStock: true,
      reviews: [
        {
          id: "1",
          userName: "Sarah M.",
          rating: 5,
          comment:
            "Absolutely love this tea! The flavor is so pure and refreshing.",
          date: "2024-01-15",
        },
        {
          id: "2",
          userName: "John D.",
          rating: 4,
          comment: "Great quality tea. Will definitely order again.",
          date: "2024-01-10",
        },
      ],
    },
    {
      id: "2",
      name: "Wild Forest Honey",
      price: 18.99,
      images: ["/wonf1.JPG", "/wonh4.jpeg", "/wonh5.jpeg"],
      description:
        "Raw, unfiltered honey harvested from wild forest bees. Rich in natural enzymes and antioxidants.",
      ingredients: "100% Pure Wild Forest Honey",
      sourcing: "Collected from pristine forests in the Himalayas",
      tasteProfile: "Deep, complex sweetness with floral undertones",
      sizes: [
        { value: "250g", label: "250g" },
        { value: "500g", label: "500g" },
      ],
      category: "Honey",
      inStock: true,
      reviews: [
        {
          id: "3",
          userName: "Emma L.",
          rating: 5,
          comment: "The best honey I've ever tasted! So pure and flavorful.",
          date: "2024-01-20",
        },
      ],
    },
  ],
  selectedProduct: null,
  loading: false,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSelectedProduct, setLoading, setError } =
  productsSlice.actions;
export default productsSlice.reducer;
