import {
  ShieldCheck,
  FileCheck2,
  CarFront,
  BellRing,
} from "lucide-react";

const safetyPoints = [
  {
    icon: ShieldCheck,
    title: "Driver verification",
    description:
      "Parents can access important driver information before choosing school transport.",
  },
  {
    icon: FileCheck2,
    title: "Vehicle information",
    description:
      "Vehicle details are made visible so parents can make informed transportation decisions.",
  },
  {
    icon: CarFront,
    title: "Ride visibility",
    description:
      "Parents can stay informed about their child's commute and ride status.",
  },
  {
    icon: BellRing,
    title: "Important alerts",
    description:
      "Receive relevant pickup, drop and ride-status updates when they matter.",
  },
];

function Safety() {
  return (
    <section
      id="safety"
      className="bg-[#F7F7F5] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              Safety first
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
              More information.
              <br />
              <span className="text-black/40">
                Less uncertainty.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-black/60 sm:text-lg">
            Choosing school transportation shouldn't feel like a guessing
            game. ASAN RIDES is designed to give parents better information
            before and during the daily commute.
          </p>
        </div>

        {/* Safety Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {safetyPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-7 text-lg font-black text-black">
                  {point.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-6 rounded-3xl bg-black p-6 text-white sm:p-8 lg:mt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
                The ASAN approach
              </p>

              <p className="mt-2 max-w-2xl text-lg font-bold sm:text-xl">
                Give parents the information they need to make better
                transportation choices.
              </p>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-black">
              <ShieldCheck size={24} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Safety;