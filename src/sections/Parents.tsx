import {
  Smartphone,
  MapPin,
  Bell,
  ShieldCheck,
} from "lucide-react";

function Parents() {
  return (
    <section
      id="parents"
      className="bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59E0B]">
              For parents
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              More visibility.
              <br />
              <span className="text-black/40">
                More peace of mind.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
              ASAN RIDES helps parents make informed transportation choices
              and stay connected to their child's daily school commute.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3 font-bold text-white transition hover:bg-[#F59E0B] hover:text-black"
            >
              Get Started
            </a>
          </div>

          <div className="rounded-[2rem] bg-black p-6 text-white sm:p-8">
            <div className="rounded-2xl bg-white/10 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F59E0B] text-black">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-xs text-white/40">
                    CURRENT STATUS
                  </p>

                  <p className="mt-1 font-bold">
                    Ride is in progress
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#F59E0B] p-5 text-black">
              <div className="flex items-center gap-3">
                <Bell size={20} />

                <div>
                  <p className="text-xs">
                    Ride update
                  </p>

                  <p className="font-black">
                    Your child is on the way.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <Feature
            icon={<ShieldCheck size={21} />}
            title="Know your driver"
            text="View relevant driver and vehicle information before choosing transport."
          />

          <Feature
            icon={<MapPin size={21} />}
            title="Stay informed"
            text="Stay aware of your child's school commute and ride status."
          />

          <Feature
            icon={<Bell size={21} />}
            title="Get alerts"
            text="Receive useful pickup, drop-off and ride-status notifications."
          />

          <Feature
            icon={<Smartphone size={21} />}
            title="One platform"
            text="Keep your school transportation information organised in one place."
          />

        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-black/10 p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59E0B] text-black">
        {icon}
      </div>

      <h3 className="mt-6 font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-black/55">
        {text}
      </p>
    </div>
  );
}

export default Parents;