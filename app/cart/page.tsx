"use client";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import { FiArrowRight, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
  CartItem,
} from "@/lib/cart";
export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useAuth();

useEffect(() => {
  setCartItems(getCartItems());
}, []);

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const whatsappNumber = "919900871329";

const handleRemove = (id: string) => {
  removeFromCart(id);
  setCartItems(getCartItems());
};
const handlePlaceOrder = async () => {
  try {
    if (!user) {
      alert("Please login first");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    await addDoc(collection(db, "orders"), {
      userId: user.uid,
      userEmail: user.email,
      items: cartItems,
      subtotal,
      total: subtotal,
      status: "pending",
      orderId: "",
      orderIdGenerated: false,
      createdAt: serverTimestamp(),
    });

    const itemsText = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - Qty: ${item.quantity} - ₹${item.price}`
      )
      .join("%0A");

    const message =
      `Hello DOMIFLAME.MALL,%0A%0AI want to place this order:%0A%0A${itemsText}%0A%0ATotal: ₹${subtotal}%0A%0AMy email: ${user.email}`;

    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  } catch (error: any) {
    alert(error.message);
  }
};
  return (
  <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
    <Navbar active="home" />

    <section className="px-5 pt-2 pb-6 lg:px-16">
      <div className="mx-auto max-w-[980px] rounded-[36px] bg-white px-6 py-4 text-center shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:px-14">
        {cartItems.length === 0 ? (
          <>
            <Image
              src="/logo1.png"
              alt="DOMIFLAME.MALL"
              width={200}
              height={90}
              className="mx-auto -mt-2"
              priority
            />

            <Image
              src="/cart.png"
              alt="Empty Cart"
              width={430}
              height={520}
              className="mx-auto -mt-6 h-auto w-auto max-w-[430px]"
            />

            <h1 className="-mt-4 text-4xl font-black tracking-[-2px] lg:text-5xl">
              Your cart is <span className="text-[#ffb300]">waiting</span>
            </h1>

            <p className="mx-auto mt-4 max-w-[620px] text-lg leading-relaxed text-[#555]">
              Looks like you haven&apos;t added anything yet.
              <br />
              Explore our collection and find something amazing for yourself! 💛
            </p>

            <Link
              href="/categories"
              className="mx-auto mt-5 inline-flex items-center gap-4 rounded-full bg-[#ffb300] px-10 py-3 text-xl font-black text-[#111] shadow-[0_12px_25px_rgba(255,179,0,0.35)] transition hover:bg-[#111] hover:text-white"
            >
              <FiShoppingBag /> Continue Shopping <FiArrowRight />
            </Link>

            <div className="mt-6">
              <TrustBar variant="cart" />
            </div>
          </>
        ) : (
          <div className="py-6 text-left">
            <h1 className="text-4xl font-black">
              My <span className="text-[#ffb300]">Cart</span>
            </h1>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_350px]">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-[24px] border border-[#eee] bg-white p-4 shadow-sm"
                  >
                    {item.imageUrl ? (
  <img
    src={item.imageUrl}
    alt={item.name}
    className="h-28 w-28 rounded-xl object-cover"
  />
) : (
  <div className="h-28 w-28 rounded-xl bg-gray-100 flex items-center justify-center">
    No Image
  </div>
)}

                    <div className="flex-1">
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <p className="text-sm text-[#666]">{item.brand}</p>
                      <p className="mt-2 text-2xl font-black">₹{item.price}</p>
                      <div className="mt-3 flex w-fit items-center overflow-hidden rounded-xl border border-[#ddd]">
  <button
    onClick={() => {
      updateCartQuantity(item.id, item.quantity - 1);
      setCartItems(getCartItems());
    }}
    className="px-4 py-2 font-black transition hover:bg-[#f5f5f5]"
  >
    -
  </button>

  <span className="px-4 py-2 font-black">{item.quantity}</span>

  <button
    onClick={() => {
      updateCartQuantity(item.id, item.quantity + 1);
      setCartItems(getCartItems());
    }}
    className="px-4 py-2 font-black transition hover:bg-[#f5f5f5]"
  >
    +
  </button>
</div>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="rounded-xl p-3 text-red-500 transition hover:bg-red-50"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                ))}
              </div>

              <div className="h-fit rounded-[24px] bg-[#fafafa] p-6 shadow-lg">
                <h2 className="text-2xl font-black">Order Summary</h2>

                <div className="mt-5 flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-black">₹{subtotal}</span>
                </div>

                <button
  onClick={handlePlaceOrder}
  className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ffb300] py-4 font-black transition hover:bg-[#111] hover:text-white"
>
  Place Order <FiArrowRight />
</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  </main>
);
}