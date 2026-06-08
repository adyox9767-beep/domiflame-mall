import Image from "next/image";
import Link from "next/link";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
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
  { name: "FASHION", count: "1200+ Products", icon: PiTShirt },
  { name: "ELECTRONICS", count: "950+ Products", icon: FiMonitor },
  { name: "BEAUTY", count: "650+ Products", icon: GiLipstick },
  { name: "HOME", count: "800+ Products", icon: PiArmchair },
  { name: "ACCESSORIES", count: "700+ Products", icon: PiHandbag },
  { name: "LIFESTYLE", count: "500+ Products", icon: PiSneaker },
  { name: "GIFTS", count: "400+ Products", icon: FiGift },
  { name: "DEALS", count: "300+ Products", icon: FiTag },
];

const benefits = [
  { title: "100% Authentic", text: "Genuine Products", icon: FiShield },
  { title: "Secure Payments", text: "Shop With Confidence", icon: FiShield },
  { title: "Easy Returns", text: "Hassle-Free Returns", icon: FiRefreshCw },
  { title: "24/7 Support", text: "We're Here to Help", icon: FiHeadphones },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <header className="flex h-[96px] items-center justify-between border-b border-[#eee] px-8 lg:px-16">
        <Link href="/">
          <Image src="/logo.png" alt="DOMIFLAME.MALL" width={260} height={85} priority />
        </Link>

        <nav className="hidden items-center gap-10 text-[15px] font-semibold lg:flex">
  <Link
    href="/"
    className="border-b-2 border-[#ffb300] pb-2 text-[#ffb300]"
  >
    Home
  </Link>

  <Link href="/categories">Categories</Link>

  <span>Deals</span>
  <span>New Arrivals</span>
  <span>Track Order</span>
  <span>Help</span>
</nav>

        <div className="flex items-center gap-7 text-3xl">
          <FiSearch />
          <FiUser />
          <div className="relative">
            <FiShoppingCart />
            <span className="absolute -right-3 -top-3 grid h-6 w-6 place-items-center rounded-full bg-[#ffb300] text-xs font-black">
              3
            </span>
          </div>
        </div>
      </header>

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
          {categories.map(({ name, count, icon: Icon }) => (
            <div
              key={name}
              className="group rounded-[22px] border border-[#eeeeee] bg-white p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-[#ffb300] hover:shadow-[0_18px_45px_rgba(255,179,0,0.22)]"
            >
              <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border-[4px] border-[#111] bg-white text-6xl text-[#111] transition-all duration-300 group-hover:border-[#ffb300] group-hover:text-[#ffb300]">
                <Icon />
              </div>

              <h2 className="mt-6 text-2xl font-black">{name}</h2>
              <p className="mt-2 text-sm font-medium text-[#555]">{count}</p>

              <button className="mx-auto mt-5 flex items-center gap-2 rounded-lg bg-[#ffb300] px-6 py-3 text-sm font-black text-[#111] transition-all duration-300 group-hover:bg-[#111] group-hover:text-white">
                Shop Now <FiChevronRight />
              </button>
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