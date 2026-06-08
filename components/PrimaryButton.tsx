import Link from "next/link";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export default function PrimaryButton({
  children,
  href,
  className = "",
}: PrimaryButtonProps) {
  const styles =
    "inline-flex items-center justify-center rounded-2xl bg-[#ffb300] px-8 py-4 font-black text-[#111] transition-all duration-300 hover:bg-[#111] hover:text-white";

  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles} ${className}`}>
      {children}
    </button>
  );
}