import {
  UserRound,
  CarFront,
  Clock3,
  BellRing,
  ShieldCheck,
} from "lucide-react";

const problems = [
  {
    title: "Who is driving my child?",
    description:
      "Getting clear information about the person driving isn't always easy.",
    icon: UserRound,
  },
  {
    title: "What vehicle are they travelling in?",
    description:
      "Parents need clear vehicle information before choosing school transport.",
    icon: CarFront,
  },
  {
    title: "When will the ride arrive?",
    description:
      "Parents shouldn't have to call or message repeatedly to ask what's happening.",
    icon: Clock3,
  },
  {
    title: "What if something changes?",
    description:
      "Delays and unexpected changes can make an ordinary school commute unnecessarily stressful.",
    icon: BellRing,
  },
];

function Trust() {
  return (
    <section
      id="problem"
      className="relative bg-[#FFFEFB] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
            THE EVERYDAY PROBLEM
          </p>

          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#000000] sm:text-4xl lg:text-[44px]">
            Every school morning comes with questions.
          </h2>
        </div>

        {/* Problem Cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {problems.map((problem) => {
            const Icon = problem.icon;

            return (
              <article
                key={problem.title}
                className="group rounded-[24px] border border-[#D8D2C8]/80 bg-[#FFFEFB] p-6 shadow-[0_6px_25px_rgba(80,60,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC65C]/60 hover:shadow-[0_14px_35px_rgba(80,60,0,0.08)]"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00] transition-colors group-hover:bg-[#FFC65C] group-hover:text-[#000000]">
                  <Icon
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-extrabold leading-6 text-[#000000]">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[13px] leading-6 text-black/55">
                  {problem.description}
                </p>
              </article>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <div className="mt-7 flex justify-center">
          <div className="flex max-w-full items-center gap-3 rounded-full bg-[#FFF0C5] px-5 py-3 text-center text-[12px] font-extrabold text-[#000000] sm:px-7 sm:text-[13px]">

            <ShieldCheck
              size={20}
              className="shrink-0 text-[#C96A00]"
            />

            <span>
              School transportation shouldn't leave parents guessing.
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Trust;


