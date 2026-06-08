import Navbar from "@/components/Navbar";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const products = Array.from({ length: 8 });

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" cartCount={0} />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1300px]">
          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <h1 className="text-5xl font-black">
              Search <span className="text-[#ffb300]">Products</span>
            </h1>

            <p className="mt-3 text-[#666]">
              Find exactly what you're looking for.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-[#ddd] bg-[#fafafa] px-5 py-4">
              <FiSearch className="text-2xl text-[#ffb300]" />

              <input
                placeholder="Search products..."
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((_, index) => (
              <div
                key={index}
                className="rounded-[28px] bg-white p-4 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative">
                  <div className="grid h-[250px] place-items-center rounded-[20px] bg-[#f1f1f1]">
                    <span className="font-black text-[#aaa]">
                      Product Image
                    </span>
                  </div>

                  <button className="absolute right-3 top-3 rounded-full bg-white p-2 shadow">
                    <FiHeart />
                  </button>
                </div>

                <h3 className="mt-4 text-xl font-black">
                  Product Name
                </h3>

                <p className="mt-2 text-sm text-[#666]">
                  Premium quality product description.
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="text-2xl font-black">₹999</span>
                  <span className="text-[#888] line-through">₹1999</span>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ffb300] py-3 font-black transition hover:bg-[#111] hover:text-white">
                  <FiShoppingCart />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}