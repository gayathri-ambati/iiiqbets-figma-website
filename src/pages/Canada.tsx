import React from "react";
import {
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaChartLine,
  FaCheckCircle,
  FaGlobeAmericas,
} from "react-icons/fa";
import DigitalTransformation from "../components/CanadaCompo/DigitalTransformation";

const solutions = [
  {
    number: "01",
    icon: <FaBrain />,
    title: "AI & Machine Learning",
    description:
      "Develop intelligent applications that simplify complex processes, improve decision-making and unlock new business possibilities.",
  },
  {
    number: "02",
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Build scalable, secure and flexible cloud infrastructure that supports business operations and long-term digital growth.",
  },
  {
    number: "03",
    icon: <FaChartLine />,
    title: "Data-Driven Automation",
    description:
      "Turn business data into meaningful insights and automate workflows to improve efficiency and operational performance.",
  },
];

const CanadaPage: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-black text-white">

      {/* ==================================================
          SECTION 01: CANADA HERO
      ================================================== */}

      <section
        id="canada"
        className="relative flex min-h-[680px] items-center overflow-hidden bg-black px-5 py-24 sm:px-8 md:min-h-[700px] lg:px-16 xl:px-20"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-32 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[140px]" />
          <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[120px]" />

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-12">

          {/* Left content */}
          <div className="max-w-2xl">

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
                <FaGlobeAmericas className="inline mr-2" />
                iiiQbets Canada
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Empowering
              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Canadian
              </span>
              Businesses Through Technology.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Welcome to iiiQbets Canada. We help businesses embrace
              digital transformation through intelligent applications,
              innovative technology and data-driven solutions that
              create opportunities for sustainable growth.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#canada-solutions"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                Explore Solutions
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#canada-about"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                Discover iiiQbets
              </a>

            </div>

            {/* Bottom highlights */}
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-8">
              <div>
                <p className="text-sm font-semibold text-white">
                  Innovation
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Future-ready thinking
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Intelligence
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Smarter solutions
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Transformation
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Business growth
                </p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute inset-8 rounded-full bg-cyan-500/20 blur-[100px]" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] p-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80"
                alt="Modern Canadian city and technology business"
                className="h-[320px] w-full rounded-2xl object-cover sm:h-[400px] lg:h-[460px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-black/70 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Think Beyond Boundaries
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Technology That Moves Business Forward.
                </h3>
              </div>
            </div>

            {/* Floating location label */}
            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-white/10 bg-gradient-to-br from-white to-gray-200 px-5 py-4 text-black shadow-xl sm:block md:-right-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Expanding Possibilities
              </p>
              <p className="mt-1 text-lg font-bold">
                Canada & Beyond
              </p>
            </div>
          </div>

        </div>
      </section>


       <DigitalTransformation />


      {/* ==================================================
          SECTION 03: TECHNOLOGY SOLUTIONS
      ================================================== */}

      <section
        id="canada-solutions"
        className="relative bg-[#05080f] px-5 py-20 sm:px-8 md:py-24 lg:px-16 lg:py-28 xl:px-20"
      >
        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-1/4 top-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mx-auto mb-16 max-w-3xl text-center">

            <span className="inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Our Technology Expertise
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Intelligent Solutions.
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Limitless Possibilities.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              We bring together technology, intelligence and innovation
              to help businesses solve complex challenges and build
              stronger digital foundations.
            </p>
          </div>

          {/* Solution list */}
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

            {solutions.map((item) => (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-500/10 sm:p-9"
              >

                {/* Card top accent */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-sm font-bold tracking-widest text-transparent">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-cyan-400 transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="mt-9 text-xl font-bold text-white transition-colors group-hover:text-cyan-300 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-8 text-gray-400 sm:text-base">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20" />

              </div>
            ))}

          </div>

          {/* Final CTA */}
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1628] via-[#0d1f35] to-[#102E50] px-7 py-14 text-center sm:px-12 lg:py-16">

            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]" />

            {/* Grid pattern inside CTA */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative mx-auto max-w-3xl">

              <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Let's Connect
              </span>

              <h3 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Your Business?
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-400">
                Let's explore how technology and innovation can
                create new opportunities for your business in Canada.
              </p>

              <a
                href="/contact"
                className="group mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-9 py-4 font-bold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
              >
                Contact iiiQbets
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default CanadaPage;