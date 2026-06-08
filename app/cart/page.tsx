import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrustBar from "@/components/TrustBar";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" cartCount={0} />

      <section className="px-5 pt-2 pb-6 lg:px-16">
<div className="mx-auto max-w-[980px] rounded-[36px] bg-white px-6 py-0 text-center shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:px-14">          <Image
            src="/logo1.png"
            alt="DOMIFLAME.MALL"
            width={200}
            height={90}
            className="mx-auto -mt-2"
            priority
          />

          <Image
  src="/cart.png"
  alt="Empty Cart"
  width={430}
height={520}
className="mx-auto -mt-6 h-auto w-auto max-w-[430px]"
/>

          <h1 className="-mt-4 text-4xl font-black tracking-[-2px] lg:text-5xl">
            Your cart is <span className="text-[#ffb300]">waiting</span>
          </h1>

          <div className="mx-auto mt-5 flex max-w-[260px] items-center justify-center gap-3">
            <span className="h-[2px] flex-1 bg-[#ffb300]" />
            <span className="text-2xl text-[#ffb300]">🔥</span>
            <span className="h-[2px] flex-1 bg-[#ffb300]" />
          </div>

          <p className="mx-auto mt-4 max-w-[620px] text-lg leading-relaxed text-[#555]">
            Looks like you haven&apos;t added anything yet.
            <br />
            Explore our collection and find something amazing for yourself! 💛
          </p>

          <Link
            href="/categories"
            className="mx-auto mt-5 inline-flex items-center gap-4 rounded-full bg-[#ffb300] px-10 py-1 text-xl font-black text-[#111] shadow-[0_12px_25px_rgba(255,179,0,0.35)] transition hover:bg-[#111] hover:text-white"
          >
            <FiShoppingBag /> Continue Shopping <FiArrowRight />
          </Link>

          <div className="mt-6">
            <TrustBar variant="cart" />
          </div>
        </div>
      </section>
    </main>
  );
}