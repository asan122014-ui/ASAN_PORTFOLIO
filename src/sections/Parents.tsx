import {
  ShieldCheck,
  UserRoundCheck,
  CarFront,
  Bell,
  MapPin,
  ArrowRight,
} from "lucide-react";

const parentPoints = [
  {
    icon: UserRoundCheck,
    title: "Know the driver",
    text: "See relevant driver information before choosing school transport.",
  },
  {
    icon: CarFront,
    title: "Know the vehicle",
    text: "Get important vehicle information in one place.",
  },
  {
    icon: MapPin,
    title: "Stay informed",
    text: "Keep track of important ride information throughout the commute.",
  },
  {
    icon: Bell,
    title: "Get ride alerts",
    text: "Receive relevant pickup, drop-off and ride updates.",
  },
];

function Parents() {
  return (
    <section
      id="parents"
      className="bg-[#FFFEFB] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADING */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
            FOR PARENTS
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#000000] sm:text-4xl lg:text-[44px]">
            More clarity for every school commute.
          </h2>

          <p className="mt-4 text-[13px] leading-6 text-black/55 sm:text-[14px]">
            The information parents need to feel more confident about their
            child's daily school transportation.
          </p>

          {/* REDIRECT TO FORM PAGE */}
          <a
            href="/find-driver"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFC65C] px-6 py-3.5 text-[13px] font-extrabold text-[#000000] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C96A00] hover:text-white"
          >
            Find a New Driver
            <ArrowRight size={17} />
          </a>

        </div>

        {/* PARENT FEATURES */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {parentPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="group rounded-[24px] border border-[#D8D2C8] bg-[#FFF9EF] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC65C] hover:shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]">
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[15px] font-extrabold text-[#000000]">
                  {point.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-black/55">
                  {point.text}
                </p>
              </div>
            );
          })}

        </div>

        {/* TRUST CARD */}
        <div className="mt-8 grid overflow-hidden rounded-[30px] border border-[#D8D2C8] bg-[#FFF0C5] lg:grid-cols-[1fr_0.8fr]">

          <div className="p-7 sm:p-9 lg:p-11">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFC65C] text-[#000000]">
              <ShieldCheck size={25} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 max-w-lg text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#000000] sm:text-3xl">
              School transportation shouldn't leave parents guessing.
            </h3>

            <p className="mt-4 max-w-xl text-[13px] leading-6 text-black/60">
              ASAN RIDES brings important driver, vehicle and ride information
              together so parents can make a more informed choice.
            </p>

          </div>

          <div className="flex items-center bg-[#FFC65C] p-7 sm:p-9 lg:p-11">

            <div className="w-full">

              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#000000]/60">
                A SIMPLER WAY
              </p>

              <div className="mt-6 space-y-5">

                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[11px] font-extrabold text-[#000000]">
                    01
                  </span>

                  <div>
                    <h4 className="text-[13px] font-extrabold text-[#000000]">
                      Tell us what you need
                    </h4>

                    <p className="mt-1 text-[11px] leading-5 text-[#000000]/60">
                      Share your school transport requirement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[11px] font-extrabold text-[#000000]">
                    02
                  </span>

                  <div>
                    <h4 className="text-[13px] font-extrabold text-[#000000]">
                      Find suitable transport
                    </h4>

                    <p className="mt-1 text-[11px] leading-5 text-[#000000]/60">
                      Explore suitable auto and van options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[11px] font-extrabold text-[#000000]">
                    03
                  </span>

                  <div>
                    <h4 className="text-[13px] font-extrabold text-[#000000]">
                      Stay informed
                    </h4>

                    <p className="mt-1 text-[11px] leading-5 text-[#000000]/60">
                      Stay updated throughout the school commute.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Parents;


