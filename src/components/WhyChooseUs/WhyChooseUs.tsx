import type { JSX } from 'react'

interface IiqWcuCard {
  id: string
  label: string
  title: string
  cta: string
  href: string
  image: string
  text: string
}

interface IiqWcuStat {
  value: string
  title: string
  text: string
  valueClass: string
  cardClass: string
}

const iiqWcuCards: IiqWcuCard[] = [
  {
    id: '01',
    label: '01 / EXPERIENCE',
    title: 'Technology Experience',
    cta: 'LEARN MORE',
    href: '#',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    text: 'More than two decades of combined expertise across technology, engineering and business transformation.',
  },
  {
    id: '02',
    label: '02 / EXCELLENCE',
    title: 'Engineering Excellence',
    cta: 'EXPLORE OUR WORK',
    href: '#',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    text: 'We develop dependable digital products and scalable solutions built around your business requirements.',
  },
  {
    id: '03',
    label: '03 / COLLABORATION',
    title: 'People First, Always',
    cta: 'MEET OUR APPROACH',
    href: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    text: 'Strong partnerships, transparent communication and collaborative thinking drive better technology outcomes.',
  },
  {
    id: '04',
    label: '04 / RESULTS',
    title: 'Results That Matter',
    cta: 'SEE THE DIFFERENCE',
    href: '#',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80',
    text: 'We focus on measurable improvements, practical innovation and solutions that support your long-term goals.',
  },
]

const iiqWcuStats: IiqWcuStat[] = [
  {
    value: '10+',
    title: 'Technology Collaborations',
    text: 'Every transformation solution should integrate deeply with existing technology environments, systems and workflows.',
    valueClass: 'from-sky-400 to-cyan-300',
    cardClass: 'from-[#0b1230] to-[#0d1a3a] border-sky-400/20',
  },
  {
    value: '15+',
    title: 'Industries & Domains',
    text: 'Industry knowledge and domain expertise help shape practical technology solutions around real business needs.',
    valueClass: 'from-violet-400 to-fuchsia-300',
    cardClass: 'from-[#160d30] to-[#1c1040] border-violet-400/20',
  },
]

export default function WhyChooseUs(): JSX.Element {
  return (
    <section className="iiq-wcu-section relative w-full overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="iiq-wcu-container mx-auto max-w-6xl">
        {/* Eyebrow */}
        <div className="iiq-wcu-eyebrow flex items-center justify-center gap-3">
          <span className="iiq-wcu-eyebrow-line h-px w-10 bg-sky-400" />
          <span className="iiq-wcu-eyebrow-text text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-400">
            Why Choose Us
          </span>
        </div>

        {/* Skewed cards */}
        <div className="iiq-wcu-cards mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {iiqWcuCards.map((card: IiqWcuCard, index: number) => {
            const isLower: boolean = index % 2 === 1
            return (
              <article
                key={card.id}
                className={`iiq-wcu-col iiq-wcu-col-${card.id} flex flex-col gap-4 lg:min-h-[560px] ${
                  isLower ? 'lg:flex-col-reverse lg:justify-end' : 'lg:justify-start'
                }`}
              >
                {/* Skewed image card */}
                <a
                  href={card.href}
                  className="iiq-wcu-card group relative mx-auto block h-[280px] w-[170px] -skew-x-[12deg] overflow-hidden rounded-lg border border-white/80 bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg shadow-black/50 sm:h-[300px] sm:w-[180px] lg:h-[290px] lg:w-[160px] xl:h-[300px] xl:w-[170px]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="iiq-wcu-card-img absolute inset-0 h-full w-full skew-x-[12deg] scale-[1.35] object-cover opacity-70 transition duration-500 group-hover:scale-[1.45] group-hover:opacity-90"
                  />
                  <div className="iiq-wcu-card-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="iiq-wcu-card-content absolute inset-x-0 bottom-0 skew-x-[12deg] px-3 pb-4 pt-8">
                    <h3 className="iiq-wcu-card-title text-[15px] font-bold leading-tight text-white">
                      {card.title}
                    </h3>
                    <span className="iiq-wcu-card-cta mt-2 inline-flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-widest text-lime-400">
                      {card.cta}
                      <span className="iiq-wcu-card-arrow text-[11px] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </span>
                  </div>
                </a>

                {/* Text block */}
                <div
                  className={`iiq-wcu-text mx-auto w-full max-w-[220px] text-left ${
                    isLower ? 'lg:mb-2' : 'lg:mt-2'
                  }`}
                >
                  <p className="iiq-wcu-text-label text-[8px] font-bold uppercase tracking-[0.2em] text-lime-400 lg:text-white">
                    {card.label}
                  </p>
                  <p className="iiq-wcu-text-body mt-2 text-[10px] leading-relaxed text-slate-400">
                    {card.text}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Stat cards */}
        <div className="iiq-wcu-stats mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {iiqWcuStats.map((stat: IiqWcuStat) => (
            <div
              key={stat.value}
              className={`iiq-wcu-stat relative overflow-hidden rounded-2xl border bg-gradient-to-br p-7 backdrop-blur ${stat.cardClass}`}
            >
              <span className="iiq-wcu-stat-circle pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full border border-white/10" />
              <div
                className={`iiq-wcu-stat-value bg-gradient-to-r bg-clip-text text-5xl font-extrabold text-transparent ${stat.valueClass}`}
              >
                {stat.value}
              </div>
              <h4 className="iiq-wcu-stat-title mt-6 text-base font-bold text-white">
                {stat.title}
              </h4>
              <p className="iiq-wcu-stat-text mt-2 max-w-sm text-[11px] leading-relaxed text-slate-400">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}