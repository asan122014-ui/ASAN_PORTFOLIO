import {
  ClipboardList,
  CarFront,
  ShieldCheck,
  Bell,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your school, area and transport requirements.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Find suitable transport",
    description:
      "Explore suitable auto and van options.",
    icon: CarFront,
  },
  {
    number: "03",
    title: "Review the details",
    description:
      "Understand the driver and vehicle information.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Stay informed",
    description:
      "Receive relevant updates throughout the commute.",
    icon: Bell,
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#FFF0C5] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
            HOW IT WORKS
          </p>

          <h2 className="text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#000000] sm:text-4xl lg:text-[44px]">
            From home to school,
            <br />
            made simpler.
          </h2>
        </div>

        {/* Journey */}
        <div className="relative">

          {/* Connecting line — desktop */}
          <div className="absolute left-[12%] right-[12%] top-[38px] hidden h-px border-t border-dashed border-[#FFC65C] lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative text-center lg:text-left"
                >

                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#FFC65C] text-[12px] font-extrabold text-[#000000] shadow-sm lg:mx-0">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-5 flex justify-center text-[#000000] lg:justify-start">
                    <Icon
                      size={29}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-[15px] font-extrabold leading-5 text-[#000000]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[210px] text-[12px] leading-5 text-black/55 lg:mx-0">
                    {step.description}
                  </p>

                </article>
              );
            })}

          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-12 flex justify-center">
          <div className="rounded-full bg-[#FFFEFB]/80 px-5 py-3 text-center text-[12px] font-bold text-[#000000] shadow-sm">
            A clearer school commute starts with better information.
          </div>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;


