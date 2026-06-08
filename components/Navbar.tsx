import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";

type NavbarProps = {
  active?: "home" | "categories" | "deals" | "new" | "track" | "help";
  cartCount?: number;
};

export default function Navbar({ active = "home", cartCount = 0 }: NavbarProps) {
  const navClass = (key: NavbarProps["active"]) =>
    active === key
      ? "border-b-2 border-[#ffb300] pb-2 text-[#ffb300]"
      : "pb-2 transition hover:text-[#ffb300]";

  return (
    <header className="flex h-[96px] items-center justify-between border-b border-[#eee] bg-white px-8 lg:px-16">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="DOMIFLAME.MALL"
          width={260}
          height={85}
          priority
        />
      </Link>

      <nav className="hidden items-center gap-10 text-[15px] font-semibold lg:flex">
        <Link href="/" className={navClass("home")}>Home</Link>
        <Link href="/categories" className={navClass("categories")}>Categories</Link>
        <Link href="/deals" className={navClass("deals")}>Deals</Link>
        <Link href="/new-arrivals" className={navClass("new")}>New Arrivals</Link>
        <Link href="/track-order" className={navClass("track")}>Track Order</Link>
        <Link href="/help" className={navClass("help")}>Help</Link>
      </nav>

      <div className="flex items-center gap-7 text-3xl">
        <FiSearch className="cursor-pointer transition hover:text-[#ffb300]" />
        <FiUser className="cursor-pointer transition hover:text-[#ffb300]" />

        <Link href="/cart" className="relative transition hover:text-[#ffb300]">
          <FiShoppingCart />
          <span className="absolute -right-3 -top-3 grid h-6 w-6 place-items-center rounded-full bg-[#ffb300] text-xs font-black text-[#111]">
            {cartCount}
          </span>
        </Link>
      </div>
    </header>
  );
}