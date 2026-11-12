import React from "react";
import DigitalTransformation from "../components/CanadaCompo/DigitalTransformation";

const solutions = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Build intelligent applications that help businesses automate processes, gain insights and make smarter decisions.",
    icon: "✳",
  },
  {
    number: "02",
    title: "Cloud Solutions",
    description:
      "Modernize your business infrastructure with scalable, secure and reliable cloud technologies.",
    icon: "☁",
  },
  {
    number: "03",
    title: "Data-Driven Automation",
    description:
      "Transform business data into actionable intelligence and streamline operations through automation.",
    icon: "⌘",
  },
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "Global", label: "Technology Expertise" },
  { value: "360°", label: "Digital Solutions" },
];

const USAPage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-black text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex min-h-[720px] items-center overflow-hidden bg-black px-5 py-24 sm:px-10 lg:min-h-[800px] lg:px-20">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          {/* Radial glows */}
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

          {/* Top border glow line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          {/* Hero content */}
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100 sm:text-sm">
                iiiQbets USA
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Transforming
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Businesses
              </span>
              Through Technology.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Welcome to iiiQbets USA. We empower businesses with
              intelligent technology, innovative digital solutions,
              AI-driven applications and scalable cloud experiences
              that accelerate business growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#solutions"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(34,211,238,0.9)]"
              >
                Explore Our Solutions
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-white/10 pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <h3 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-bold text-transparent">
                    {s.value}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-8 rounded-full bg-cyan-500/30 blur-[100px]" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.openai.com/static-rsc-4/LedCGXHmD35L78b31rk3Qkq-4Q-Lf4EeUDq7-Fd2i3ZjcLNoU1uaftWdiHU_017RaROERogJ_mQOs72g2JZD0YUSOJ443OuR15IvBAvhUYx89dIbXOmx946sGkM3oI9H4Q7PajMhLmiAE0uA-JLIhGlEQElF5-WJMcdpCZQI75h6ZzcC-K0_y6uWC4X2svtL?purpose=fullsize"
                alt="Modern technology and digital business"
                className="h-[320px] w-full rounded-2xl object-cover opacity-90 sm:h-[440px]"
              />

              {/* Image overlay gradient */}
              <div className="pointer-events-none absolute inset-3 rounded-2xl bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Technology. Intelligence. Growth.
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Building What's Next.
                </h3>
              </div>
            </div>

            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white/10 bg-white p-4 text-black shadow-xl shadow-cyan-500/20 sm:block md:-right-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Innovation
              </p>
              <p className="mt-1 text-lg font-bold">Beyond Limits</p>
            </div>
          </div>
        </div>
      </section>

      

      <DigitalTransformation />

      {/* ================= SOLUTIONS SECTION ================= */}
      <section
        id="solutions"
        className="relative bg-gradient-to-b from-black via-[#050a12] to-black px-5 py-20 sm:px-10 lg:px-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              What We Do
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Technology Solutions That
              <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {" "}Move Business Forward.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              We combine modern technologies and business-focused
              thinking to deliver intelligent, scalable and
              future-ready solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.3)] sm:p-10"
              >
                {/* hover gradient glow */}
                <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-cyan-400">
                    {item.number}
                  </span>

                  <span className="text-4xl text-cyan-400 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {item.icon}
                  </span>
                </div>

                <h3 className="relative mt-10 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="relative mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

                <div className="relative mt-8 h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-24" />
              </div>
            ))}
          </div>

          <div
            id="contact"
            className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1a2b] via-black to-[#0b1a2b] px-7 py-12 text-center sm:px-12 lg:flex lg:items-center lg:justify-between lg:text-left"
          >
            {/* decorative glows */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Let's Build Something Exceptional.
              </h3>
              <p className="mt-3 text-gray-400">
                Connect with iiiQbets and take your business forward.
              </p>
            </div>

            <a
              href="mailto:info@iiiqbets.com"
              className="relative mt-8 inline-flex shrink-0 items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 font-semibold text-black shadow-[0_0_40px_-5px_rgba(34,211,238,0.6)] transition-all hover:-translate-y-1 hover:shadow-[0_0_60px_-5px_rgba(34,211,238,0.9)] lg:mt-0"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ACCENT ================= */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </main>
  );
};

export default USAPage;