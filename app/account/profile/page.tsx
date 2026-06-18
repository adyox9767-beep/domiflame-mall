import Navbar from "@/components/Navbar";
import { FiUser, FiMail, FiPhone, FiEdit3 } from "react-icons/fi";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[900px] rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiUser />
            </div>
            <div>
              <h1 className="text-4xl font-black">My Profile</h1>
              <p className="text-[#666]">Manage your personal information.</p>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <div className="rounded-2xl border border-[#eee] p-5">
              <label className="font-black">Full Name</label>
              <div className="mt-2 flex items-center gap-3 text-[#555]">
                <FiUser className="text-[#ffb300]" /> Not added yet
              </div>
            </div>

            <div className="rounded-2xl border border-[#eee] p-5">
              <label className="font-black">Email Address</label>
              <div className="mt-2 flex items-center gap-3 text-[#555]">
                <FiMail className="text-[#ffb300]" /> Not added yet
              </div>
            </div>

            <div className="rounded-2xl border border-[#eee] p-5">
              <label className="font-black">Phone Number</label>
              <div className="mt-2 flex items-center gap-3 text-[#555]">
                <FiPhone className="text-[#ffb300]" /> Not added yet
              </div>
            </div>
          </div>

          <button className="mt-8 flex items-center gap-3 rounded-2xl bg-[#ffb300] px-8 py-4 font-black transition hover:bg-[#111] hover:text-white">
            <FiEdit3 /> Edit Profile
          </button>
        </div>
      </section>
    </main>
  );
}