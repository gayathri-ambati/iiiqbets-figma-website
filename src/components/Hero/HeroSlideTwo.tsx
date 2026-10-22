import { HeroBadges, HeroButtons, HeroEyebrow } from './HeroShared'
import { HERO_SERVICES, type HeroService } from './HeroData'

const TAGS: Record<string, string> = {
  sw: '01 / DEV',
  cloud: '02 / CLOUD',
  ai: '03 / AI',
  data: '04 / ANALYTICS',
  consult: '05 / ADVISORY',
  sec: '06 / SECURITY',
  it: '07 / SUPPORT',
}

function ServiceCard({ service }: { service: HeroService }) {
  return (
    <article className="relative flex h-48 shrink-0 flex-col justify-end overflow-hidden rounded-xl border border-sky-400/20 bg-gradient-to-br from-[#0c1830] to-[#050b17] p-4">
      {service.image && (
        <img
          src={service.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050b17] via-[#050b17]/65 to-transparent" />

      <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-md border border-sky-400/40 bg-sky-500/20 text-sm text-sky-200 backdrop-blur-sm">
        {service.icon}
      </span>
      <span className="absolute right-4 top-4 text-[9px] font-medium tracking-[0.2em] text-sky-200/70">
        {TAGS[service.id]}
      </span>

      <div className="relative">
        <h3 className="!m-0 !text-white text-sm font-semibold leading-tight">
          {service.title}
        </h3>
        <p className="mt-1 text-[11px] leading-snug text-slate-200">
          {service.text}
        </p>
      </div>
    </article>
  )
}

/** Seamless vertical loop. up = bottom->top, down = top->bottom. */
function MovingColumn({
  items,
  dir,
  duration,
  delay = 0,
  className = '',
}: {
  items: HeroService[]
  dir: 'up' | 'down'
  duration: number
  delay?: number
  className?: string
}) {
  return (
    <div className={`relative h-full min-w-0 overflow-hidden ${className}`}>
      <div
        className={dir === 'up' ? 'hero-col-up' : 'hero-col-down'}
        style={{
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`, // negative = start part-way, so columns are staggered
        }}
      >
        {[0, 1, 2].map((copy) => (
          <div key={copy} aria-hidden={copy > 0} className="flex flex-col gap-4 pb-4">
            {items.map((s) => (
              <ServiceCard key={`${copy}-${s.id}`} service={s} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSlideTwo() {
  const pick = (ids: string[]) =>
    ids.map((id) => {
      const s = HERO_SERVICES.find((item) => item.id === id)
      if (!s) throw new Error(`Hero service "${id}" was not found`)
      return s
    })

  return (
    <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:min-h-[570px] lg:grid-cols-[662fr_766fr] lg:gap-8">
      <style>{`
        @keyframes hero-up   { from { transform: translateY(0) }        to { transform: translateY(-33.3333%) } }
        @keyframes hero-down { from { transform: translateY(-33.3333%) } to { transform: translateY(0) } }
        .hero-col-up   { animation: hero-up   linear infinite; will-change: transform; }
        .hero-col-down { animation: hero-down linear infinite; will-change: transform; }
        .hero-services:hover .hero-col-up,
        .hero-services:hover .hero-col-down { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .hero-col-up, .hero-col-down { animation: none; }
        }
      `}</style>

      <div className="min-w-0 text-left">
        <HeroEyebrow text="DIGITAL TRANSFORMATION SPECIALISTS" />

        <h1 className="!m-0 !text-white text-[42px] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-[54px] lg:text-[64px]">
          Empowering
          <br />
          Businesses with
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Smarter
            <br />
            Technology
          </span>
        </h1>

        <p className="mt-6 max-w-[480px] text-sm leading-[1.7] text-slate-400 sm:text-base">
          Explore our comprehensive suite of products including CRM, HRMS,
          POS, SFA, ERP, E-COMM, M-COMM and more — built to streamline
          operations and accelerate your growth.
        </p>

        <div className="mt-8">
          <HeroButtons primary="Explore Our Products" />
        </div>

        <div className="mt-8">
          <HeroBadges />
        </div>
      </div>

      {/* Right panel: explicit row height so columns always get a real height */}
      <div
        className="hero-services grid h-[460px] min-w-0 grid-cols-2 gap-4 overflow-hidden sm:grid-cols-3 lg:h-[570px]"
        style={{
          gridTemplateRows: '100%',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, transparent 0, #000 6%, #000 94%, transparent 100%)',
        }}
      >
        <MovingColumn items={pick(['sw', 'data'])} dir="up" duration={26} delay={4} />
        <MovingColumn items={pick(['cloud', 'ai', 'consult'])} dir="down" duration={30} delay={10} />
        <MovingColumn
          items={pick(['sec', 'it'])}
          dir="up"
          duration={26}
          delay={14}
          className="hidden sm:block"
        />
      </div>
    </div>
  )
}