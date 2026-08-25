import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is ASAN RIDES?",
    answer:
      "ASAN RIDES helps parents find suitable auto and van transportation for their child's daily school commute.",
  },
  {
    question: "Who can use ASAN RIDES?",
    answer:
      "Parents looking for school transportation and drivers providing auto or van services can use ASAN RIDES.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "ASAN RIDES focuses on auto and van transportation for school commutes.",
  },
  {
    question: "Can I know about the driver?",
    answer:
      "Parents can view relevant driver information before choosing suitable school transportation.",
  },
  {
    question: "Will I receive ride updates?",
    answer:
      "Parents can receive relevant ride information and alerts to stay informed during the school commute.",
  },
  {
    question: "How can I find school transport?",
    answer:
      "Click Find School Transport and share your requirements. Our team will contact you about the next step.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[#FFF9EF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}
        <div className="text-center">

          <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
            FAQ
          </p>

          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#000000] sm:text-4xl">
            Questions parents may have.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-[13px] leading-6 text-black/50">
            Simple answers about school transportation with ASAN RIDES.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mt-10 space-y-3">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#FFC65C] bg-[#FFF0C5]"
                    : "border-[#D8D2C8] bg-[#FFFEFB]"
                }`}
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >

                  <span className="text-[13px] font-extrabold text-[#000000] sm:text-[14px]">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]">
                    {isOpen ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </span>

                </button>

                {isOpen && (
                  <div className="px-5 pb-5">

                    <p className="text-[12px] leading-6 text-black/55">
                      {faq.answer}
                    </p>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FAQ;


