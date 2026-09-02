import { ArrowRight, Bell, CheckCircle2, Clock3, MapPin, Navigation, ShieldCheck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Verified drivers" },
  { icon: MapPin, label: "Ride visibility" },
  { icon: Bell, label: "Timely alerts" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9EF] px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#FFF0C5] blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#FFC65C]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D2C8] bg-[#FFFEFB] px-3.5 py-2 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFC65C] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C96A00]" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C96A00]">School transport, made simple</span>
          </div>

          <h1 className="mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-black sm:text-[56px] lg:text-[68px]">
            Every school ride,
            <span className="block text-[#C96A00]">with more clarity.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#8D8982] sm:text-lg">
            A safer, more transparent way for parents to find trusted auto and van drivers—and stay informed throughout the daily commute.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="/get-started" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC65C] px-7 py-4 text-sm font-extrabold text-black shadow-[0_10px_30px_rgba(255,198,92,0.25)] transition-all hover:-translate-y-1 hover:bg-[#C96A00] hover:text-white hover:shadow-[0_14px_34px_rgba(201,106,0,0.25)]">
              Get started <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-[#D8D2C8] bg-[#FFFEFB] px-7 py-4 text-sm font-bold text-black transition hover:border-[#FFC65C] hover:bg-[#FFF0C5]">
              See how it works
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-xs font-bold text-[#8D8982]">
                <Icon size={16} className="text-[#C96A00]" /> {label}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="relative overflow-hidden rounded-[32px] border border-[#D8D2C8] bg-[#FFFEFB] p-3 shadow-[0_30px_80px_rgba(77,46,0,0.12)] sm:p-4">
            <div className="relative h-[460px] overflow-hidden rounded-[24px] bg-[#FFF0C5] sm:h-[520px]">
              <img src="/images/parentchild.png" alt="Parent and child preparing for school" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/65 to-transparent" />

              <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-2xl border border-white/40 bg-[#FFFEFB]/90 px-4 py-3 shadow-lg backdrop-blur-md sm:left-6 sm:right-6 sm:top-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFC65C] text-black"><Navigation size={19} /></div>
                  <div><p className="text-[10px] font-bold uppercase tracking-wider text-[#8D8982]">Today’s ride</p><p className="text-sm font-extrabold text-black">Home → School</p></div>
                </div>
                <span className="rounded-full bg-[#FFF0C5] px-3 py-1.5 text-[10px] font-extrabold text-[#C96A00]">On route</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/25 bg-black/80 p-4 text-white backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/60"><Clock3 size={14} /> Estimated arrival</div>
                  <p className="mt-2 text-xl font-black">8:24 AM</p>
                </div>
                <div className="rounded-2xl border border-white/60 bg-[#FFFEFB]/95 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#8D8982]"><CheckCircle2 size={14} className="text-[#C96A00]" /> Driver status</div>
                  <p className="mt-2 text-sm font-extrabold text-black">Verified & active</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-1/3 hidden rounded-2xl border border-[#D8D2C8] bg-[#FFFEFB] p-4 shadow-xl sm:block lg:-right-8">
            <Bell size={18} className="text-[#C96A00]" />
            <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-[#8D8982]">Update</p>
            <p className="mt-1 text-xs font-extrabold">Pickup completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

