"use client";

import { useEffect, useState } from "react";
import { CART_UPDATED_EVENT, getCartCount } from "@/lib/cart";

export default function useCartCount() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCartCount(getCartCount());
    };

    updateCount();

    window.addEventListener(CART_UPDATED_EVENT, updateCount);
    window.addEventListener("storage", updateCount);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return cartCount;
}