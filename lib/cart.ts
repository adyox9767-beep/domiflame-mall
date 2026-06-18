export type CartItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice: number;
  imageUrl: string;
  quantity: number;
};

const CART_KEY = "domiflame_cart";
export const CART_UPDATED_EVENT = "domiflame_cart_updated";

export function getCartItems(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
}

function saveCartItems(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}

export function getCartCount() {
  return getCartItems().reduce((total, item) => total + item.quantity, 0);
}

export function addToCart(item: CartItem) {
  const cart = getCartItems();

  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += item.quantity || 1;
  } else {
    cart.push({
      ...item,
      quantity: item.quantity || 1,
    });
  }

  saveCartItems(cart);
}

export function updateCartQuantity(id: string, quantity: number) {
  const safeQuantity = Math.max(1, quantity);

  const cart = getCartItems().map((item) =>
    item.id === id ? { ...item, quantity: safeQuantity } : item
  );

  saveCartItems(cart);
}

export function removeFromCart(id: string) {
  const cart = getCartItems().filter((item) => item.id !== id);
  saveCartItems(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event(CART_UPDATED_EVENT));
}