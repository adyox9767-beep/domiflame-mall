"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { logoutUser } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import {
  FiUser,
  FiPackage,
  FiHeart,
  FiMapPin,
  FiSettings,
  FiLogOut,
  FiChevronRight,
} from "react-icons/fi";

const accountItems = [
  { title: "My Profile", text: "Manage your personal details", icon: FiUser, href: "/account/profile" },
  { title: "My Orders", text: "View and track your orders", icon: FiPackage, href: "/orders" },
  { title: "Wishlist", text: "Your saved favourite products", icon: FiHeart, href: "/wishlist" },
  { title: "Saved Addresses", text: "Manage delivery addresses", icon: FiMapPin, href: "/account/addresses" },
  { title: "Account Settings", text: "Password, privacy and preferences", icon: FiSettings, href: "/account/settings" },
];

export default function AccountPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <ProtectedRoute>
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="rounded-[32px] bg-[#111] p-10 text-white">
            <p className="font-black text-[#ffb300]">DOMIFLAME.MALL</p>
            <h1 className="mt-3 text-5xl font-black">
              My <span className="text-[#ffb300]">Account</span>
            </h1>
            <p className="mt-3 text-gray-300">
              Manage your profile, orders, wishlist and account settings.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {accountItems.map(({ title, text, icon: Icon, href }) => (
              <Link
                href={href}
                key={title}
                className="group flex items-center justify-between rounded-[24px] border border-[#eee] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#ffb300] hover:shadow-xl"
              >
                <div className="flex items-center gap-5">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#fff4d2] text-3xl text-[#ffb300]">
                    <Icon />
                  </div>
                  <div>
                    <h2 className="text-xl font-black">{title}</h2>
                    <p className="text-sm text-[#666]">{text}</p>
                  </div>
                </div>
                <FiChevronRight className="text-2xl transition group-hover:text-[#ffb300]" />
              </Link>
            ))}

<button
  onClick={async () => {
    await logoutUser();
    router.push("/login");
  }}
  className="group flex items-center justify-between rounded-[24px] border border-red-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-red-400 hover:shadow-xl"
>              <div className="flex items-center gap-5">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-red-50 text-3xl text-red-500">
                  <FiLogOut />
                </div>
                <div>
                  <h2 className="text-xl font-black">Logout</h2>
                  <p className="text-sm text-[#666]">Sign out from your account</p>
                </div>
              </div>
              <FiChevronRight className="text-2xl text-red-500" />
            </button>
          </div>
        </div>
      </section>
    </ProtectedRoute>
    </main>
  );
}