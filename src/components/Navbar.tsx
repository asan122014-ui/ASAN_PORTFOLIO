import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Safety", href: "#safety" },
  { label: "For Parents", href: "#parents" },
  { label: "For Drivers", href: "#drivers" },
  { label: "Our Team", href: "#team" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8D2C8]/70 bg-[#FFF9EF]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src="/images/asanrides-logo.png"
            alt="ASAN RIDES — Every Ride, With Care."
            className="h-11 w-auto object-contain sm:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex items-center rounded-full border border-[#D8D2C8] bg-[#FFFEFB] p-1 shadow-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="rounded-full px-3.5 py-2.5 text-[12px] font-bold text-[#8D8982] transition-all hover:bg-[#FFF0C5] hover:text-[#C96A00]">
                {item.label}
              </a>
            ))}

          {/* FAQ */}
            <a href="#faq" className="rounded-full px-3.5 py-2.5 text-[12px] font-bold text-[#8D8982] transition-all hover:bg-[#FFF0C5] hover:text-[#C96A00]">FAQ</a>
          </div>

          {/* Main CTA */}
          <a
            href="/get-started"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#FFC65C] px-5 py-3.5 text-[13px] font-extrabold text-black shadow-[0_8px_24px_rgba(255,198,92,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#C96A00] hover:text-white"
          >
            Get Started
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D2C8] bg-[#FFFEFB] text-[#000000] transition hover:bg-[#FFF0C5] lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#D8D2C8]/70 bg-[#FFF9EF] px-4 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[#D8D2C8]/50 py-4 text-sm font-semibold text-[#000000] transition-colors hover:text-[#C96A00]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="border-b border-[#D8D2C8]/50 py-4 text-sm font-semibold text-[#000000]"
            >
              FAQ
            </a>

            <a
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FFC65C] px-5 py-3.5 text-sm font-extrabold text-[#000000]"
            >
              Get Started
              <span>→</span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

