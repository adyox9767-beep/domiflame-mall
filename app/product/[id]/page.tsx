"use client";

import Navbar from "@/components/Navbar";
import { addToCart } from "@/lib/cart";
import Image from "next/image";
import {
  FiHeart,
  FiShoppingCart,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiStar,
} from "react-icons/fi";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
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

export default function ProductDetailsPage() {
  const params = useParams();
const productId = params.id as string;

const [product, setProduct] = useState<Product | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  async function fetchProduct() {
    try {
      const productRef = doc(db, "products", productId);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct({
          id: productSnap.id,
          ...productSnap.data(),
        } as Product);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  if (productId) {
    fetchProduct();
  }
}, [productId]);

if (loading) {
  return (
    <div className="grid min-h-screen place-items-center">
      <h2 className="text-3xl font-black">Loading Product...</h2>
    </div>
  );
}

if (!product) {
  return (
    <div className="grid min-h-screen place-items-center">
      <h2 className="text-3xl font-black">Product Not Found</h2>
    </div>
  );
}

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-[560px_1fr]">
          <div className="rounded-[32px] bg-white p-6 shadow-lg">
            <div className="grid h-[520px] place-items-center rounded-[24px] bg-[#f1f1f1] overflow-hidden">
  {product.imageUrl ? (
    <Image
      src={product.imageUrl}
      alt={product.name}
      width={600}
      height={600}
      className="h-full w-full object-contain p-6"
    />
  ) : (
    <span className="text-xl font-black text-[#aaa]">
      Product Image Soon
    </span>
  )}
</div>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-lg">
            <p className="font-black text-[#ffb300]">{product.brand}</p>

            <h1 className="mt-3 text-4xl font-black lg:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-[#ffb300]">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <span className="ml-2 text-sm font-bold text-[#555]">
                4.8 • 120 reviews
              </span>
            </div>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-5xl font-black">₹{product.price}</span>
              <span className="text-xl text-[#777] line-through">₹{product.oldPrice}</span>
              <span className="rounded-lg bg-[#ffb300] px-3 py-1 text-sm font-black">
                50% OFF
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-[#555]">
             {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#eee] p-4">
                <FiTruck className="text-3xl text-[#ffb300]" />
                <h3 className="mt-2 font-black">Fast Delivery</h3>
                <p className="text-sm text-[#666]">Quick & reliable</p>
              </div>

              <div className="rounded-2xl border border-[#eee] p-4">
                <FiShield className="text-3xl text-[#ffb300]" />
                <h3 className="mt-2 font-black">Secure</h3>
                <p className="text-sm text-[#666]">Safe shopping</p>
              </div>

              <div className="rounded-2xl border border-[#eee] p-4">
                <FiRefreshCw className="text-3xl text-[#ffb300]" />
                <h3 className="mt-2 font-black">Easy Returns</h3>
                <p className="text-sm text-[#666]">Hassle-free</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
  onClick={() => {
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      oldPrice: product.oldPrice,
      imageUrl: product.imageUrl,
      quantity: 1,
    });

    alert("Added to cart!");
  }}
  className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#ffb300] py-4 text-lg font-black transition hover:bg-[#111] hover:text-white"
>
  <FiShoppingCart /> Add to Cart
</button>

              <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-[#ddd] bg-white py-4 text-lg font-black transition hover:border-[#ffb300] hover:bg-[#fff7dd]">
                <FiHeart /> Wishlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}