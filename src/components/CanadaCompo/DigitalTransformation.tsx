import React from "react";
import {
  Award,
  BarChart3,
  Building2,
  Cloud,
  Code2,
  Crown,
  HeartHandshake,
  Layers,
  Leaf,
  Lock,
  Megaphone,
  Play,
  Shield,
  ShoppingCart,
  Users,
  Workflow,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const leftServices: Service[] = [
  {
    title: "Process Reengineering for Digitization",
    description:
      "Revamp processes, optimize workflows, and drive seamless digital transformation.",
    icon: Workflow,
  },
  {
    title: "Digital Infra & E Commerce",
    description:
      "Build a robust digital infrastructure and end-to-end e-commerce solutions.",
    icon: ShoppingCart,
  },
  {
    title: "Digital Marketing",
    description:
      "Amplify your online presence with data-driven marketing strategies.",
    icon: Megaphone,
  },
];

const rightServices: Service[] = [
  {
    title: "Data Analytics & Business Intelligence",
    description:
      "Unlock actionable insights with cutting-edge analytics and BI solutions.",
    icon: BarChart3,
  },
  {
    title: "Cloud Services",
    description:
      "Embrace scalable, flexible and secure cloud solutions for your business.",
    icon: Cloud,
  },
  {
    title: "Application Development",
    description:
      "Turn ideas into user-centric, high-performing applications tailored to your business goals.",
    icon: Code2,
  },
];

const values: { icon: LucideIcon; text: string }[] = [
  { icon: Leaf, text: "Learn, Innovate, Keep it Simple" },
  { icon: Shield, text: "Respect Merit" },
  { icon: Users, text: "Teach & Grow" },
  { icon: HeartHandshake, text: "Collaborate" },
  { icon: Lock, text: "Be Open" },
  { icon: Crown, text: "Own" },
];

const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "100+", label: "Years of Experience", icon: Award },
  { value: "9+", label: "Technology Collaborations", icon: Layers },
  { value: "14+", label: "Industries & Domains", icon: Building2 },
];

/* ------------------------------------------------------------------ */
/* DECORATIVE BACKGROUND (dotted wave lines)                           */
/* ------------------------------------------------------------------ */

function Waves({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 400"
      fill="none"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute ${className}`}
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {Array.from({ length: 16 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${230 + i * 9} C 140 ${120 + i * 6}, 260 ${330 - i * 5}, 600 ${
            90 + i * 10
          }`}
          stroke="url(#waveGrad)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="0.1 5"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* SERVICE CARD                                                        */
/* ------------------------------------------------------------------ */

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group flex min-h-[92px] items-center gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-[#14162f]/90 to-[#0d1024]/90 px-4 py-3.5 backdrop-blur transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_8px_30px_rgba(139,92,246,0.22)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-purple-400/30 bg-gradient-to-br from-[#3b2a7a] to-[#1a1442] shadow-[0_0_16px_rgba(168,85,247,0.35)]">
        <Icon className="h-5 w-5 text-purple-200" strokeWidth={1.8} />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-[13px] font-semibold leading-snug text-white">
          {service.title}
        </h3>
        <p className="mt-1 text-[10.5px] leading-snug text-slate-400">
          {service.description}
        </p>
      </div>

      <ArrowRight
        className="h-4 w-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-purple-300"
        strokeWidth={1.8}
      />
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* CORE VALUES LIGHT BULB                                              */
/* ------------------------------------------------------------------ */

function CoreValuesBulb() {
  return (
    <div className="relative mx-auto h-[340px] w-[260px]">
      {/* soft glow behind the bulb */}
      <div className="absolute left-1/2 top-20 h-48 w-48 -translate-x-1/2 rounded-full bg-purple-600/30 blur-3xl" />

      <svg
        viewBox="0 0 260 340"
        fill="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="bulbStroke" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="45%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="bulbFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2b2266" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#10142e" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#090d20" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7e22ce" />
            <stop offset="50%" stopColor="#f5d0fe" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <filter id="neon" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* classic bulb: round top, curved taper, narrow neck */}
        <path
          d="M95 262
             C 95 240, 82 224, 62 202
             C 34 172, 18 150, 18 118
             C 18 56, 66 12, 130 12
             C 194 12, 242 56, 242 118
             C 242 150, 226 172, 198 202
             C 178 224, 165 240, 165 262 Z"
          fill="url(#bulbFill)"
          stroke="url(#bulbStroke)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          filter="url(#neon)"
        />

        {/* neck rim */}
        <line
          x1="95" y1="262" x2="165" y2="262"
          stroke="url(#bulbStroke)" strokeWidth="2"
        />

        {/* screw base: three glowing rings */}
        <g filter="url(#neon)">
          <rect x="88"  y="270" width="84" height="10" rx="5" fill="url(#baseGrad)" />
          <rect x="97"  y="286" width="66" height="10" rx="5" fill="url(#baseGrad)" />
          <rect x="108" y="302" width="44" height="10" rx="5" fill="url(#baseGrad)" />
        </g>
      </svg>

      {/* content sits inside the bulb: centered rows follow the taper */}
      <div className="absolute inset-x-0 top-[46px] flex flex-col items-center">
        <h3 className="mb-4 text-[15px] font-bold text-white">
          Our Core <span className="text-purple-300">Values</span>
        </h3>

        <ul className="flex flex-col items-center gap-[10px]">
          {values.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center justify-center gap-2 whitespace-nowrap text-[10.5px] leading-none text-slate-200"
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-purple-400" strokeWidth={2} />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN SECTION                                                        */
/* ------------------------------------------------------------------ */

export default function DigitalTransformation() {
  return (
    <section className="relative overflow-hidden bg-[#070a1a] font-['Poppins',sans-serif] text-white">
      {/* ============================ HERO ============================ */}
      <div className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#080b1c] via-[#0a0c20] to-[#150f33]">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-700/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl" />
        <Waves className="right-0 top-0 h-full w-[55%] opacity-70" />
        <Waves className="bottom-0 left-0 hidden h-1/2 w-[30%] -scale-x-100 opacity-40 md:block" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 pt-14 sm:px-8 md:grid-cols-2 lg:px-16">
          {/* ---- Left content ---- */}
          <div className="relative z-10 pb-10 text-center md:pb-14 md:text-left">
            <span className="mb-3 inline-block text-[13px] font-bold tracking-[2px] text-purple-400">
              YOUR PARTNER FOR
            </span>

            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              Digital
              <span className="relative block w-fit bg-gradient-to-r from-indigo-200 via-purple-300 to-purple-500 bg-clip-text text-transparent max-md:mx-auto">
                Transformation
                {/* swoosh underline */}
                <svg
                  viewBox="0 0 400 14"
                  className="absolute -bottom-1 left-0 h-3 w-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="swoosh" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                      <stop offset="60%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M4 10 C 120 4, 280 4, 396 3"
                    stroke="url(#swoosh)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-[13px] leading-6 text-slate-300 md:mx-0">
              iiiQ can be your partner of choice in your digital
              transformation journey. We help businesses elevate their value
              through technology, data and innovation.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
              <a
                href="#core-services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-2.5 text-[11px] font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(139,92,246,0.7)]"
              >
                Explore Our Services
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-white/[0.03] px-5 py-2.5 text-[11px] font-semibold text-white transition-all duration-300 hover:bg-purple-500/20"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-500/80">
                  <Play className="h-2 w-2 fill-white text-white" />
                </span>
                Watch Overview
              </a>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-8 grid max-w-md grid-cols-3 md:mx-0">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 ${
                    i > 0 ? "border-l border-white/15 pl-3 md:pl-4" : ""
                  } ${i < stats.length - 1 ? "pr-2" : ""}`}
                >
                  <Icon className="h-5 w-5 shrink-0 text-purple-400" strokeWidth={1.8} />
                  <div className="text-left">
                    <strong className="block text-base font-bold leading-none text-white">
                      {value}
                    </strong>
                    <span className="mt-1 block text-[8.5px] leading-tight text-slate-400">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Hero image ---- */}
          <div className="relative mx-auto flex h-[300px] w-full max-w-md items-end justify-center md:h-[400px] md:max-w-none lg:h-[430px]">
            {/* outer glowing ring */}
            <div className="absolute bottom-[-60px] left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full border-2 border-purple-400/70 shadow-[0_0_25px_rgba(168,85,247,0.6),inset_0_0_40px_rgba(168,85,247,0.15)] md:h-[380px] md:w-[380px]" />
            <div className="absolute bottom-0 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-purple-600/30 blur-[80px]" />

            <img
              src=""
              alt="Digital transformation professional"
              className="relative z-10 h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_0_25px_rgba(139,92,246,0.25)]"
            />
          </div>
        </div>
      </div>

      {/* ======================== CORE SERVICES ======================= */}
      <div
        id="core-services"
        className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-16"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/15 blur-[100px]" />
        <Waves className="bottom-0 left-0 h-48 w-1/3 opacity-30" />
        <Waves className="bottom-0 right-0 h-48 w-1/3 opacity-40" />

        <h2 className="relative z-10 mb-6 text-xl font-bold text-white">
          Our Core Services
        </h2>

        <div className="relative z-10 grid grid-cols-1 items-center gap-5 lg:grid-cols-[1fr_260px_1fr] lg:gap-6">
          <div className="flex flex-col gap-3.5">
            {leftServices.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>

          <div className="order-last lg:order-none">
            <CoreValuesBulb />
          </div>

          <div className="flex flex-col gap-3.5">
            {rightServices.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}