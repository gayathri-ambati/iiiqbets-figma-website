import type { ReactNode } from 'react'

interface Tech { name: ReactNode; label: string; icon: ReactNode; tile: string }

const svg = (children: ReactNode) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">{children}</svg>
)

const TECHS: Tech[] = [
  {
    label: 'Power BI', name: 'Power BI', tile: 'bg-[#2a2a1c]',
    icon: svg(<><rect x="3" y="3" width="18" height="18" rx="3" stroke="#f2c811" strokeWidth="2" /><path d="M8 17v-5M12 17V8M16 17v-3" stroke="#f2c811" strokeWidth="2.2" strokeLinecap="round" /></>),
  },
  {
    label: 'Google AI', name: 'Google AI', tile: 'bg-[#16254d]',
    icon: <span className="text-2xl font-bold text-[#4285f4]">G</span>,
  },
  {
    label: 'Google Analytics', name: <>Google<br />Analytics</>, tile: 'bg-transparent',
    icon: svg(<><path d="M5 20V4M5 20h15" stroke="#f9ab00" strokeWidth="2" strokeLinecap="round" /><path d="m8 15 4-5 3 3 4-6" stroke="#f9ab00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>),
  },
  {
    label: 'Amazon AWS', name: 'Amazon AWS', tile: 'bg-[#1f2230]',
    icon: <span className="text-sm font-extrabold leading-none text-white">aws<span className="mt-0.5 block h-0.5 w-full rounded-full bg-[#ff9900]" /></span>,
  },
  {
    label: 'Flutter', name: 'Flutter', tile: 'bg-[#12265a]',
    icon: svg(<><path d="m12 4 8 4-8 4-8-4z" fill="#38bdf8" /><path d="m4 12 8 4 8-4M4 16l8 4 8-4" stroke="#38bdf8" strokeWidth="2" strokeLinejoin="round" /></>),
  },
  {
    label: 'React', name: 'React', tile: 'bg-[#10264f]',
    icon: svg(<><circle cx="12" cy="12" r="1.8" fill="#22d3ee" /><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#22d3ee" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#22d3ee" strokeWidth="1.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#22d3ee" strokeWidth="1.5" transform="rotate(120 12 12)" /></>),
  },
]

/* One full set of cards. Rendered twice so the loop is seamless. */
const Track = ({ hidden = false }: { hidden?: boolean }) => (
  <ul
    className="m-0 flex shrink-0 list-none items-center gap-4 p-0 pr-4"
    aria-hidden={hidden || undefined}
  >
    {TECHS.map((t) => (
      <li
        key={t.label}
        className="flex h-[5rem] w-[15.5rem] shrink-0 items-center justify-center gap-3 rounded-2xl border border-[#1b2d63]/70 bg-gradient-to-b from-[#0b1736]/80 to-[#060d24]/80 px-4 py-3 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-400/50"
      >
        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${t.tile}`}>{t.icon}</span>
        <span className="text-xs font-medium leading-tight text-slate-100 sm:text-[13px]">{t.name}</span>
      </li>
    ))}
  </ul>
)

export default function TechLogos() {
  return (
    <>
      <style>{`
        @keyframes tech-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .tech-marquee-track { animation: tech-marquee 28s linear infinite; }
        .tech-marquee:hover .tech-marquee-track,
        .tech-marquee:focus-within .tech-marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .tech-marquee-track { animation: none; }
        }
      `}</style>

      <div
        className="tech-marquee relative overflow-hidden py-1"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)',
        }}
      >
        {/* width: max-content + two identical tracks => -50% shift loops perfectly */}
        <div className="tech-marquee-track flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </>
  )
}