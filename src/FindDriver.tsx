import { useState } from "react";
import Footer from "./components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, School, X } from "lucide-react";
import { submitEnquiry } from "./lib/api";

function FindDriver() {
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
      await submitEnquiry("parent", values);
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

  const inputClass = "w-full rounded-xl border border-[#D8D2C8] bg-[#FFF9EF] px-4 py-3.5 text-sm outline-none transition focus:border-[#FFC65C] focus:ring-2 focus:ring-[#FFF0C5]";

  return (
    <div className="min-h-screen bg-[#FFF9EF] text-[#000000]">
      <header className="border-b border-[#D8D2C8] bg-[#FFFEFB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center">
            <img src="/images/asanrides-logo.png" alt="ASAN RIDES" className="h-12 w-auto object-contain" />
          </a>
          <a href="/" className="flex items-center gap-2 text-[12px] font-bold text-black/50 transition hover:text-[#000000]"><X size={16} /> Close</a>
        </div>
      </header>

      <main className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="mb-7 inline-flex items-center gap-2 text-[12px] font-bold text-black/50 transition hover:text-[#000000]"><ArrowLeft size={15} /> Back to ASAN RIDES</a>
          <div className="grid overflow-hidden rounded-[32px] border border-[#D8D2C8] bg-[#FFFEFB] lg:grid-cols-[0.75fr_1.25fr]">
            <div className="bg-[#FFF0C5] p-7 sm:p-10 lg:p-12">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">FIND SCHOOL TRANSPORT</p>
              <h1 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-4xl">Looking for a new driver for your child?</h1>
              <p className="mt-5 max-w-md text-[13px] leading-6 text-black/60">Tell us what you need and our team will help you find a suitable school transportation option.</p>
              <div className="mt-8 space-y-4">
                <Info icon={<School size={18} />} title="Share your school" text="Tell us which school your child attends." />
                <Info icon={<MapPin size={18} />} title="Share your location" text="Tell us your area and pickup location." />
                <Info icon={<CheckCircle2 size={18} />} title="We'll contact you" text="Our team will get in touch about the next step." />
              </div>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              {submitted ? (
                <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF0C5] text-[#C96A00]"><CheckCircle2 size={32} /></div>
                  <h2 className="mt-5 text-2xl font-extrabold">Request received!</h2>
                  <p className="mt-3 max-w-sm text-[13px] leading-6 text-black/55">Thank you for sharing your requirements. Our team will review your request and contact you about suitable school transportation.</p>
                  <a href="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFC65C] px-6 py-3 text-[12px] font-extrabold transition hover:bg-[#C96A00] hover:text-white">Back to ASAN RIDES <ArrowRight size={16} /></a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
                  <div className="mb-7"><h2 className="text-2xl font-extrabold tracking-[-0.03em]">Request a Driver</h2><p className="mt-2 text-[12px] leading-5 text-black/50">Fill in the details below and we'll contact you.</p></div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Parent / Guardian Name" id="parent-name" wide><input id="parent-name" name="parentName" type="text" required placeholder="Enter your name" className={inputClass} /></Field>
                    <Field label="Phone Number" id="phone"><input id="phone" name="phone" type="tel" required placeholder="Enter phone number" className={inputClass} /></Field>
                    <Field label="School" id="school"><input id="school" name="school" type="text" required placeholder="School name" className={inputClass} /></Field>
                    <Field label="Area" id="area"><input id="area" name="area" type="text" required placeholder="Your area" className={inputClass} /></Field>
                    <Field label="Pickup Location" id="pickup"><input id="pickup" name="pickup" type="text" required placeholder="Pickup location" className={inputClass} /></Field>
                    <Field label="Drop Location" id="drop"><input id="drop" name="drop" type="text" required placeholder="School / drop location" className={inputClass} /></Field>
                    <Field label="Preferred Transport" id="vehicle" wide>
                      <select id="vehicle" name="vehicle" required defaultValue="" className={inputClass}><option value="" disabled>Select transport</option><option value="auto">Auto</option><option value="van">Van</option><option value="either">Auto or Van</option></select>
                    </Field>
                  </div>
                  {error && <p role="alert" className="mt-5 rounded-xl bg-[#FDEBEC] px-4 py-3 text-sm font-semibold text-[#C93B45]">{error}</p>}
                  <button type="submit" disabled={submitting} className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC65C] px-6 py-4 text-[13px] font-extrabold text-[#000000] transition-all hover:-translate-y-0.5 hover:bg-[#C96A00] hover:text-white disabled:cursor-not-allowed disabled:opacity-60">{submitting ? "Submitting..." : "Submit Request"} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button>
                  <p className="mt-3 text-center text-[10px] leading-4 text-black/40">Our team will contact you regarding your school transportation request.</p>
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

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="flex items-start gap-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFFEFB] text-[#C96A00]">{icon}</div><div><h3 className="text-[12px] font-extrabold">{title}</h3><p className="mt-1 text-[11px] leading-5 text-black/50">{text}</p></div></div>;
}
function Field({ label, id, wide = false, children }: { label: string; id: string; wide?: boolean; children: React.ReactNode }) {
  return <div className={wide ? "sm:col-span-2" : ""}><label htmlFor={id} className="mb-1.5 block text-[11px] font-bold">{label}</label>{children}</div>;
}

export default FindDriver;
