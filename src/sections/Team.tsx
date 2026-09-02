import { useState } from "react";

const teamMembers = [
  { name: "B Abhilash", role: "Team Lead & Product Lead", initial: "A", photo: "/images/team/abhilash.jpg", position: "center 25%" },
  { name: "K Sai Akshith", role: "Tech Lead", initial: "S", photo: "/images/team/sai-akshith.jpg", position: "center 18%" },
  { name: "B Neeharika", role: "UI/UX Lead", initial: "N", photo: "/images/team/neeharika.jpg", position: "center 20%" },
  { name: "B Sharath", role: "Operations & Field Coordinator", initial: "S", photo: "/images/team/sharath.jpg", position: "center 55%" },
  { name: "P Ramya Bharathi", role: "Marketing Lead", initial: "R", photo: "/images/team/ramya-bharathi.jpg", position: "center 20%" },
];

type TeamMember = (typeof teamMembers)[number];

function TeamPortrait({ member }: { member: TeamMember }) {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div className="shrink-0 overflow-hidden rounded-2xl border border-[#D8D2C8] bg-[#FFF0C5]" style={{ width: 112, height: 144 }}>
      {hasPhoto ? (
        <img
          src={member.photo}
          alt={member.name}
          style={{ width: "100%", height: "100%", display: "block", objectFit: "cover", objectPosition: member.position }}
          className="transition-transform duration-300 group-hover:scale-105"
          onError={() => setHasPhoto(false)}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-3xl font-black text-black/65" aria-label={`${member.name} photo placeholder`}>{member.initial}</div>
      )}
    </div>
  );
}

function Team() {
  return (
    <section id="team" className="bg-[#FFF9EF] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 pb-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#C96A00]">Our team</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.045em] text-black sm:text-4xl lg:text-[44px]">People behind ASAN RIDES.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#8D8982]">A focused team bringing together product, technology, design, operations, and marketing to build safer school journeys.</p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8D2C8] bg-[#FFFEFB] px-4 py-2.5 text-xs font-bold text-black/65 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#C96A00]" /> 5 core team members
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              style={{ minHeight: 184, maxHeight: 184 }}
              className={`group flex w-full items-center justify-between gap-5 overflow-hidden rounded-[24px] border border-[#D8D2C8] bg-[#FFFEFB] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#FFC65C] hover:shadow-[0_14px_32px_rgba(80,60,0,0.08)] ${index === 4 ? "lg:col-span-2 lg:max-w-[620px] lg:justify-self-center" : ""}`}
            >
              <div className="min-w-0 flex-1">
                <span className="inline-flex rounded-full bg-[#FFF0C5] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#C96A00]">Core team</span>
                <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-black">{member.name}</h3>
                <p className="mt-2 text-xs font-bold leading-5 text-[#C96A00]">{member.role}</p>
                <p className="mt-3 text-[11px] leading-5 text-[#8D8982]">Building safer school journeys.</p>
              </div>
              <TeamPortrait member={member} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
