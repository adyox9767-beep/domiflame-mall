import Navbar from "@/components/Navbar";
import {
  FiSettings,
  FiLock,
  FiBell,
  FiShield,
  FiChevronRight,
} from "react-icons/fi";

const settings = [
  { title: "Change Password", text: "Update your account password", icon: FiLock },
  { title: "Notifications", text: "Manage offers and order alerts", icon: FiBell },
  { title: "Privacy & Security", text: "Control your account security", icon: FiShield },
];

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#111]">
      <Navbar active="home" cartCount={0} />

      <section className="px-5 py-10 lg:px-16">
        <div className="mx-auto max-w-[1000px] rounded-[32px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-5">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-[#fff4d2] text-5xl text-[#ffb300]">
              <FiSettings />
            </div>

            <div>
              <h1 className="text-4xl font-black">
                Account <span className="text-[#ffb300]">Settings</span>
              </h1>
              <p className="text-[#666]">
                Manage password, notifications and account security.
              </p>
            </div>
          </div>

          <div className="mt-10 space-y-5">
            {settings.map(({ title, text, icon: Icon }) => (
              <button
                key={title}
                className="group flex w-full items-center justify-between rounded-[24px] border border-[#eee] bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#ffb300] hover:shadow-xl"
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
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}