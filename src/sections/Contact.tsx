function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F7F7F5] px-4 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-black p-8 text-white sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
            Get started
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Ready for a better school commute?
          </h2>

          <p className="mt-5 max-w-2xl text-white/60">
            Connect with ASAN RIDES and take the next step toward a
            simpler school transportation experience.
          </p>

          <a
            href="mailto:hello@asanrides.com"
            className="mt-8 inline-flex rounded-full bg-[#F59E0B] px-6 py-3 font-bold text-black"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;