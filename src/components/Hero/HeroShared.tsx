import { HERO_PRODUCTS } from './HeroData'

export function HeroButtons({ primary }: { primary: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        type="button"
        className="rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        {primary}
      </button>
      <button
        type="button"
        className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-900/50 px-5 py-2.5 text-sm text-slate-200 transition hover:border-sky-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400 text-[10px] text-sky-400">▶</span>
        Watch Video
      </button>
    </div>
  )
}

const BADGES = [
  { bold: 'Innovative', rest: 'Solutions', icon: '⚡', tint: 'bg-sky-500/15 text-sky-400' },
  { bold: 'Global', rest: 'Expertise', icon: '👥', tint: 'bg-blue-500/15 text-blue-400' },
  { bold: 'Reliable', rest: 'Support', icon: '🛡', tint: 'bg-violet-500/20 text-violet-300' },
]

export function HeroBadges() {
  return (
    <ul className="m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-4 p-0 lg:flex-nowrap">
      {BADGES.map((b) => (
        <li key={b.bold} className="flex items-center gap-2.5 whitespace-nowrap">
          <span className={`flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-base ${b.tint}`}>{b.icon}</span>
          <span className="text-xs text-slate-300 sm:text-sm">
            <strong className="font-semibold text-white">{b.bold}</strong> {b.rest}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function HeroEyebrow({ text, dot = false }: { text: string; dot?: boolean }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[11px] font-medium tracking-[0.25em] text-sky-300/80 sm:text-xs">
      <span className="h-px w-8 bg-sky-400" />
      {dot && <span className="-mr-1 text-sky-400">✦</span>}
      {text}
    </p>
  )
}

function ProductCard({ p }: { p: (typeof HERO_PRODUCTS)[number] }) {
  return (
    <li className="flex w-[220px] shrink-0 items-center gap-3 rounded-lg border border-slate-800 bg-[#0a1122] p-3 transition hover:border-sky-400/50">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white text-[11px] font-bold text-slate-800">
        {p.logo ? <img src={p.logo} alt="" className="h-full w-full object-contain" /> : p.initials}
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block text-sm font-semibold text-white">{p.label}</span>
        <span className="mt-0.5 block text-[11px] text-slate-400">
          {p.line1} <br />
          {p.line2}
        </span>
      </span>
    </li>
  )
}

/** Auto-scrolling marquee, moves LEFT -> RIGHT, pauses on hover. */
export function HeroProductStrip() {
  return (
    <div className="hero-marquee-wrap overflow-hidden motion-reduce:overflow-x-auto">
      <style>{`
        @keyframes hero-marquee { from { transform: translateX(-50%) } to { transform: translateX(0) } }
        .hero-marquee { animation: hero-marquee 30s linear infinite; will-change: transform; }
        .hero-marquee-wrap:hover .hero-marquee { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .hero-marquee { animation: none; } }
      `}</style>

      {/* list rendered twice -> seamless loop (translate by 50%) */}
      <ul aria-label="Our products" className="hero-marquee m-0 flex w-max list-none gap-4 p-0 pb-1">
        {[0, 1].map((copy) =>
          HERO_PRODUCTS.map((p) => (
            <ProductCard key={`${copy}-${p.id}`} p={p} />
          )),
        )}
      </ul>
    </div>
  )
}