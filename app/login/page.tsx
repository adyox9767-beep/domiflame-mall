"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithEmail, loginWithGoogle } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" cartCount={0} />

      <section className="flex min-h-[calc(100vh-96px)] items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-[1100px] overflow-hidden rounded-[36px] bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] lg:grid-cols-2">
          <div className="hidden bg-[#fff4d2] p-12 lg:flex lg:flex-col lg:items-center lg:justify-center">
            <Image src="/logo1.png" alt="DOMIFLAME.MALL" width={260} height={120} />
            <h1 className="mt-8 text-center text-5xl font-black">
              Welcome <span className="text-[#ffb300]">Back</span>
            </h1>
            <p className="mt-4 text-center text-lg text-[#555]">
              Login to continue shopping with DOMIFLAME.MALL.
            </p>
          </div>

          <div className="p-8 lg:p-12">
            <h2 className="text-4xl font-black">Login</h2>
            <p className="mt-2 text-[#555]">Enter your details to access your account.</p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="font-bold">Email Address</label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#ddd] px-4 py-4">
                  <FiMail className="text-xl text-[#ffb300]" />
                  <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full outline-none"
/>
                </div>
              </div>

              <div>
                <label className="font-bold">Password</label>
                <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#ddd] px-4 py-4">
                  <FiLock className="text-xl text-[#ffb300]" />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full outline-none"
                  />
                </div>
              </div>

              <button
  onClick={async () => {
    try {
      setLoading(true);

      await loginWithEmail(email, password);

      router.push("/account");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }}
  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#ffb300] py-4 text-lg font-black transition hover:bg-[#111] hover:text-white"
>
  {loading ? "Please wait..." : "Login"}
  <FiArrowRight />
</button>

<div className="flex items-center gap-4">
  <span className="h-px flex-1 bg-[#ddd]" />
  <span className="text-sm font-bold text-[#777]">OR</span>
  <span className="h-px flex-1 bg-[#ddd]" />
</div>

<button
  type="button"
  onClick={async () => {
    try {
      setLoading(true);

      await loginWithGoogle();

      router.push("/account");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }}
  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#ddd] bg-white py-4 text-lg font-black transition hover:border-[#ffb300] hover:bg-[#fff7dd]"
>
  <span className="text-2xl">G</span>
  Continue with Google
</button>

            </form>

            <p className="mt-6 text-center text-[#555]">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-black text-[#ffb300]">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}