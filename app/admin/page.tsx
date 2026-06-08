"use client";

import Navbar from "@/components/Navbar";
import AdminRoute from "@/components/AdminRoute";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <AdminRoute>
      <Navbar active="home" cartCount={0} />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1200px] rounded-[32px] bg-[#111] p-10 text-white">
          <p className="font-black text-[#ffb300]">DOMIFLAME.MALL</p>

          <h1 className="mt-3 text-5xl font-black">
            Admin <span className="text-[#ffb300]">Control Center</span>
          </h1>

          <p className="mt-3 text-gray-300">
            Manage products, orders, sellers and customers.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[24px] bg-white p-6 shadow-lg">
            <h3 className="text-xl font-black">Products</h3>
            <p className="mt-2 text-[#666]">Manage all products</p>
          </div>

          <div className="rounded-[24px] bg-white p-6 shadow-lg">
            <h3 className="text-xl font-black">Orders</h3>
            <p className="mt-2 text-[#666]">Manage customer orders</p>
          </div>

          <div className="rounded-[24px] bg-white p-6 shadow-lg">
            <h3 className="text-xl font-black">Customers</h3>
            <p className="mt-2 text-[#666]">View registered users</p>
          </div>

          <div className="rounded-[24px] bg-white p-6 shadow-lg">
            <h3 className="text-xl font-black">Sellers</h3>
            <p className="mt-2 text-[#666]">Manage seller accounts</p>
          </div>
        </div>
      </section>
      </AdminRoute>
    </main>
  );
}