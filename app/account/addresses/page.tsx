import Navbar from "@/components/Navbar";
import { FiMapPin, FiPlus } from "react-icons/fi";

export default function AddressesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" cartCount={0} />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1000px] rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiMapPin />
            </div>

            <div>
              <h1 className="text-4xl font-black">
                Saved <span className="text-[#ffb300]">Addresses</span>
              </h1>
              <p className="text-[#666]">
                Manage delivery locations for faster checkout.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[24px] border border-dashed border-[#ddd] p-12 text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiMapPin />
            </div>

            <h2 className="mt-6 text-3xl font-black">
              No Address Added
            </h2>

            <p className="mt-3 text-[#666]">
              Add an address to make checkout faster and easier.
            </p>

            <button className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-[#ffb300] px-8 py-4 font-black transition hover:bg-[#111] hover:text-white">
              <FiPlus />
              Add Address
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}