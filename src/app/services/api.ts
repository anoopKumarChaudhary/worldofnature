const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isVerified?: boolean;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  images?: string[];
  videoUrl?: string;
  category: string;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  originalPrice?: number;
  ingredients?: string;
  sourcing?: string;
  tasteProfile?: string;
  sizes?: { value: string; label: string }[];
  inStock?: boolean;
}

export interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size?: string;
}

export interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface OrderData {
  items: OrderItem[];
  shippingInfo: ShippingInfo;
  subtotal: number;
  tax: number;
  shipping: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  items: OrderItem[];
  shippingInfo: ShippingInfo;
  paymentMethod: "COD";
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: "pending" | "confirmed" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
  estimatedDelivery?: string;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export const authAPI = {
  login: async (data: LoginData): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Login failed" }));
      throw new Error(errorData.message || "Login failed");
    }

    return response.json();
  },

  register: async (data: RegisterData): Promise<{ message: string; email: string }> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Registration failed" }));
      throw new Error(errorData.message || "Registration failed");
    }

    return response.json();
  },

  verifyOtp: async (data: { email: string; otp: string }): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Verification failed" }));
      throw new Error(errorData.message || "Verification failed");
    }

    return response.json();
  },

  resendOtp: async (email: string): Promise<{ message: string }> => {
    const response = await fetch(`${API_BASE_URL}/auth/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Failed to resend OTP" }));
      throw new Error(errorData.message || "Failed to resend OTP");
    }

    return response.json();
  },

  getProfile: async (): Promise<User> => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    return response.json();
  },
};

export const productsAPI = {
  getProducts: async (params?: Record<string, unknown>): Promise<Product[]> => {
    const queryString = params
      ? "?" +
        new URLSearchParams(
          Object.entries(params).reduce(
            (acc, [key, value]) => ({ ...acc, [key]: String(value) }),
            {} as Record<string, string>
          )
        ).toString()
      : "";
    const response = await fetch(`${API_BASE_URL}/products${queryString}`, {
      next: { revalidate: 30 },
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  getProduct: async (id: string): Promise<Product> => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      next: { revalidate: 30 },
    });
    if (!response.ok) {
      console.error(
        `Failed to fetch product ${id}: ${response.status} ${response.statusText}`
      );
      throw new Error("Failed to fetch product");
    }
    return response.json();
  },

  getCategories: async (): Promise<string[]> => {
    const response = await fetch(`${API_BASE_URL}/products/categories`, {
      next: { revalidate: 3600 }, // Categories change less often
    });
    if (!response.ok) throw new Error("Failed to fetch categories");
    return response.json();
  },
};

export const ordersAPI = {
  createOrder: async (orderData: OrderData): Promise<Order> => {
    const token = localStorage.getItem("access_token");
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers,
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Order creation failed" }));
      throw new Error(errorData.message || "Order creation failed");
    }

    return response.json();
  },

  getOrder: async (orderId: string): Promise<Order> => {
    const response = await fetch(`${API_BASE_URL}/orders/${orderId}`);

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Order not found" }));
      throw new Error(errorData.message || "Order not found");
    }

    return response.json();
  },

  getOrdersByUser: async (userId: string): Promise<Order[]> => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/orders/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response
        .json()
        .catch(() => ({ message: "Failed to fetch orders" }));
      throw new Error(errorData.message || "Failed to fetch orders");
    }

    return response.json();
  },

  trackOrder: async (orderNumber: string, email: string): Promise<Order> => {
    const response = await fetch(`${API_BASE_URL}/orders/track`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderNumber, email }),
    });

    if (!response.ok) {
      throw new Error("Order not found");
    }

    return response.json();
  },
};

export const contactAPI = {
  sendMessage: async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to send message");
    return response.json();
  },
};

export const newsletterAPI = {
  subscribe: async (email: string) => {
    const response = await fetch(`${API_BASE_URL}/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) throw new Error("Failed to subscribe");
    return response.json();
  },
};

export const wishlistAPI = {
  getWishlist: async (userId: string) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/wishlist/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch wishlist");
    return response.json();
  },
  addToWishlist: async (userId: string, productId: string) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/wishlist/${userId}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId }),
    });
    if (!response.ok) throw new Error("Failed to add to wishlist");
    return response.json();
  },
  removeFromWishlist: async (userId: string, productId: string) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(
      `${API_BASE_URL}/wishlist/${userId}/remove/${productId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) throw new Error("Failed to remove from wishlist");
    return response.json();
  },
};

export const reviewsAPI = {
  create: async (data: {
    productId: string;
    rating: number;
    comment: string;
  }) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to create review");
    const item = await response.json();
    return {
      id: item._id,
      productId: item.product,
      userId: item.user?._id || item.user || '',
      userName: item.user?.firstName ? `${item.user.firstName} ${item.user.lastName}` : 'You',
      rating: item.rating,
      comment: item.comment,
      date: new Date(item.createdAt).toLocaleDateString(),
    };
  },
  getByProduct: async (productId: string) => {
    const response = await fetch(
      `${API_BASE_URL}/reviews/product/${productId}`
    );
    if (!response.ok) throw new Error("Failed to fetch reviews");
    interface RawReview {
      _id: string;
      product: string;
      user?: {
        _id: string;
        firstName: string;
        lastName: string;
      };
      rating: number;
      comment: string;
      createdAt: string;
    }
    const data: RawReview[] = await response.json();
    return data.map((item) => ({
      id: item._id,
      productId: item.product,
      userId: item.user?._id || '',
      userName: item.user ? `${item.user.firstName} ${item.user.lastName}` : 'Anonymous',
      rating: item.rating,
      comment: item.comment,
      date: new Date(item.createdAt).toLocaleDateString(),
    }));
  },
};

export const razorpayAPI = {
  createOrder: async (amount: number) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/razorpay/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount }),
    });
    if (!response.ok) throw new Error("Failed to create Razorpay order");
    return response.json();
  },
  verifyPayment: async (data: {
    orderId: string;
    paymentId: string;
    signature: string;
  }) => {
    const token = localStorage.getItem("access_token");
    const response = await fetch(`${API_BASE_URL}/razorpay/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Payment verification failed");
    return response.json();
  },
};
