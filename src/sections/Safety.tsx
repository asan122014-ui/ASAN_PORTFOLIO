import {
  UserCheck,
  CarFront,
  MapPin,
  Bell,
  Heart,
} from "lucide-react";

const benefits = [
  {
    title: "Driver Information",
    description:
      "See relevant driver details before choosing transport.",
    icon: UserCheck,
  },
  {
    title: "Vehicle Details",
    description:
      "View important information about the vehicle.",
    icon: CarFront,
  },
  {
    title: "Ride Updates",
    description:
      "Stay updated throughout the school commute.",
    icon: MapPin,
  },
  {
    title: "Important Alerts",
    description:
      "Receive timely pickup, drop-off and ride updates.",
    icon: Bell,
  },
  {
    title: "Parent-First Experience",
    description:
      "A simple experience built around everyday parent needs.",
    icon: Heart,
  },
];

function Safety() {
  return (
    <section
      id="safety"
      className="bg-[#FFFEFB] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
            WHY ASAN RIDES
          </p>

          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#000000] sm:text-4xl lg:text-[44px]">
            Everything you need, before and during the ride.
          </h2>
        </div>

        {/* Benefits */}
        <div className="overflow-hidden rounded-[28px] border border-[#D8D2C8] bg-[#FFFEFB]">

          <div className="grid sm:grid-cols-2 lg:grid-cols-5">

            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className={`
                    group px-6 py-8 text-center transition-all duration-300
                    hover:bg-[#FFF0C5]
                    ${
                      index !== benefits.length - 1
                        ? "border-b border-[#D8D2C8] lg:border-b-0 lg:border-r"
                        : ""
                    }
                    ${
                      index === 1
                        ? "sm:border-r sm:border-[#D8D2C8] lg:border-r"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00] transition-all duration-300 group-hover:bg-[#FFC65C] group-hover:text-[#000000]">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[14px] font-extrabold leading-5 text-[#000000]">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-[170px] text-[11px] leading-5 text-black/55">
                    {benefit.description}
                  </p>
                </article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Safety;


