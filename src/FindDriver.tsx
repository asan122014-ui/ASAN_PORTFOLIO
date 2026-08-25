import { useState } from "react";
import Footer from "./components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  School,
  X,
} from "lucide-react";

function FindDriver() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#000000]">

{/* TOP BAR */}
<header className="border-b border-[#D8D2C8] bg-[#FFFEFB]">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

    <a
      href="/"
      className="flex items-center"
    >
      <img
        src="/images/asanrides-logo.png"
        alt="ASAN RIDES"
        className="h-12 w-auto object-contain"
      />
    </a>

    <a
      href="/"
      className="flex items-center gap-2 text-[12px] font-bold text-black/50 transition hover:text-[#000000]"
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
            className="mb-7 inline-flex items-center gap-2 text-[12px] font-bold text-black/50 transition hover:text-[#000000]"
          >
            <ArrowLeft size={15} />
            Back to ASAN RIDES
          </a>

          {/* FORM CARD */}
          <div className="grid overflow-hidden rounded-[32px] border border-[#D8D2C8] bg-[#FFFEFB] lg:grid-cols-[0.75fr_1.25fr]">

            {/* LEFT INFORMATION */}
            <div className="bg-[#FFF0C5] p-7 sm:p-10 lg:p-12">

              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">
                FIND SCHOOL TRANSPORT
              </p>

              <h1 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-4xl">
                Looking for a new driver for your child?
              </h1>

              <p className="mt-5 max-w-md text-[13px] leading-6 text-black/60">
                Tell us what you need and our team will help you find a
                suitable school transportation option.
              </p>

              {/* INFO POINTS */}
              <div className="mt-8 space-y-4">

                {/* SCHOOL */}
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">
                    <School size={18} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold">
                      Share your school
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-black/50">
                      Tell us which school your child attends.
                    </p>
                  </div>

                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold">
                      Share your location
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-black/50">
                      Tell us your area and pickup location.
                    </p>
                  </div>

                </div>

                {/* CONTACT */}
                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">
                    <CheckCircle2 size={18} />
                  </div>

                  <div>
                    <h3 className="text-[12px] font-extrabold">
                      We'll contact you
                    </h3>

                    <p className="mt-1 text-[11px] leading-5 text-black/50">
                      Our team will get in touch about the next step.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="p-7 sm:p-10 lg:p-12">

              {submitted ? (

                /* SUCCESS */
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">

                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]">
                    <CheckCircle2 size={32} />
                  </div>

                  <h2 className="mt-5 text-2xl font-extrabold">
                    Request received!
                  </h2>

                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-black/55">
                    Thank you for sharing your requirements. Our team will
                    review your request and contact you about suitable school
                    transportation.
                  </p>

                  <a
                    href="/"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFC65C] px-6 py-3 text-[12px] font-extrabold transition hover:bg-[#C96A00] hover:text-white"
                  >
                    Back to ASAN RIDES
                    <ArrowRight size={16} />
                  </a>

                </div>

              ) : (

                /* FORM */
                <form
                  onSubmit={handleSubmit}
                  className="mx-auto max-w-xl"
                >

                  {/* FORM TITLE */}
                  <div className="mb-7">

                    <h2 className="text-2xl font-extrabold tracking-[-0.03em]">
                      Request a Driver
                    </h2>

                    <p className="mt-2 text-[12px] leading-5 text-black/50">
                      Fill in the details below and we'll contact you.
                    </p>

                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    {/* PARENT NAME */}
                    <div className="sm:col-span-2">

                      <label
                        htmlFor="parent-name"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Parent / Guardian Name
                      </label>

                      <input
                        id="parent-name"
                        name="parentName"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* PHONE */}
                    <div>

                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* SCHOOL */}
                    <div>

                      <label
                        htmlFor="school"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        School
                      </label>

                      <input
                        id="school"
                        name="school"
                        type="text"
                        required
                        placeholder="School name"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* AREA */}
                    <div>

                      <label
                        htmlFor="area"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Area
                      </label>

                      <input
                        id="area"
                        name="area"
                        type="text"
                        required
                        placeholder="Your area"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* PICKUP */}
                    <div>

                      <label
                        htmlFor="pickup"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Pickup Location
                      </label>

                      <input
                        id="pickup"
                        name="pickup"
                        type="text"
                        required
                        placeholder="Pickup location"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* DROP */}
                    <div>

                      <label
                        htmlFor="drop"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Drop Location
                      </label>

                      <input
                        id="drop"
                        name="drop"
                        type="text"
                        required
                        placeholder="School / drop location"
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      />

                    </div>

                    {/* TRANSPORT */}
                    <div className="sm:col-span-2">

                      <label
                        htmlFor="vehicle"
                        className="mb-1.5 block text-[11px] font-bold"
                      >
                        Preferred Transport
                      </label>

                      <select
                        id="vehicle"
                        name="vehicle"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]"
                      >

                        <option value="" disabled>
                          Select transport
                        </option>

                        <option value="auto">
                          Auto
                        </option>

                        <option value="van">
                          Van
                        </option>

                        <option value="either">
                          Auto or Van
                        </option>

                      </select>

                    </div>

                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC65C] px-6 py-4 text-[13px] font-extrabold text-[#000000] transition-all hover:-translate-y-0.5 hover:bg-[#C96A00] hover:text-white"
                  >
                    Submit Request

                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="mt-3 text-center text-[10px] leading-4 text-black/40">
                    Our team will contact you regarding your school
                    transportation request.
                  </p>

                </form>

              )}

            </div>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default FindDriver;


