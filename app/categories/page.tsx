"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiMonitor,
  FiGift,
  FiTag,
  FiChevronRight,
} from "react-icons/fi";
import { PiTShirt, PiArmchair, PiHandbag, PiSneaker } from "react-icons/pi";
import { GiLipstick } from "react-icons/gi";

const categories = [
  { name: "FASHION", firestoreName: "Fashion", icon: PiTShirt },
  { name: "ELECTRONICS", firestoreName: "Electronics", icon: FiMonitor },
  { name: "BEAUTY", firestoreName: "Beauty", icon: GiLipstick },
  { name: "HOME", firestoreName: "Home", icon: PiArmchair },
  { name: "ACCESSORIES", firestoreName: "Accessories", icon: PiHandbag },
  { name: "LIFESTYLE", firestoreName: "Lifestyle", icon: PiSneaker },
  { name: "GIFTS", firestoreName: "Gifts", icon: FiGift },
  { name: "DEALS", firestoreName: "Deals", icon: FiTag },
];
const benefits = [
  { title: "100% Authentic", text: "Genuine Products", icon: FiShield },
  { title: "Secure Payments", text: "Shop With Confidence", icon: FiShield },
  { title: "Easy Returns", text: "Hassle-Free Returns", icon: FiRefreshCw },
  { title: "24/7 Support", text: "We're Here to Help", icon: FiHeadphones },
];

export default function CategoriesPage() {
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  useEffect(() => {
  async function loadCounts() {
    try {
      const snapshot = await getDocs(collection(db, "products"));

      const counts: Record<string, number> = {};

      snapshot.forEach((doc) => {
        const data = doc.data();

        if (data.category) {
          counts[data.category] = (counts[data.category] || 0) + 1;
        }
      });

      setCategoryCounts(counts);
    } catch (error) {
      console.log(error);
    }
  }

  loadCounts();
}, []);
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <Navbar active="categories" />
      <section className="px-8 py-10 lg:px-16">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#555]">
            <Link href="/">Home</Link>
            <span>&gt;</span>
            <span className="text-[#ffb300]">Categories</span>
          </div>

          <h1 className="text-5xl font-black tracking-[-2px] lg:text-6xl">
            All <span className="text-[#ffb300]">Categories</span>
          </h1>

          <p className="mt-3 text-lg text-[#444]">
            Explore top categories and find exactly what you&apos;re looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
{categories.map(({ name, firestoreName, icon: Icon }) => (            <div
              key={name}
              className="group rounded-[22px] border border-[#eeeeee] bg-white p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb300] hover:shadow-[0_18px_45px_rgba(255,179,0,0.22)]"
            >
              <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-[4px] border-[#111] bg-white text-6xl text-[#111] transition-all duration-300 group-hover:border-[#ffb300] group-hover:text-[#ffb300]">
                <Icon />
              </div>

              <h2 className="mt-6 text-2xl font-black">{name}</h2>
              <p className="mt-2 text-sm font-medium text-[#555]">
  {categoryCounts[firestoreName] || 0} Products
</p>

              <Link
  href={`/categories/${name.toLowerCase()}`}
  className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-lg bg-[#ffb300] px-6 py-3 text-sm font-black text-[#111] transition-all duration-300 group-hover:bg-[#111] group-hover:text-white"
>
  Shop Now <FiChevronRight />
</Link>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-[1500px] grid-cols-1 gap-5 rounded-full bg-white px-10 py-6 shadow-2xl md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="flex items-center gap-4 border-[#ddd] lg:border-r lg:last:border-r-0"
            >
              <Icon className="text-4xl" />
              <div>
                <h4 className="font-black">{title}</h4>
                <p className="text-sm text-[#666]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}