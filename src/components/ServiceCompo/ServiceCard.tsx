import { Rise } from './ServiceShared'
import type { ServiceItem } from './ServiceShared'

// card image (moved here from Service.tsx)
const IMG = {
  earth: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=70',
}

/* ------------------------------------------------------------------ */
/*  Single service card                                                */
/*  Responsive: readable type on mobile/tablet, compact type at xl     */
/*  (xl = the 4-column layout where each card is narrow)               */
/* ------------------------------------------------------------------ */

export default function ServiceCard({ s, index }: { s: ServiceItem; index: number }) {
  return (
    <Rise delay={index * 80} className="h-full">
      <article className="flex h-full flex-col overflow-hidden rounded-lg bg-[#1b2268] shadow-[0_0_22px_rgba(255,23,99,.4),0_0_0_1px_rgba(255,23,99,.35)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_0_38px_rgba(255,23,99,.7),0_0_0_1px_rgba(255,23,99,.7)]">
        {/* media: badge (left) + price (right) over the earth image */}
        <div
          className="relative h-[138px] bg-[#0b0d1a] bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.earth})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,14,.5)] to-[rgba(27,34,104,.95)]" />
          <span className="absolute left-2.5 top-2.5 z-10 rounded-md border border-[#3a3f58] bg-[rgba(15,15,25,.7)] px-2.5 py-[7px] text-[9px] font-bold tracking-[.08em] text-[#8d93a8] xl:text-[8px]">
            {s.badge}
          </span>
          <span className="absolute right-3 top-[13px] z-10 text-[11px] font-extrabold text-[#2dd4c4] xl:text-[10px]">
            ${s.minRate}-${s.maxRate}/hr
          </span>
        </div>

        {/* body: centered tag / title / description, provider + button row */}
        <div className="relative z-10 -mt-[34px] flex flex-1 flex-col px-3 pb-3 text-center sm:px-4 sm:pb-4 xl:px-3 xl:pb-3">
          <span className="text-[9px] font-extrabold tracking-[.14em] text-[#b18cff] xl:text-[8px]">{s.tag}</span>
          <h3 className="mb-1.5 mt-2 text-[13px] font-bold leading-[1.3] text-white sm:text-sm xl:text-xs">{s.title}</h3>
          <p className="mb-5 text-[11px] leading-[1.6] text-[#8f98c8] sm:text-xs xl:text-[10px]">{s.desc}</p>
          <div className="mt-auto flex items-end justify-between gap-2 text-left">
            <div className="min-w-0">
              <b className="block break-words text-[9px] font-bold leading-[1.9] text-white xl:text-[8px]">{s.provider}</b>
              <b className="block break-words text-[9px] font-bold leading-[1.9] text-white xl:text-[8px]">{s.location}</b>
            </div>
            <button
              type="button"
              className="shrink-0 rounded-[5px] bg-[#ff1763] px-3 py-2 text-[10px] font-extrabold tracking-[.1em] text-[#1a0410] transition hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(255,23,99,.55)] xl:px-2.5 xl:py-[7px] xl:text-[9px]"
            >
              ENQUIRE →
            </button>
          </div>
        </div>
      </article>
    </Rise>
  )
}