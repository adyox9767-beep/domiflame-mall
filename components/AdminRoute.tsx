"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { isAdminEmail } from "@/lib/admin";

export default function AdminRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    if (!isAdminEmail(user.email)) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-white text-[#111]">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-[#ffb300] border-t-transparent" />
          <p className="mt-4 font-black">Checking admin access...</p>
        </div>
      </div>
    );
  }

  if (!user || !isAdminEmail(user.email)) {
    return null;
  }

  return <>{children}</>;
}