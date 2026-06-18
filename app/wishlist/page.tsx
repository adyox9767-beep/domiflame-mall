import Navbar from "@/components/Navbar";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

export default function WishlistPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1000px] rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiHeart />
            </div>

            <div>
              <h1 className="text-4xl font-black">
                My <span className="text-[#ffb300]">Wishlist</span>
              </h1>
              <p className="text-[#666]">Your favourite products will appear here.</p>
            </div>
          </div>

          <div className="mt-12 rounded-[24px] border border-dashed border-[#ddd] p-12 text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiShoppingBag />
            </div>

            <h2 className="mt-6 text-3xl font-black">Wishlist is Empty</h2>

            <p className="mt-3 text-[#666]">
              Save products you love and find them here later.
            </p>

            <Link
              href="/categories"
              className="mt-6 inline-flex rounded-2xl bg-[#ffb300] px-8 py-4 font-black transition hover:bg-[#111] hover:text-white"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}