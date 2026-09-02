import {
  CheckCircle2,
  CarFront,
  ArrowRight,
} from "lucide-react";

function Drivers() {
  return (
    <section
      id="drivers"
      className="bg-[#FFF0C5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-[#FFC65C] px-7 py-10 sm:px-10 lg:grid-cols-[1fr_0.55fr] lg:px-12 lg:py-12">

          {/* LEFT */}
          <div>

            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#000000]/60">
              FOR DRIVERS
            </p>

            <h2 className="max-w-xl text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#000000] sm:text-4xl lg:text-[44px]">
              Good drivers deserve to be trusted.
            </h2>

            <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#000000]/65 sm:text-[14px]">
              ASAN RIDES gives drivers a structured way to present their
              information, manage school rides and connect with parents.
            </p>

            {/* BENEFITS */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">

              <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#000000]">
                <CheckCircle2 size={18} />
                Build trust
              </div>

              <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#000000]">
                <CheckCircle2 size={18} />
                Manage rides
              </div>

              <div className="flex items-center gap-2 text-[12px] font-extrabold text-[#000000]">
                <CheckCircle2 size={18} />
                Stay connected
              </div>

            </div>

            {/* JOIN DRIVER */}
            <a
              href="/join-driver"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#000000] px-6 py-3.5 text-[13px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFFEFB] hover:text-[#000000]"
            >
              Join as a Driver
              <ArrowRight size={17} />
            </a>

          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center lg:justify-end">

            <div className="flex h-52 w-52 items-center justify-center rounded-full bg-[#FFFEFB]/70 shadow-sm transition-transform duration-300 hover:scale-105">

              <CarFront
                size={92}
                strokeWidth={1.3}
                className="text-[#C96A00]"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Drivers;


