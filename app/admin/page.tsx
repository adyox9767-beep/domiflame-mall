"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import AdminRoute from "@/components/AdminRoute";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <AdminRoute>
        <Navbar active="admin" />

        <section className="px-5 py-10 lg:px-16">
          <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#111] p-10 text-white">
            <p className="font-black text-[#ffb300]">DOMIFLAME.MALL</p>

            <h1 className="mt-3 text-5xl font-black">
              Admin <span className="text-[#ffb300]">Control Center</span>
            </h1>

            <p className="mt-3 text-gray-300">
              Manage products, orders, customers, stock, ratings and website controls.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/admin/products" className="rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-black">Products</h3>
              <p className="mt-2 text-[#666]">Add, edit, delete and manage stock</p>
            </Link>

            <Link href="/admin/orders" className="rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-black">Orders</h3>
              <p className="mt-2 text-[#666]">Generate order IDs and update status</p>
            </Link>

            <Link href="/admin/customers" className="rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-black">Customers</h3>
              <p className="mt-2 text-[#666]">View registered users and order history</p>
            </Link>

            <Link href="/admin/ratings" className="rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-black">Ratings</h3>
              <p className="mt-2 text-[#666]">Manage product ratings and reviews</p>
            </Link>

            <Link href="/admin/settings" className="rounded-[24px] bg-white p-6 shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-black">Website Settings</h3>
              <p className="mt-2 text-[#666]">Control website content and important links</p>
            </Link>

            <Link href="/" className="rounded-[24px] bg-[#ffb300] p-6 text-[#111] shadow-lg transition hover:-translate-y-1">
              <h3 className="text-xl font-black">View Website</h3>
              <p className="mt-2 font-semibold">Open public store as admin</p>
            </Link>
          </div>
        </section>
      </AdminRoute>
    </main>
  );
}