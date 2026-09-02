import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CarFront,
  Phone,
  UserRound,
  X,
} from "lucide-react";
import Footer from "./components/Footer";
import { submitEnquiry } from "./lib/api";

function JoinDriver() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const values = Object.fromEntries(
        new FormData(event.currentTarget).entries(),
      );
      await submitEnquiry("driver", values);
      setSubmitted(true);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Unable to submit your enquiry right now.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#000000]">

      {/* HEADER */}
      <header className="border-b border-[#D8D2C8] bg-[#FFFEFB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

          <a href="/" className="flex items-center">
            <img
              src="/images/asanrides-logo.png"
              alt="ASAN RIDES"
              className="h-12 w-auto object-contain"
            />
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-[12px] font-bold text-black/50 hover:text-[#000000]"
          >
            <X size={16} />
            Close
          </a>

        </div>
      </header>

      {/* MAIN */}
      <main className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-6xl">

          {/* BACK */}
          <a
            href="/"
            className="mb-7 inline-flex items-center gap-2 text-[12px] font-bold text-black/50 hover:text-[#000000]"
          >
            <ArrowLeft size={15} />
            Back to ASAN RIDES
          </a>

          <div className="grid overflow-hidden rounded-[32px] border border-[#D8D2C8] bg-[#FFFEFB] lg:grid-cols-[0.75fr_1.25fr]">

            {/* LEFT SIDE */}
            <div className="bg-[#FFC65C] p-7 sm:p-10 lg:p-12">

              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#000000]/60">
                DRIVER ONBOARDING
              </p>

              <h1 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                Want to drive with ASAN RIDES?
              </h1>

              <p className="mt-5 max-w-md text-[13px] leading-6 text-[#000000]/65">
                Share your details and vehicle information. Our team will
                contact you about joining the ASAN RIDES network.
              </p>

              {/* BENEFITS */}
              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">
                    <UserRound size={18} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold">
                      Build your profile
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-[#000000]/55">
                      Share your driver information with ASAN RIDES.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">
                    <CarFront size={18} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold">
                      Auto & Van drivers
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-[#000000]/55">
                      Drivers with suitable school transport vehicles can
                      enquire.
                    </p>
                  </div>

                </div>

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold">
                      Our team will contact you
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-[#000000]/55">
                      We'll guide you through the next steps.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* FORM */}
            <div className="p-7 sm:p-10 lg:p-12">

              {submitted ? (

                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]">
                    <CheckCircle2 size={32} />
                  </div>

                  <h2 className="mt-5 text-2xl font-extrabold">
                    Enquiry received!
                  </h2>

                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-black/55">
                    Thank you for your interest in ASAN RIDES. Our team will
                    review your details and contact you about the next steps.
                  </p>

                  <a
                    href="/"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFC65C] px-6 py-3 text-[12px] font-extrabold hover:bg-[#C96A00] hover:text-white"
                  >
                    Back to ASAN RIDES
                    <ArrowRight size={16} />
                  </a>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-xl"
                >

                  <div className="mb-7">

                    <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
                      Join ASAN RIDES
                    </h2>

                    <p className="mt-2 text-[12px] leading-5 text-black/50">
                      Tell us a little about yourself and your vehicle.
                    </p>

                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* NAME */}
                    <div className="sm:col-span-2">

                      <label
                        htmlFor="driver-name"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Full Name
                      </label>

                      <input
                        id="driver-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* PHONE */}
                    <div>

                      <label
                        htmlFor="driver-phone"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Phone Number
                      </label>

                      <input
                        id="driver-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* AREA */}
                    <div>

                      <label
                        htmlFor="driver-area"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Area / Location
                      </label>

                      <input
                        id="driver-area"
                        name="area"
                        type="text"
                        required
                        placeholder="Your area"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* VEHICLE TYPE */}
                    <div>

                      <label
                        htmlFor="vehicle-type"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Vehicle Type
                      </label>

                      <select
                        id="vehicle-type"
                        name="vehicleType"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      >

                        <option value="" disabled>
                          Select vehicle
                        </option>

                        <option value="auto">
                          Auto
                        </option>

                        <option value="van">
                          Van
                        </option>

                      </select>

                    </div>

                    {/* VEHICLE NUMBER */}
                    <div>

                      <label
                        htmlFor="vehicle-number"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Vehicle Number
                      </label>

                      <input
                        id="vehicle-number"
                        name="vehicleNumber"
                        type="text"
                        required
                        placeholder="Example: TS 09 UA 1234"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm uppercase outline-none focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* EXPERIENCE */}
                    <div>

                      <label
                        htmlFor="experience"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Driving Experience
                      </label>

                      <select
                        id="experience"
                        name="experience"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      >

                        <option value="" disabled>
                          Select experience
                        </option>

                        <option value="0-2">
                          0–2 years
                        </option>

                        <option value="3-5">
                          3–5 years
                        </option>

                        <option value="5-10">
                          5–10 years
                        </option>

                        <option value="10+">
                          10+ years
                        </option>

                      </select>

                    </div>

                    {error && (
                      <p role="alert" className="rounded-xl bg-[#FDEBEC] px-4 py-3 text-sm font-semibold text-[#C93B45] sm:col-span-2">
                        {error}
                      </p>
                    )}

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC65C] px-6 py-4 text-[13px] font-extrabold text-[#000000] transition-all hover:-translate-y-0.5 hover:bg-[#C96A00] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2"
                    >
                      {submitting ? "Submitting..." : "Submit Driver Enquiry"}

                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-[10px] leading-4 text-black/40 sm:col-span-2">
                      Our team will contact you regarding driver onboarding.
                    </p>

                  </div>

                </form>

              )}

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default JoinDriver;


