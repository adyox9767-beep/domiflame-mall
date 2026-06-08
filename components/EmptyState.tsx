import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

type EmptyStateProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  image?: string;
};

export default function EmptyState({
  title,
  description,
  buttonText,
  buttonHref,
  image = "/logo1.png",
}: EmptyStateProps) {
  return (
    <div className="rounded-[36px] border border-[#eee] bg-white px-8 py-16 text-center shadow-[0_12px_45px_rgba(0,0,0,0.06)]">
      <Image
        src={image}
        alt={title}
        width={220}
        height={220}
        className="mx-auto"
      />

      <h1 className="mt-8 text-5xl font-black tracking-[-2px]">
        {title}
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-lg text-[#555]">
        {description}
      </p>

      <PrimaryButton
        href={buttonHref}
        className="mt-8"
      >
        {buttonText}
      </PrimaryButton>
    </div>
  );
}