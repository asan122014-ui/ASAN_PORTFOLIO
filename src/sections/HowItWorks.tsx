import { Search, UserCheck, Bell } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find your transport",
    description:
      "Explore available auto and van drivers that suit your child's school commute.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Connect with a verified driver",
    description:
      "Review driver and vehicle information before choosing the right transport.",
  },
  {
    number: "03",
    icon: Bell,
    title: "Stay informed",
    description:
      "Stay updated throughout the commute with ride status and important alerts.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-5xl">
            School transport,
            <br />
            made simpler.
          </h2>

          <p className="mt-5 text-base leading-7 text-black/60 sm:text-lg">
            From finding the right transport to staying informed during
            the commute, ASAN RIDES keeps the experience simple for parents.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-20">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-black/25">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F59E0B] text-black">
                    <Icon size={23} strokeWidth={2.3} />
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-black text-black sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/55 sm:text-base">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;