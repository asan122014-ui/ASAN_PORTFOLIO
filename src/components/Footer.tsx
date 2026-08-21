function Footer() {
  return (
    <footer className="bg-black px-4 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <img
              src="/images/asanrides-logo.png"
              alt="ASAN RIDES"
              className="h-12 w-auto object-contain"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              Making everyday school transportation safer, smarter and
              more transparent for parents and drivers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a href="#how-it-works" className="hover:text-white">
                How It Works
              </a>

              <a href="#safety" className="hover:text-white">
                Safety
              </a>

              <a href="#parents" className="hover:text-white">
                For Parents
              </a>

              <a href="#drivers" className="hover:text-white">
                For Drivers
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F59E0B]">
              Get in touch
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a
                href="mailto:hello@asanrides.com"
                className="hover:text-white"
              >
                hello@asanrides.com
              </a>

              <a href="#contact" className="hover:text-white">
                Get Started
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} ASAN RIDES. All rights reserved.
            </p>

            <p>Safe. Smart. Reliable.</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;