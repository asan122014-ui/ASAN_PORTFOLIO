import {
  FileCheck2,
  CalendarCheck,
  Navigation,
  Wallet,
} from "lucide-react";

const driverBenefits = [
  {
    icon: FileCheck2,
    title: "Build trust",
    description:
      "Show parents your verified driver and vehicle information.",
  },
  {
    icon: CalendarCheck,
    title: "Manage rides",
    description:
      "Organise school transportation requests and daily rides more easily.",
  },
  {
    icon: Navigation,
    title: "Stay connected",
    description:
      "Share ride status and location information during active trips.",
  },
  {
    icon: Wallet,
    title: "Grow your business",
    description:
      "Connect with parents looking for reliable school transportation.",
  },
];

function Drivers() {
  return (
    <section
      id="drivers"
      className="bg-black py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Content */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              For drivers
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Get discovered by
              <br />
              <span className="text-white/40">
                parents who care.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              ASAN RIDES gives drivers a structured way to present their
              information, manage school rides and connect with parents.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#F59E0B] px-6 py-3 text-sm font-bold text-black transition hover:bg-white sm:text-base"
            >
              Join as a Driver
            </a>
          </div>

          {/* Driver Card */}
          <div className="rounded-[2rem] bg-white/10 p-4 sm:p-6">
            <div className="rounded-[1.5rem] bg-white p-6 text-black sm:p-8">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-black/40">
                    DRIVER PROFILE
                  </p>

                  <h3 className="mt-2 text-2xl font-black">
                    Verified Driver
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B]">
                  <FileCheck2 size={22} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/[0.04] p-4">
                  <p className="text-xs text-black/40">
                    STATUS
                  </p>
                  <p className="mt-1 font-black">
                    Verified
                  </p>
                </div>

                <div className="rounded-2xl bg-black/[0.04] p-4">
                  <p className="text-xs text-black/40">
                    VEHICLE
                  </p>
                  <p className="mt-1 font-black">
                    Auto / Van
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-black p-5 text-white">
                <div className="flex items-center gap-3">
                  <Navigation
                    size={20}
                    className="text-[#F59E0B]"
                  />

                  <div>
                    <p className="text-xs text-white/40">
                      RIDE STATUS
                    </p>

                    <p className="mt-1 font-bold">
                      School ride active
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between rounded-2xl bg-[#F59E0B] p-5">
                <div>
                  <p className="text-xs">
                    Parent connection
                  </p>

                  <p className="mt-1 font-black">
                    Ready to connect
                  </p>
                </div>

                <CalendarCheck size={22} />
              </div>

            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {driverBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59E0B] text-black">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 font-black">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  {benefit.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Drivers;