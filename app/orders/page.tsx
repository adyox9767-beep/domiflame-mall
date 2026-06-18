"use client";

import Navbar from "@/components/Navbar";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import useAuth from "@/hooks/useAuth";
type Order = {
  id: string;
  orderId: string;
  userId: string;
  userEmail: string;
  total: number;
  status: string;
  createdAt?: any;
  items: any[];
};

export default function OrdersPage() {
  const { user, loading: authLoading } = useAuth();
const [orders, setOrders] = useState<Order[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchOrders() {
    try {
      if (!user) return;

      const q = query(
        collection(db, "orders"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Order[];

      setOrders(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (!authLoading) {
    fetchOrders();
  }
}, [user, authLoading]);
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1000px] rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiPackage />
            </div>

            <div>
              <h1 className="text-4xl font-black">
                My <span className="text-[#ffb300]">Orders</span>
              </h1>
              <p className="text-[#666]">
                Track and manage your orders.
              </p>
            </div>
          </div>

          {loading ? (
  <div className="mt-12 rounded-[24px] border border-dashed border-[#ddd] p-12 text-center">
    <h2 className="text-2xl font-black">Loading Orders...</h2>
  </div>
) : orders.length === 0 ? (
  <div className="mt-12 rounded-[24px] border border-dashed border-[#ddd] p-12 text-center">
    <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
      <FiShoppingBag />
    </div>

    <h2 className="mt-6 text-3xl font-black">No Orders Yet</h2>

    <p className="mt-3 text-[#666]">
      When you place an order, it will appear here.
    </p>

    <Link
      href="/categories"
      className="mt-6 inline-flex rounded-2xl bg-[#ffb300] px-8 py-4 font-black transition hover:bg-[#111] hover:text-white"
    >
      Start Shopping
    </Link>
  </div>
) : (
  <div className="mt-10 space-y-5">
    {orders.map((order) => (
      <div
        key={order.id}
        className="rounded-[24px] border border-[#eee] bg-white p-6 shadow-sm"
      >
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold text-[#666]">Order ID</p>
            <h2 className="text-2xl font-black">{order.orderId}</h2>
            <p className="mt-1 text-sm text-[#666]">
              {order.items?.length || 0} item(s)
            </p>
          </div>

          <div className="text-left md:text-right">
            <p className="text-sm font-bold text-[#666]">Total</p>
            <h3 className="text-3xl font-black text-[#ffb300]">
              ₹{order.total}
            </h3>
            <span className="mt-2 inline-block rounded-full bg-[#fff4d2] px-4 py-1 text-sm font-black text-[#111]">
              {order.status}
            </span>
          </div>
        </div>

        <div className="mt-5 border-t border-[#eee] pt-5">
          {order.items?.map((item: any) => (
            <div key={item.id} className="flex items-center gap-4 py-3">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h4 className="font-black">{item.name}</h4>
                <p className="text-sm text-[#666]">
                  Qty: {item.quantity} • ₹{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)}
        </div>
      </section>
    </main>
  );
}