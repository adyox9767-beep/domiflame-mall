import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FiCheckCircle, FiPackage, FiTruck } from "react-icons/fi";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[900px] rounded-[32px] bg-white p-10 text-center shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="mx-auto grid h-32 w-32 place-items-center rounded-full bg-green-50 text-7xl text-green-600">
            <FiCheckCircle />
          </div>

          <h1 className="mt-8 text-5xl font-black">
            Order <span className="text-[#ffb300]">Placed Successfully</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[600px] text-lg text-[#666]">
            Thank you for shopping with DOMIFLAME.MALL.
            Your order has been received and is being processed.
          </p>

          <div className="mt-10 rounded-[24px] bg-[#f9f9f9] p-6">
            <p className="text-sm text-[#777]">Order ID</p>
            <h2 className="mt-2 text-3xl font-black">
              DFM-ORD-2026-001
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Link
              href="/orders"
              className="flex items-center justify-center gap-3 rounded-2xl bg-[#ffb300] py-4 text-lg font-black transition hover:bg-[#111] hover:text-white"
            >
              <FiPackage />
              View Orders
            </Link>

            <Link
              href="/track-order"
              className="flex items-center justify-center gap-3 rounded-2xl border border-[#ddd] bg-white py-4 text-lg font-black transition hover:border-[#ffb300] hover:bg-[#fff7dd]"
            >
              <FiTruck />
              Track Order
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}