import {
  ShieldCheck,
  CarFront,
  Bell,
  Headphones,
} from "lucide-react";

const features = [
  {
    title: "See who is driving.",
    description: "Review driver details before the ride.",
    icon: ShieldCheck,
  },
  {
    title: "See the vehicle details.",
    description: "Important vehicle information in one place.",
    icon: CarFront,
  },
  {
    title: "Stay updated throughout.",
    description: "Keep track of the ride with timely updates.",
    icon: Bell,
  },
  {
    title: "Parent support.",
    description: "We're here to help whenever you need us.",
    icon: Headphones,
  },
];

function Solution() {
  return (
    <section
      id="solution"
      className="bg-[#FFF9EF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-[28px] border border-[#D8D2C8]/80 bg-[#FFFEFB] shadow-[0_8px_30px_rgba(80,60,0,0.04)]">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT CONTENT */}
            <div className="border-b border-[#D8D2C8] p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">

              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
                MEET ASAN RIDES
              </p>

              <h2 className="max-w-md text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#000000] sm:text-4xl">
                A simpler way to manage the school commute.
              </h2>

              <p className="mt-5 max-w-md text-[13px] leading-6 text-black/60 sm:text-[14px]">
                ASAN RIDES connects parents with verified auto and van
                drivers while giving families better information and
                visibility throughout the school journey.
              </p>

              <a
                href="#how-it-works"
                className="mt-6 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#C96A00] transition-colors hover:text-[#000000]"
              >
                See how it works
                <span className="text-base">→</span>
              </a>
            </div>

            {/* RIGHT FEATURES */}
            <div className="grid sm:grid-cols-2">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className={`
                      group p-7 transition-all duration-300
                      hover:bg-[#FFF0C5]
                      ${index < 2 ? "border-b border-[#D8D2C8]" : ""}
                      ${index % 2 === 0 ? "sm:border-r sm:border-[#D8D2C8]" : ""}
                    `}
                  >

                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00] transition-all duration-300 group-hover:bg-[#FFC65C] group-hover:text-[#000000]">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                      />
                    </div>

                    <h3 className="text-[15px] font-extrabold leading-5 text-[#000000]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 max-w-[190px] text-[12px] leading-5 text-black/55">
                      {feature.description}
                    </p>

                  </article>
                );
              })}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;


