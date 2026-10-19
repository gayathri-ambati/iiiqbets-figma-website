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

export default function TechLogos() {
  return (
    <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:gap-4 xl:grid-cols-6">
      {TECHS.map((t) => (
        <li
          key={t.label}
          className={`flex min-h-[4.5rem] items-center justify-center gap-3 rounded-2xl px-4 py-3 transition hover:-translate-y-0.5 hover:border-sky-400/50 sm:min-h-[5rem] border border-[#1b2d63]/70 bg-gradient-to-b from-[#0b1736]/80 to-[#060d24]/80 backdrop-blur-sm`}
        >
          <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${t.tile}`}>{t.icon}</span>
          <span className="text-xs font-medium leading-tight text-slate-100 sm:text-[13px]">{t.name}</span>
        </li>
      ))}
    </ul>
  )
}