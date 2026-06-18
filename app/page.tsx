import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  FiShoppingCart,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiHeadphones,
  FiMonitor,
  FiGift,
  FiTag,
} from "react-icons/fi";
import { PiTShirt, PiArmchair, PiHandbag, PiSneaker } from "react-icons/pi";
import { GiLipstick } from "react-icons/gi";

const categories = [
  { name: "FASHION", icon: PiTShirt },
  { name: "ELECTRONICS", icon: FiMonitor },
  { name: "BEAUTY", icon: GiLipstick },
  { name: "HOME", icon: PiArmchair },
  { name: "ACCESSORIES", icon: PiHandbag },
  { name: "LIFESTYLE", icon: PiSneaker },
  { name: "GIFTS", icon: FiGift },
  { name: "DEALS", icon: FiTag },
];

const features = [
  { title: "Trusted", text: "Quality You Can Rely On", icon: FiShield },
  { title: "Fast Delivery", text: "Quick. Reliable. Every Time.", icon: FiTruck },
  { title: "Premium", text: "Top Brands. Great Value.", icon: FiShield },
];

const bottomFeatures = [
  { title: "100% Authentic", text: "Genuine Products", icon: FiShield },
  { title: "Secure Payments", text: "Shop With Confidence", icon: FiShield },
  { title: "Easy Returns", text: "Hassle-Free Returns", icon: FiRefreshCw },
  { title: "24/7 Support", text: "We're Here to Help", icon: FiHeadphones },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#111]">
      <Navbar active="home" />

      <section className="relative px-8 pb-10 pt-10 lg:px-16 lg:pt-16">

        <div className="relative z-10 grid min-h-[610px] items-center lg:grid-cols-2">
        <div className="max-w-[760px]">
              <h1 className="text-[72px] font-black leading-[0.94] tracking-[-4px] lg:text-[96px]">
              Shop Smart.
              <br />
              <span className="text-[#ffb300]">Live Better.</span>
            </h1>

            <div className="mt-8 h-[6px] w-20 rounded-full bg-[#ffb300]" />

            <p className="mt-8 text-[26px] leading-snug">
              Trusted products. Fast delivery.
              <br />
              Premium shopping, every time.
            </p>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-7">
              {features.map(({ title, text, icon: Icon }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#fff5db] text-2xl text-[#ffb300]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="text-sm text-[#555]">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
  href="/categories"
  className="mt-12 flex w-fit items-center gap-4 rounded-xl bg-[#ffb300] px-9 py-5 text-2xl font-black shadow-xl shadow-yellow-100"
>
  <FiShoppingCart /> Shop Now
</Link>
          </div>

<div className="hidden items-center justify-center lg:flex">
  <div className="rounded-[36px] border border-[#f1f1f1] bg-[#fafafa] px-16 py-20 text-center shadow-sm">
    <Image
      src="/logo.png"
      alt="DOMIFLAME.MALL"
      width={360}
      height={130}
      className="mx-auto opacity-80"
    />
    <p className="mt-6 text-xl font-semibold text-[#777]">
      Premium Banner Coming Soon
    </p>
  </div>
</div>

        </div>

        <div className="relative z-20 mx-auto mt-0 grid max-w-[1500px] grid-cols-2 gap-5 rounded-full bg-white px-10 py-6 shadow-2xl lg:grid-cols-4">
          {bottomFeatures.map(({ title, text, icon: Icon }) => (
            <div key={title} className="flex items-center gap-4 border-r border-gray-300 last:border-r-0">
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