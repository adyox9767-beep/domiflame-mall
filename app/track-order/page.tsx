import Navbar from "@/components/Navbar";
import { FiSearch, FiPackage, FiCheckCircle, FiTruck, FiHome } from "react-icons/fi";

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="track" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1000px] rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <h1 className="text-5xl font-black">
            Track <span className="text-[#ffb300]">Order</span>
          </h1>

          <p className="mt-3 text-[#666]">
            Enter your order ID to check delivery status.
          </p>

          <div className="mt-8 flex gap-4">
            <input
              placeholder="Enter Order ID"
              className="w-full rounded-2xl border border-[#ddd] px-5 py-4 outline-none focus:border-[#ffb300]"
            />
            <button className="rounded-2xl bg-[#ffb300] px-8 font-black transition hover:bg-[#111] hover:text-white">
              <FiSearch />
            </button>
          </div>

          <div className="mt-10 rounded-[28px] bg-[#f9f9f9] p-8">
            <h2 className="text-3xl font-black">Order Status</h2>

            <div className="mt-8 space-y-6">
              {[
                ["Order Placed", "Your order has been received", FiCheckCircle],
                ["Packed", "Seller is preparing your package", FiPackage],
                ["Shipped", "Your order is on the way", FiTruck],
                ["Delivered", "Package delivered to your address", FiHome],
              ].map(([title, text, Icon]: any, index) => (
                <div key={title} className="flex gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-[#fff4d2] text-2xl text-[#ffb300]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="text-[#666]">{text}</p>
                    {index < 3 && <div className="mt-4 h-8 w-[2px] bg-[#ffb300]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}