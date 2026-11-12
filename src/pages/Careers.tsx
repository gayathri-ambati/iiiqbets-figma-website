import React from "react";

const benefits = [
  {
    number: "01",
    title: "Continuous Learning",
    description:
      "Expand your knowledge, explore new technologies and develop skills that help you grow professionally.",
    symbol: "↗",
  },
  {
    number: "02",
    title: "Collaborative Culture",
    description:
      "Work alongside passionate professionals who believe in sharing ideas, teamwork and collective success.",
    symbol: "◎",
  },
  {
    number: "03",
    title: "Meaningful Projects",
    description:
      "Contribute to innovative technology solutions that solve real-world business challenges.",
    symbol: "✳",
  },
  {
    number: "04",
    title: "Growth Opportunities",
    description:
      "Take on new responsibilities, explore your potential and build a rewarding professional journey.",
    symbol: "⌁",
  },
];

const cultureHighlights = [
  "An environment that encourages new ideas",
  "A culture built on collaboration and trust",
  "Opportunities to explore emerging technologies",
];

const CareersPage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-black text-white">

      {/* ============================================================
          SECTION 01 — HERO (Split layout with image + neon glow)
      ============================================================ */}
      <section className="relative flex min-h-[700px] items-center overflow-hidden bg-black px-5 py-24 sm:px-10 lg:min-h-[800px] lg:px-20">

        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

          {/* Top glow line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* Left content */}
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100 sm:text-sm">
                Careers at iiiQbets
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build Your Future.
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Create Impact.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              At iiiQbets, we believe great ideas come from great people.
              Join a team of innovators, thinkers and technology
              enthusiasts who are passionate about building solutions
              that make a difference.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#opportunities"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(34,211,238,0.9)]"
              >
                Explore Opportunities
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#culture"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                Discover Our Culture
              </a>
            </div>

            <div className="mt-14 border-t border-white/10 pt-7">
              <p className="text-xs font-semibold tracking-[0.3em] text-gray-500 sm:text-sm">
                INNOVATION &nbsp;•&nbsp; COLLABORATION &nbsp;•&nbsp; GROWTH
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-cyan-500/30 blur-[100px]" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="https://i.pinimg.com/1200x/84/9e/62/849e6238fc4b9a326589fc6f212bf90f.jpg"
                alt="People collaborating in a modern technology workplace"
                className="h-[320px] w-full rounded-2xl object-cover opacity-90 sm:h-[440px]"
              />

              {/* Overlay gradient */}
              <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Your Ideas Matter
                </p>
                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Together, We Create What's Next.
                </h3>
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white/10 bg-white px-5 py-4 text-black shadow-xl shadow-cyan-500/20 sm:block md:-right-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Be Part of
              </p>
              <p className="mt-1 text-lg font-bold">
                Something Bigger
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 02 — LIFE AT IIIQBETS (Reverse overlap image layout)
      ============================================================ */}
      <section
        id="culture"
        className="relative bg-black px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image side (with offset stat card) */}
          <div className="relative order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://i.pinimg.com/736x/91/04/53/910453a83c9043532df36946bfee3581.jpg"
                alt="Team members working and collaborating together"
                className="h-[320px] w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105 sm:h-[470px]"
              />
            </div>

            <div className="absolute -bottom-7 right-4 max-w-[230px] rounded-xl border border-white/10 bg-gradient-to-br from-[#0b1a2b] to-black p-6 text-white shadow-2xl shadow-cyan-500/10 sm:-right-5">
              <p className="text-2xl font-bold">
                One Team.
              </p>
              <p className="mt-1 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
                Shared Vision.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Growing together through ideas, innovation and collaboration.
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 pt-5 lg:order-2 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              Life at iiiQbets
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              More Than a Workplace.
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {" "}A Place to Grow.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-400">
              We believe that people are at the heart of every
              successful transformation. At iiiQbets, we bring
              together diverse perspectives, creative thinkers and
              technology professionals to build meaningful solutions.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-400">
              Our environment encourages curiosity, open communication
              and continuous improvement. Every idea has the potential
              to make an impact, and every individual has an opportunity
              to contribute to something bigger.
            </p>

            {/* Culture highlights — distinctive chip-style row */}
            <div className="mt-9 flex flex-wrap gap-3">
              {cultureHighlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-cyan-400/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-black">
                    ✓
                  </span>
                  <p className="text-sm font-medium text-gray-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          SECTION 03 — WHY JOIN US (Bento-style 2x2 on black w/ glow grid)
      ============================================================ */}
      <section
        id="opportunities"
        className="relative bg-gradient-to-b from-black via-[#050a12] to-black px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading — split alignment (left heading, right description) */}
          <div className="mb-16 grid items-end gap-8 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Why Join iiiQbets?
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Grow Your Skills.
                <span className="block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Shape the Future.
                </span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="text-base leading-8 text-gray-400 sm:text-lg">
                Discover an environment where your talent, ideas and
                ambitions can come together to create meaningful impact.
              </p>
            </div>
          </div>

          {/* Benefits — 2x2 bento grid with hover glow */}
          <div className="grid gap-5 sm:grid-cols-2">

            {benefits.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.3)] sm:p-10"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="text-sm font-bold tracking-widest text-cyan-400">
                      {item.number}
                    </span>

                    <h3 className="mt-4 text-xl font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
                      {item.description}
                    </p>

                    <div className="mt-7 h-1 w-10 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20" />
                  </div>

                  <span className="ml-4 text-4xl text-cyan-400 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 sm:text-5xl">
                    {item.symbol}
                  </span>
                </div>
              </div>
            ))}

          </div>

          {/* Final CTA — glowing banner */}
          <div className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1a2b] via-black to-[#0b1a2b] px-7 py-14 text-center sm:px-12 lg:py-16">

            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[80px]" />

            <div className="relative mx-auto max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Your Journey Starts Here
              </span>

              <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Make an Impact?
              </h3>

              <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
                Bring your passion, ideas and ambition to iiiQbets.
                Let's create meaningful technology and build a better future together.
              </p>

              <a
                href="/contact"
                className="group mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-9 py-4 font-bold text-black shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(34,211,238,0.9)]"
              >
                Get in Touch
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

    </main>
  );
};

export default CareersPage;