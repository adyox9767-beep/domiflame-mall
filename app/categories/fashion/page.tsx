"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  FiHeart,
  FiStar,
  FiSliders,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

 type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice: number;
  stock: number;
  description: string;
  imageUrl: string;
};

export default function FashionPage() {
  const [products, setProducts] = useState<Product[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchProducts() {
    try {
      const q = query(
        collection(db, "products"),
        where("category", "==", "Fashion")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  fetchProducts();
}, []);
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <Navbar active="categories" />

      <section className="px-8 py-10 lg:px-16">
        <div className="rounded-[32px] bg-[#111] px-10 py-12 text-white">
          <p className="text-lg font-bold text-[#ffb300]">DOMIFLAME.MALL</p>
          <h1 className="mt-3 text-5xl font-black lg:text-7xl">
            Fashion <span className="text-[#ffb300]">Collection</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Premium fashion products, latest trends, and best deals in one place.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[24px] border border-[#eee] p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-2 text-xl font-black">
              <FiSliders /> Filters
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="font-black">Price</h3>
                <div className="mt-3 space-y-2 text-sm text-[#555]">
                  <p>Under ₹500</p>
                  <p>₹500 - ₹1000</p>
                  <p>₹1000 - ₹2000</p>
                  <p>Above ₹2000</p>
                </div>
              </div>

              <div>
                <h3 className="font-black">Brand</h3>
                <div className="mt-3 space-y-2 text-sm text-[#555]">
                  <p>DOMIFLAME</p>
                  <p>Premium</p>
                  <p>Trending</p>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-3xl font-black">Fashion Products</h2>
              <select className="rounded-lg border border-[#ddd] px-4 py-3 font-semibold">
                <option>Sort by: Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
               {loading ? (
  <div className="col-span-full py-20 text-center">
    <h2 className="text-2xl font-black">Loading Products...</h2>
  </div>
) : products.length === 0 ? (
  <div className="col-span-full py-20 text-center">
    <h2 className="text-2xl font-black">No Products Found</h2>
    <p className="mt-2 text-[#666]">
      Add Fashion category products from admin panel.
    </p>
  </div>
) : (
  products.map((item) => (
                <Link
  href={`/product/${item.id}`}
  key={item.id}
  className="group rounded-[24px] border border-[#eee] bg-white p-4 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb300] hover:shadow-[0_18px_45px_rgba(255,179,0,0.22)]"
>
                  <div className="relative grid h-64 place-items-center rounded-[18px] bg-[#f5f5f5]">
                   <span className="absolute left-3 top-3 rounded-lg bg-[#ffb300] px-3 py-1 text-xs font-black">
  SALE
</span>
                    <FiHeart className="absolute right-4 top-4 text-2xl" />
{item.imageUrl ? (
  <Image
    src={item.imageUrl}
    alt={item.name}
    width={300}
    height={300}
    className="h-full w-full object-contain p-4"
  />
) : (
  <span className="text-lg font-bold text-[#aaa]">Image Soon</span>
)}             
</div>

                  <h3 className="mt-4 text-xl font-black">{item.name}</h3>

<p className="mt-2 line-clamp-2 text-sm text-[#666]">
  {item.description}
</p>

                  <div className="mt-2 flex items-center gap-1 text-[#ffb300]">
                    <FiStar /> <FiStar /> <FiStar /> <FiStar />
                    <span className="ml-1 text-sm text-[#555]">(4.5)</span>
                  </div>

                  <div className="mt-3 flex items-end gap-2">
  <span className="text-2xl font-black">₹{item.price}</span>
  <span className="text-sm text-[#777] line-through">₹{item.oldPrice}</span>
</div>

                  <button className="mt-4 w-full rounded-xl bg-[#ffb300] py-3 font-black transition hover:bg-[#111] hover:text-white">
                    Add to Cart
                  </button>
                </Link>
              ))
            )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}