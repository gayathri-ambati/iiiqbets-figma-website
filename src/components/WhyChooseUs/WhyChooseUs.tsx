import { useEffect, useRef, useState } from 'react'
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
  end: number
  suffix: string
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
    end: 10,
    suffix: '+',
    title: 'Technology Collaborations',
    text: 'Every transformation solution should integrate deeply with existing technology environments, systems and workflows.',
    valueClass: 'from-sky-400 to-cyan-300',
    cardClass: 'from-[#0b1230] to-[#0d1a3a] border-sky-400/20 hover:border-sky-400/50 hover:shadow-sky-500/10',
  },
  {
    end: 15,
    suffix: '+',
    title: 'Industries & Domains',
    text: 'Industry knowledge and domain expertise help shape practical technology solutions around real business needs.',
    valueClass: 'from-violet-400 to-fuchsia-300',
    cardClass: 'from-[#160d30] to-[#1c1040] border-violet-400/20 hover:border-violet-400/50 hover:shadow-violet-500/10',
  },
]

const IIQ_WCU_COUNT_DURATION = 2000 // ms, shared by the number and the progress bar

/* Fires once when the element scrolls into view */
function useIiqWcuInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState<boolean>(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

interface IiqWcuCountUpProps {
  end: number
  suffix: string
  active: boolean
  duration: number
  className?: string
}

/* Counts 0 -> end with ease-out, then pops once when finished */
function IiqWcuCountUp({ end, suffix, active, duration, className = '' }: IiqWcuCountUpProps): JSX.Element {
  const [n, setN] = useState<number>(0)
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(end)
      setDone(true)
      return
    }
    const t0 = performance.now()
    let raf = 0
    const tick = (now: number): void => {
      const p = Math.min((now - t0) / duration, 1)
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setDone(true)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, end, duration])

  return (
    <span
      className={`iiq-wcu-count inline-block bg-gradient-to-r bg-clip-text tabular-nums text-transparent ${className} ${
        done ? 'animate-[iiqWcuPop_0.6s_ease-out] motion-reduce:animate-none' : ''
      }`}
    >
      {n}
      {suffix}
    </span>
  )
}

export default function WhyChooseUs(): JSX.Element {
  const { ref: cardsRef, inView: cardsInView } = useIiqWcuInView<HTMLDivElement>()
  const { ref: statsRef, inView: statsInView } = useIiqWcuInView<HTMLDivElement>()

  return (
    <section className="iiq-wcu-section relative w-full overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* unique keyframes */}
      <style>{`
        @keyframes iiqWcuFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes iiqWcuPop {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.14); }
          100% { transform: scale(1); }
        }
        @keyframes iiqWcuRing {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.08); }
        }
      `}</style>

      <div className="iiq-wcu-container mx-auto w-full max-w-7xl">
        {/* Eyebrow */}
        <div className="iiq-wcu-eyebrow flex items-center justify-center gap-3">
          <span
            className={`iiq-wcu-eyebrow-line h-px bg-sky-400 shadow-[0_0_8px_#38bdf8] transition-all duration-700 ease-out ${
              cardsInView ? 'w-10 opacity-100' : 'w-0 opacity-0'
            }`}
          />
          <span className="iiq-wcu-eyebrow-text text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-400">
            Why Choose Us
          </span>
        </div>

        {/* Skewed cards: 4 equal columns spread across the full container */}
        <div
          ref={cardsRef}
          className="iiq-wcu-cards mt-14 grid grid-cols-1 justify-items-center gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 lg:items-start"
        >
          {iiqWcuCards.map((card: IiqWcuCard, index: number) => {
            const isLower: boolean = index % 2 === 1
            return (
              <article
                key={card.id}
                style={{ transitionDelay: `${index * 140}ms` }}
                className={`iiq-wcu-col iiq-wcu-col-${card.id} flex w-[240px] flex-col gap-4 transition-all duration-700 ease-out motion-reduce:transition-none ${
                  isLower ? 'lg:mt-[120px] lg:flex-col-reverse' : ''
                } ${cardsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {/* Float wrapper (keeps float transform separate from hover transform) */}
                <div
                  className="iiq-wcu-float animate-[iiqWcuFloat_6s_ease-in-out_infinite] motion-reduce:animate-none"
                  style={{ animationDelay: `${index * 0.8}s` }}
                >
                  {/* Skewed image card */}
                  <a
                    href={card.href}
                    className="iiq-wcu-card group relative block h-[340px] w-[240px] -skew-x-[12deg] overflow-hidden rounded-xl border border-white/80 bg-gradient-to-br from-slate-700 to-slate-900 shadow-lg shadow-black/50 transition duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-400/30"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="iiq-wcu-card-img absolute inset-0 h-full w-full skew-x-[12deg] scale-[1.4] object-cover opacity-80 transition duration-700 group-hover:scale-[1.5] group-hover:opacity-100"
                    />
                    <div className="iiq-wcu-card-overlay absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* shine sweep on hover */}
                    <span className="iiq-wcu-card-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-1000 ease-out group-hover:translate-x-[400%]" />

                    <div className="iiq-wcu-card-content absolute inset-x-0 bottom-0 skew-x-[12deg] px-4 pb-5 pt-8 text-left">
                      <h3 className="iiq-wcu-card-title text-[17px] font-bold leading-tight text-white">
                        {card.title}
                      </h3>
                      <span className="iiq-wcu-card-cta mt-2 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-widest text-lime-400">
                        {card.cta}
                        <span className="iiq-wcu-card-arrow text-[12px] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          ↗
                        </span>
                      </span>
                    </div>
                  </a>
                </div>

                {/* Text block: same width as the card, aligned to the skewed edge */}
                <div
                  className={`iiq-wcu-text w-[240px] -translate-x-[36px] text-left ${
                    isLower ? 'lg:translate-x-[36px]' : ''
                  }`}
                >
                  <p
                    className={`iiq-wcu-text-label text-[9px] font-bold uppercase tracking-[0.2em] ${
                      isLower ? 'text-lime-400' : 'text-white'
                    }`}
                  >
                    {card.label}
                  </p>
                  <p className="iiq-wcu-text-body mt-2 break-words text-[11px] leading-relaxed text-slate-300">
                    {card.text}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* Stat cards: full container width, same span as the cards */}
        <div
          ref={statsRef}
          className="iiq-wcu-stats mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2"
        >
          {iiqWcuStats.map((stat: IiqWcuStat, index: number) => (
            <div
              key={stat.title}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`iiq-wcu-stat group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 text-left backdrop-blur transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none ${
                stat.cardClass
              } ${statsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              {/* decorative circle: pulses while the number counts */}
              <span
                className={`iiq-wcu-stat-circle pointer-events-none absolute -bottom-20 -right-12 h-48 w-48 rounded-full border border-white/10 transition duration-700 group-hover:scale-125 group-hover:border-white/20 ${
                  statsInView ? 'animate-[iiqWcuRing_2s_ease-in-out_1] motion-reduce:animate-none' : ''
                }`}
              />

              {/* animated number */}
              <div className="iiq-wcu-stat-value text-6xl font-extrabold leading-none">
                <IiqWcuCountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  active={statsInView}
                  duration={IIQ_WCU_COUNT_DURATION}
                  className={stat.valueClass}
                />
              </div>

              {/* progress bar fills in sync with the count */}
              <div className="iiq-wcu-stat-track mt-4 h-1 w-28 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`iiq-wcu-stat-bar h-full rounded-full bg-gradient-to-r ease-out motion-reduce:transition-none ${stat.valueClass}`}
                  style={{
                    width: statsInView ? `${Math.min(stat.end * 5, 100)}%` : '0%',
                    transitionProperty: 'width',
                    transitionDuration: `${IIQ_WCU_COUNT_DURATION}ms`,
                  }}
                />
              </div>

              <h4 className="iiq-wcu-stat-title mt-5 text-lg font-bold text-white">{stat.title}</h4>
              <p className="iiq-wcu-stat-text mt-2 max-w-md text-xs leading-relaxed text-slate-400">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}