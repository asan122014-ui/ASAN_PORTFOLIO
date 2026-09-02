import { ArrowLeft, ArrowRight, CarFront, ShieldCheck, UsersRound } from "lucide-react";
import Footer from "./components/Footer";

const choices = [
  {
    title: "I'm a Parent",
    description: "Tell us about your child's school route and the transport you need.",
    href: "/find-driver",
    action: "Parent enquiry",
    icon: UsersRound,
    points: ["Share your school and area", "Choose auto or van", "Get help from our team"],
  },
  {
    title: "I'm a Driver",
    description: "Register your details and vehicle to join the ASAN RIDES network.",
    href: "/join-driver",
    action: "Driver registration",
    icon: CarFront,
    points: ["Create your driver profile", "Add your vehicle details", "Learn the onboarding steps"],
  },
];

function GetStarted() {
  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#000000]">
      <header className="border-b border-[#D8D2C8] bg-[#FFFEFB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center">
            <img src="/images/asanrides-logo.png" alt="ASAN RIDES" className="h-12 w-auto object-contain" />
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-xs font-bold text-black/55 transition hover:text-[#000000]">
            <ArrowLeft size={16} /> Back to home
          </a>
        </div>
      </header>

      <main className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]">
              <ShieldCheck size={24} />
            </div>
            <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#C96A00]">Get started</p>
            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">How can we help you?</h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/55">Choose the option that best describes you. We’ll take you directly to the right form.</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {choices.map(({ title, description, href, action, icon: Icon, points }) => (
              <a key={title} href={href} className="group flex flex-col rounded-[28px] border border-[#D8D2C8] bg-[#FFFEFB] p-7 transition-all hover:-translate-y-1 hover:border-[#FFC65C] hover:shadow-[0_18px_45px_rgba(80,60,0,0.09)] sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC65C] text-[#000000] transition-transform group-hover:scale-105">
                  <Icon size={27} />
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-[-0.03em]">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/55">{description}</p>
                <ul className="mt-6 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-xs font-bold text-black/65">
                      <span className="h-2 w-2 rounded-full bg-[#C96A00]" /> {point}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#000000] px-6 py-3.5 text-sm font-extrabold text-white transition group-hover:bg-[#C96A00]">
                  {action} <ArrowRight size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default GetStarted;



