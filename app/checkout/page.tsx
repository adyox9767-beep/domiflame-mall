"use client";

import Navbar from "@/components/Navbar";
import {
  FiMapPin,
  FiCreditCard,
  FiTruck,
  FiShield,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getCartItems, clearCart, CartItem } from "@/lib/cart";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import useAuth from "@/hooks/useAuth";

export default function CheckoutPage() {
  const router = useRouter();
  const { user } = useAuth();

const [cartItems, setCartItems] = useState<CartItem[]>([]);

useEffect(() => {
  setCartItems(getCartItems());
}, []);

const subtotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

const delivery = 0;
const discount = 0;
const total = subtotal + delivery - discount;
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="rounded-[32px] bg-[#111] p-10 text-white">
            <p className="font-black text-[#ffb300]">DOMIFLAME.MALL</p>
            <h1 className="mt-3 text-5xl font-black">
              Secure <span className="text-[#ffb300]">Checkout</span>
            </h1>
            <p className="mt-3 text-gray-300">
              Complete your purchase safely and securely.
            </p>
          </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_420px]">
            {/* Left Side */}
            <div className="space-y-6">
              <div className="rounded-[28px] bg-white p-8 shadow-lg">
                <div className="mb-5 flex items-center gap-3">
                  <FiMapPin className="text-3xl text-[#ffb300]" />
                  <h2 className="text-3xl font-black">Delivery Address</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    placeholder="Full Name"
                    className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                  />

                  <input
                    placeholder="Phone Number"
                    className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                  />

                  <input
                    placeholder="City"
                    className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                  />

                  <input
                    placeholder="State"
                    className="rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                  />
                </div>

                <textarea
                  rows={4}
                  placeholder="Full Address"
                  className="mt-4 w-full rounded-2xl border border-[#ddd] px-4 py-4 outline-none focus:border-[#ffb300]"
                />
              </div>

              <div className="rounded-[28px] bg-white p-8 shadow-lg">
                <div className="mb-5 flex items-center gap-3">
                  <FiCreditCard className="text-3xl text-[#ffb300]" />
                  <h2 className="text-3xl font-black">Payment Method</h2>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 rounded-2xl border border-[#ddd] p-4">
                    <input type="radio" name="payment" />
                    Cash on Delivery (COD)
                  </label>

                  <label className="flex items-center gap-3 rounded-2xl border border-[#ddd] p-4">
                    <input type="radio" name="payment" />
                    UPI Payment
                  </label>

                  <label className="flex items-center gap-3 rounded-2xl border border-[#ddd] p-4">
                    <input type="radio" name="payment" />
                    Credit / Debit Card
                  </label>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="rounded-[28px] bg-white p-8 shadow-lg">
              <h2 className="text-3xl font-black">Order Summary</h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
<span className="font-black">₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="font-black text-green-600">FREE</span>
                </div>

                <div className="flex justify-between">
                  <span className="font-black text-[#ffb300]">
  ₹{discount}
</span>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-2xl">
                    <span className="font-black">Total</span>
                    <span className="font-black text-[#ffb300]">
  ₹{total}
</span>
                  </div>
                </div>
              </div>

              <button
  onClick={async () => {
  try {
    if (!user) {
      alert("Please login first");
      return;
    }

    const orderId = `DFM-${Date.now()}`;

    await addDoc(collection(db, "orders"), {
      orderId,
      userId: user.uid,
      userEmail: user.email,
      items: cartItems,
      subtotal,
      total,
      status: "placed",
      createdAt: serverTimestamp(),
    });

    clearCart();

    router.push(`/order-success?orderId=${orderId}`);
  } catch (error: any) {
    alert(error.message);
  }
}}
  className="mt-8 w-full rounded-2xl bg-[#ffb300] py-4 text-lg font-black transition hover:bg-[#111] hover:text-white"
>
  Place Order
</button>

              <div className="mt-8 space-y-4 border-t pt-6">
                <div className="flex items-center gap-3">
                  <FiTruck className="text-[#ffb300]" />
                  Fast Delivery
                </div>

                <div className="flex items-center gap-3">
                  <FiShield className="text-[#ffb300]" />
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}