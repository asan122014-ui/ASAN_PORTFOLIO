import {
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "918309649713";

const parentMessage =
  "Hi ASAN RIDES, I'm looking for school transportation for my child. I would like to know about available drivers.";

const driverMessage =
  "Hi ASAN RIDES, I'm interested in joining as a driver. I would like to know about the driver onboarding process.";

const generalMessage =
  "Hi ASAN RIDES, I would like to know more about your school transportation services.";

const whatsapp = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

function Footer() {
  return (
    <footer className="bg-[#FFF0C5] text-[#000000]">

      {/* =========================
          TOP CTA
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-8">

        <div className="rounded-[28px] bg-[#FFC65C] px-7 py-8 md:px-10 md:py-9">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#000000]/55">
                SCHOOL TRANSPORTATION, MADE SIMPLE
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-[#000000] md:text-3xl">
                Looking for a safer school commute?
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#000000]/65">
                Tell us what you need and our team will help you find the
                right transportation option.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row">

              {/* GET STARTED */}

              <a
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#000000] px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-[#C96A00]"
              >
                Get Started
                <ArrowUpRight size={17} />
              </a>

              {/* JOIN DRIVER */}

              <a
                href="/join-driver"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#000000]/15 bg-[#FFFEFB] px-6 py-3.5 text-sm font-extrabold text-[#000000] transition hover:bg-[#FFF9EF]"
              >
                Join as Driver
                <ArrowUpRight size={17} />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          MAIN FOOTER
      ========================== */}

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1fr]">


          {/* =========================
              BRAND
          ========================== */}

          <div>

            <a
              href="/"
              className="inline-flex"
            >

              <img
                src="/images/asanrides-logo.png"
                alt="ASAN RIDES"
                className="h-12 w-auto object-contain"
              />

            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#000000]/55">
              Building a safer and more transparent school commute for
              children, parents and trusted drivers.
            </p>


            {/* WHATSAPP */}

            <a
              href={whatsapp(generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#000000]/15 bg-[#FFFEFB] px-4 py-2.5 text-xs font-bold text-[#000000]/75 transition hover:border-[#FFC65C] hover:bg-[#FFC65C] hover:text-[#000000]"
            >
              <FaWhatsapp size={16} />
              Chat on WhatsApp
            </a>

          </div>


          {/* =========================
              COMPANY
          ========================== */}

          <div>

            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#C96A00]">
              Company
            </h3>

            <div className="mt-5 space-y-3.5">

              <a
                href="/#how-it-works"
                className="block text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                How It Works
              </a>

              <a
                href="/#safety"
                className="block text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                Safety
              </a>

              <a
                href="/#team"
                className="block text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                Our Team
              </a>

              <a
                href="/#faq"
                className="block text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                FAQ
              </a>

            </div>

          </div>


          {/* =========================
              GET STARTED
          ========================== */}

          <div>

            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#C96A00]">
              Get Started
            </h3>

            <div className="mt-5 space-y-3.5">

              <a
                href="/find-driver"
                className="block text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                Find a Driver
              </a>

              <a
                href="/join-driver"
                className="block text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                Join as a Driver
              </a>

              <a
                href={whatsapp(parentMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                <FaWhatsapp size={14} />
                Parent Enquiry
              </a>

              <a
                href={whatsapp(driverMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#000000]/55 transition hover:text-[#C96A00]"
              >
                <FaWhatsapp size={14} />
                Driver Enquiry
              </a>

            </div>

          </div>


          {/* =========================
              CONTACT
          ========================== */}

          <div>

            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#C96A00]">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-4">

              {/* EMAIL */}

              <a
                href="mailto:asan122014@gmail.com"
                className="flex items-center gap-3 text-sm text-[#000000]/60 transition hover:text-[#C96A00]"
              >

                <Mail
                  size={16}
                  className="text-[#C96A00]"
                />

                asan122014@gmail.com

              </a>


              {/* WHATSAPP */}

              <a
                href={whatsapp(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#000000]/60 transition hover:text-[#C96A00]"
              >

                <FaWhatsapp size={16} className="text-[#C96A00]" />

                +91 83096 49713

              </a>


              {/* LOCATION */}

              <div className="flex items-center gap-3 text-sm text-[#000000]/60">

                <MapPin
                  size={16}
                  className="text-[#C96A00]"
                />

                Hyderabad, Telangana

              </div>

            </div>


            {/* =========================
                SOCIAL
            ========================== */}

            <div className="mt-7 flex gap-2.5">

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/asanrides/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#000000]/15 bg-[#FFFEFB] text-[#000000]/60 transition hover:-translate-y-0.5 hover:border-[#FFC65C] hover:bg-[#FFC65C] hover:text-[#000000]"
              >
                <FaInstagram size={17} />
              </a>


              {/* WHATSAPP */}

              <a
                href={whatsapp(generalMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#000000]/15 bg-[#FFFEFB] text-[#000000]/60 transition hover:-translate-y-0.5 hover:border-[#FFC65C] hover:bg-[#FFC65C] hover:text-[#000000]"
              >
                <FaWhatsapp size={17} />
              </a>


              {/* LINKEDIN */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#000000]/15 bg-[#FFFEFB] text-[#000000]/60 transition hover:-translate-y-0.5 hover:border-[#FFC65C] hover:bg-[#FFC65C] hover:text-[#000000]"
              >
                <FaLinkedinIn size={17} />
              </a>

            </div>

          </div>

        </div>


        {/* =========================
            DIVIDER
        ========================== */}

        <div className="mt-12 border-t border-[#000000]/10" />


        {/* =========================
            BOTTOM
        ========================== */}

        <div className="flex flex-col gap-4 py-6 text-xs text-[#000000]/45 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 ASAN RIDES. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-[#C96A00]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#C96A00]"
            >
              Terms & Conditions
            </a>

          </div>

          <p className="font-semibold text-[#000000]/55">
            Safe. Smart. Secure.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
