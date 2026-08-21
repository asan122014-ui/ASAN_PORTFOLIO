import { ArrowRight, ShieldCheck, MapPin, Bell } from "lucide-react";

function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#FFD400]/20 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-black" />
              <span className="text-xs font-bold uppercase tracking-wide text-black sm:text-sm">
                School transportation, reimagined
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">
              School transport parents can{" "}
              <span className="relative inline-block">
                trust.
                <span className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#FFD400] sm:h-3" />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/65 sm:text-lg sm:leading-8">
              Connect with verified auto and van drivers, know where your
              child is, and stay informed throughout the school commute.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#parents"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:bg-[#FFD400] hover:text-black sm:text-base"
              >
                Find Transport
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#drivers"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white sm:text-base"
              >
                Join as Driver
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD400]">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-semibold text-black">
                  Verified drivers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD400]">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-semibold text-black">
                  Ride visibility
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFD400]">
                  <Bell size={20} />
                </div>
                <span className="text-sm font-semibold text-black">
                  Pickup alerts
                </span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#FFD400] p-5 sm:p-7">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-black p-6 text-white sm:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold">
                        TODAY'S RIDE
                      </span>

                      <span className="rounded-full bg-[#FFD400] px-3 py-1 text-xs font-bold text-black">
                        ON ROUTE
                      </span>
                    </div>

                    <div className="mt-10">
                      <p className="text-sm text-white/50">School commute</p>
                      <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                        Home → School
                      </h2>
                    </div>
                  </div>

                  {/* Mock route */}
                  <div className="my-8">
                    <div className="relative ml-3 border-l-2 border-dashed border-white/30 pl-7">
                      <div className="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-[#FFD400]" />

                      <div>
                        <p className="text-xs uppercase tracking-wide text-white/40">
                          Pickup
                        </p>
                        <p className="mt-1 font-semibold">
                          Home
                        </p>
                      </div>

                      <div className="mt-10">
                        <div className="absolute -left-[7px] h-3 w-3 rounded-full bg-[#FFD400]" />

                        <p className="text-xs uppercase tracking-wide text-white/40">
                          Drop
                        </p>
                        <p className="mt-1 font-semibold">
                          School
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-white/50">
                          Driver
                        </p>
                        <p className="mt-1 font-bold">
                          Verified Driver
                        </p>
                      </div>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFD400] text-sm font-black text-black">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-2 rounded-2xl border border-black/10 bg-white p-4 shadow-xl sm:-left-6 sm:p-5">
                <p className="text-xs font-medium text-black/50">
                  Ride status
                </p>
                <p className="mt-1 text-sm font-black text-black sm:text-base">
                  Your child is on the way
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;