import { ADVANTAGE_CARDS, ADVANTAGE_FLOW, ADVANTAGE_STATS, type AdvantageCard } from './AdvantageData'
import IiqLogo from './Liqlogo'

function Card({ c }: { c: AdvantageCard }) {
  return (
    <article className="iiq-advantage__card relative overflow-hidden rounded-xl border border-[#1b2d63]/70 bg-gradient-to-b from-[#0b1736]/80 to-[#060d24]/80 p-5 transition hover:border-sky-400/50">
      <span className="absolute right-4 top-3 text-5xl font-extrabold text-white/5" aria-hidden="true">{c.no}</span>
      <span className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 ${c.tint}`}>{c.icon}</span>
      <h3 className="m-0 text-left text-sm font-bold text-white">{c.title}</h3>
      <p className="m-0 mt-2 text-left text-[11px] leading-relaxed text-slate-400">{c.text}</p>
    </article>
  )
}

export default function AdvantageGrid() {
  const { strategy, technology, integration, growth } = ADVANTAGE_CARDS
  return (
    <div className="iiq-advantage__grid grid gap-4 lg:grid-cols-[1fr_1.9fr_1fr]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><Card c={strategy} /><Card c={technology} /></div>

      {/* Centre card */}
      <div className="iiq-advantage__center relative order-first flex flex-col items-center overflow-hidden rounded-xl border border-[#1b2d63]/70 bg-gradient-to-b from-[#0b1736]/80 to-[#060d24]/80 p-5 md:order-none md:block md:min-h-[24rem]">
        <span className="absolute left-[40%] top-[10%] hidden h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8] md:block" />
        <span className="absolute bottom-[26%] left-[8%] hidden h-1.5 w-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e] md:block" />
        <span className="absolute bottom-[22%] right-[8%] hidden h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa] md:block" />

        <div className="iiq-advantage__orbit flex h-36 w-36 items-center justify-center rounded-full border border-sky-400/60 shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)] md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-[55%]">
          <IiqLogo />
        </div>

        <div className="mt-6 grid w-full grid-cols-2 gap-3 md:mt-0 md:contents">
          {ADVANTAGE_STATS.map((s) => (
            <div key={s.label} className={`iiq-advantage__stat flex items-baseline justify-center gap-2 rounded-lg border border-[#27407f]/70 bg-[#0a1535] px-3 py-3 shadow-lg md:absolute md:justify-start md:px-4 ${s.pos}`}>
              <span className="text-lg font-bold text-white">{s.value}</span>
              <span className="text-[7px] tracking-[0.15em] text-slate-400">{s.label}</span>
            </div>
          ))}
        </div>

        <ol className="iiq-advantage__flow m-0 mt-6 flex list-none flex-wrap items-center justify-center gap-2 p-0 md:absolute md:bottom-5 md:left-1/2 md:mt-0 md:-translate-x-1/2">
          {ADVANTAGE_FLOW.map((f, i) => (
            <li key={f} className="flex items-center gap-2">
              <span className="rounded-full border border-sky-500/40 bg-[#0a1535] px-3 py-1 text-[8px] tracking-[0.15em] text-slate-300">{f}</span>
              {i < ADVANTAGE_FLOW.length - 1 && <span className="text-[10px] text-slate-500" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"><Card c={integration} /><Card c={growth} /></div>
    </div>
  )
}