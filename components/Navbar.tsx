"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiUser, FiShoppingCart, FiShield } from "react-icons/fi";
import useAuth from "@/hooks/useAuth";
import useCartCount from "@/hooks/useCartCount";
import { isAdminEmail } from "@/lib/admin";

type NavbarProps = {
  active?: "home" | "categories" | "track" | "help" | "admin";
};

export default function Navbar({ active = "home" }: NavbarProps) {
  const { user } = useAuth();
  const cartCount = useCartCount();
  const isAdmin = isAdminEmail(user?.email);

  const navClass = (key: NavbarProps["active"]) =>
    active === key
      ? "border-b-2 border-[#ffb300] pb-2 text-[#ffb300]"
      : "pb-2 transition hover:text-[#ffb300]";

  return (
    <header className="flex h-[96px] items-center justify-between border-b border-[#eee] bg-white px-8 lg:px-16">
      <Link href="/" aria-label="Go to DOMIFLAME.MALL home">
        <Image
          src="/logo.png"
          alt="DOMIFLAME.MALL"
          width={260}
          height={85}
          priority
        />
      </Link>

      <nav className="hidden items-center gap-10 text-[15px] font-semibold lg:flex">
        <Link href="/" className={navClass("home")}>
          Home
        </Link>

        <Link href="/categories" className={navClass("categories")}>
          Categories
        </Link>

        <Link href="/track-order" className={navClass("track")}>
          Track Order
        </Link>

        <Link href="/help" className={navClass("help")}>
          Help
        </Link>

        {isAdmin && (
          <Link href="/admin" className={navClass("admin")}>
            Admin Panel
          </Link>
        )}
      </nav>

      <div className="flex items-center gap-7 text-3xl">
        <FiSearch className="cursor-pointer transition hover:text-[#ffb300]" />

        <Link
          href={user ? "/account" : "/login"}
          className="transition hover:text-[#ffb300]"
        >
          <FiUser />
        </Link>

        {isAdmin && (
          <Link
            href="/admin"
            className="transition hover:text-[#ffb300]"
            title="Admin Panel"
          >
            <FiShield />
          </Link>
        )}

        <Link href="/cart" className="relative transition hover:text-[#ffb300]">
          <FiShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 grid h-6 min-w-6 place-items-center rounded-full bg-[#ffb300] px-1 text-xs font-black text-[#111]">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}