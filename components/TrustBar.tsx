import {
  FiShield,
  FiAward,
  FiHeadphones,
  FiRefreshCw,
} from "react-icons/fi";

type TrustBarProps = {
  variant?: "default" | "cart";
};

export default function TrustBar({ variant = "default" }: TrustBarProps) {
  const items =
    variant === "cart"
      ? [
          { title: "Secure Shopping", text: "Your data is protected", icon: FiShield },
          { title: "Premium Quality", text: "Only the best for you", icon: FiAward },
          { title: "Customer Support", text: "We're here to help", icon: FiHeadphones },
        ]
      : [
          { title: "100% Authentic", text: "Genuine Products", icon: FiShield },
          { title: "Secure Payments", text: "Shop With Confidence", icon: FiShield },
          { title: "Easy Returns", text: "Hassle-Free Returns", icon: FiRefreshCw },
          { title: "24/7 Support", text: "We're Here to Help", icon: FiHeadphones },
        ];

  return (
    <div
      className={`mx-auto grid gap-5 bg-white px-8 py-6 shadow-2xl ${
        variant === "cart"
          ? "grid-cols-1 rounded-3xl md:grid-cols-3"
          : "max-w-[1500px] grid-cols-1 rounded-full md:grid-cols-2 lg:grid-cols-4"
      }`}
    >
      {items.map(({ title, text, icon: Icon }) => (
        <div
          key={title}
          className="flex items-center justify-center gap-4 border-[#ddd] lg:border-r lg:last:border-r-0"
        >
          <Icon className="text-4xl text-[#ffb300]" />
          <div>
            <h4 className="font-black">{title}</h4>
            <p className="text-sm text-[#666]">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}