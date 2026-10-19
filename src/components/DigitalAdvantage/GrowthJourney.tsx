import { JOURNEY_STEPS } from './AdvantageData'
import IiqLogo from './Liqlogo'

export default function GrowthJourney() {
  return (
    <div
      className="iiq-advantage__journey relative overflow-hidden rounded-xl border border-emerald-500/10 bg-[#030a07] bg-[radial-gradient(ellipse_at_70%_100%,rgba(16,185,129,0.12),transparent_60%)] px-5 py-8 md:p-0"
      role="group"
      aria-label="Growth journey"
    >
      {/* Tablet / desktop: curve with milestones */}
      <div className="relative hidden aspect-[1000/351] w-full md:block">
        <svg viewBox="0 0 1000 351" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="iiq-journey-line" x1="0" x2="1">
              <stop offset="0" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="1" stopColor="#34d399" />
            </linearGradient>
          </defs>
          <path d="M30 308 C90 312 90 310 120 305 S230 270 285 256 S400 240 446 228 S560 210 634 191 S760 160 823 130 S940 95 1000 70" stroke="#10b981" strokeOpacity="0.25" strokeWidth="9" />
          <path d="M30 308 C90 312 90 310 120 305 S230 270 285 256 S400 240 446 228 S560 210 634 191 S760 160 823 130 S940 95 1000 70" stroke="url(#iiq-journey-line)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
        </svg>

        <span className="absolute left-[52%] top-[30%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-400/20 bg-[#050f0b] shadow-[0_0_50px_rgba(16,185,129,0.25)] lg:h-24 lg:w-24">
          <IiqLogo />
        </span>

        {JOURNEY_STEPS.map((s) => (
          <div key={s.no} className={`absolute ${s.pos}`}>
            <span className="absolute left-0 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400 bg-[#030a07] shadow-[0_0_10px_#10b981] after:absolute after:inset-[3px] after:rounded-full after:bg-emerald-400" />
            <div className="absolute bottom-3 left-0 w-28 -translate-x-1/2 text-center lg:w-40">
              <p className="m-0 text-[9px] font-semibold text-emerald-400">{s.no}</p>
              <p className="m-0 text-[9px] font-bold leading-tight text-white lg:text-[11px]">{s.title}</p>
              <p className="m-0 mt-0.5 hidden text-[8px] leading-tight text-slate-500 lg:block">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: vertical timeline */}
      <ol className="iiq-advantage__journey-list m-0 list-none space-y-6 border-l border-emerald-500/40 p-0 pl-6 md:hidden">
        {JOURNEY_STEPS.map((s) => (
          <li key={s.no} className="relative">
            <span className="absolute -left-[1.85rem] top-1 h-3 w-3 rounded-full border border-emerald-400 bg-emerald-400/30 shadow-[0_0_10px_#10b981]" />
            <p className="m-0 text-[10px] font-semibold text-emerald-400">{s.no}</p>
            <p className="m-0 text-sm font-bold text-white">{s.title}</p>
            <p className="m-0 text-xs text-slate-400">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}