import { useState } from "react";
import { CheckCircle2, Phone, Mail } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-[#FFF9EF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid overflow-hidden rounded-[30px] border border-[#D8D2C8] bg-[#FFF0C5] lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT — MESSAGE */}
          <div className="p-7 sm:p-10 lg:p-12">

            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
              GET STARTED
            </p>

            <h2 className="max-w-md text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#000000] sm:text-4xl lg:text-[44px]">
              Looking for school transport for your child?
            </h2>

            <p className="mt-5 max-w-md text-[13px] leading-6 text-black/60 sm:text-[14px]">
              Tell us a little about what you're looking for and our team
              will help you take the next step.
            </p>

            {/* Reassurance */}
            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3 text-[12px] font-bold text-[#000000]">
                <CheckCircle2
                  size={18}
                  className="text-[#C96A00]"
                />
                Simple enquiry process
              </div>

              <div className="flex items-center gap-3 text-[12px] font-bold text-[#000000]">
                <CheckCircle2
                  size={18}
                  className="text-[#C96A00]"
                />
                Parent-focused support
              </div>

              <div className="flex items-center gap-3 text-[12px] font-bold text-[#000000]">
                <CheckCircle2
                  size={18}
                  className="text-[#C96A00]"
                />
                No complicated steps
              </div>

            </div>

            {/* Contact details */}
            <div className="mt-8 border-t border-[#D8D2C8] pt-6">

              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-wider text-[#C96A00]">
                TALK TO US
              </p>

              <div className="space-y-2">

                <a
                  href="mailto:hello@asanrides.com"
                  className="flex items-center gap-2 text-[12px] font-semibold text-[#000000] hover:text-[#C96A00]"
                >
                  <Mail size={16} />
                  hello@asanrides.com
                </a>

                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 text-[12px] font-semibold text-[#000000] hover:text-[#C96A00]"
                >
                  <Phone size={16} />
                  +91 XXXXX XXXXX
                </a>

              </div>

            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="bg-[#FFFEFB] p-6 sm:p-8 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-[#000000]">
                  Thank you!
                </h3>

                <p className="mt-2 max-w-sm text-[13px] leading-6 text-black/55">
                  We've received your enquiry. Our team will get in touch
                  with you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[12px] font-extrabold text-[#C96A00] hover:text-[#000000]"
                >
                  Submit another enquiry
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-xl"
              >

                <div className="mb-6">
                  <h3 className="text-xl font-extrabold text-[#000000]">
                    Find School Transport
                  </h3>

                  <p className="mt-1 text-[12px] text-black/50">
                    Share a few details and we'll take it from there.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  {/* Name */}
                  <div className="sm:col-span-2">
                    <label>Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label>Phone Number</label>
                    <input
                      required
                      type="tel"
                      placeholder="Enter phone number"
                    />
                  </div>

                  {/* School */}
                  <div>
                    <label>School</label>
                    <input
                      type="text"
                      placeholder="School name"
                    />
                  </div>

                  {/* Area */}
                  <div>
                    <label>Area</label>
                    <input
                      required
                      type="text"
                      placeholder="Your area"
                    />
                  </div>

                  {/* Pickup */}
                  <div>
                    <label>Pickup Location</label>
                    <input
                      type="text"
                      placeholder="Pickup area"
                    />
                  </div>

                  {/* Drop */}
                  <div className="sm:col-span-2">
                    <label>Drop Location</label>
                    <input
                      type="text"
                      placeholder="School / drop location"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC65C] px-6 py-3.5 text-[13px] font-extrabold text-[#000000] transition-all hover:-translate-y-0.5 hover:bg-[#C96A00] hover:text-white"
                >
                  Find School Transport
                  <span className="text-base">→</span>
                </button>

                <p className="mt-3 text-center text-[10px] leading-4 text-black/40">
                  By submitting this form, you agree to be contacted by
                  ASAN RIDES regarding your enquiry.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;


