import { useEffect, useRef, useState } from 'react'
import type { JSX, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'

interface IiqDexItem {
  id: string
  title: string
  text: string
  image: string
}

interface IiqDexSlot {
  x: number
  y: number
}

const iiqDexTexture =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
const iiqDexAnalytics =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'

/* Rows are used for the static (mobile / tablet) layout.
   Flattened order = positions 1..7:
   [1] [2] / [3] [4] [5] / [6] [7] */
const iiqDexRows: IiqDexItem[][] = [
  [
    {
      id: 'bpr',
      title: 'Business Process Reengineering',
      text: 'We create value by understanding and improving business processes, redesigning workflows and guiding process owners toward more efficient operations.',
      image: iiqDexTexture,
    },
    {
      id: 'dis',
      title: 'Digital Infrastructure Services',
      text: 'We design secure websites, chatbots, payment gateways, ERP and CRM systems, focusing on integration, functionality and great UI/UX.',
      image: iiqDexTexture,
    },
  ],
  [
    {
      id: 'app',
      title: 'Application Development',
      text: 'We develop web, mobile, desktop and hybrid applications tailored to your business requirements and workflows.',
      image: iiqDexTexture,
    },
    {
      id: 'dt',
      title: 'Digital Transformation',
      text: 'Smart technology, integrated systems and innovative solutions for modern businesses.',
      image: iiqDexAnalytics,
    },
    {
      id: 'dm',
      title: 'Digital Marketing',
      text: 'Grow your online presence through SEO, keyword analysis, content creation, social media marketing and social media management.',
      image: iiqDexTexture,
    },
  ],
  [
    {
      id: 'cloud',
      title: 'Cloud Services',
      text: 'We help plan cloud migration, move IT systems and applications to the cloud, improve compliance and simplify operations.',
      image: iiqDexTexture,
    },
    {
      id: 'bi',
      title: 'Data Analytics & BI',
      text: 'We provide data management, analytics, business intelligence and advisory services to transform information into useful business insights.',
      image: iiqDexTexture,
    },
  ],
]

const iiqDexItems: IiqDexItem[] = iiqDexRows.flat()

/* Pixel coordinates of the 7 positions (index 0 = position 1 ... index 6 = position 7).
   Hex = 190 x 210, horizontal gap 12, rows overlap by 32 -> pitch 202 / 178 */
const IIQ_DEX_SLOTS: IiqDexSlot[] = [
  { x: 101, y: 0 }, // 1
  { x: 303, y: 0 }, // 2
  { x: 0, y: 178 }, // 3
  { x: 202, y: 178 }, // 4 (centre, never moves)
  { x: 404, y: 178 }, // 5
  { x: 101, y: 356 }, // 6
  { x: 303, y: 356 }, // 7
]

/* Clockwise loop around the centre: 1 -> 2 -> 5 -> 7 -> 6 -> 3 -> (back to 1)
   (zero-based slot indexes) */
const IIQ_DEX_RING: number[] = [0, 1, 4, 6, 5, 2]

const IIQ_DEX_STEP_MS = 3500 // time between moves
const IIQ_DEX_MOVE_MS = 1100 // how long one move takes

const iiqDexHexClip =
  '[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]'

/* Which slot an item sits in after `step` moves */
function iiqDexGetSlot(initialSlot: number, step: number): number {
  const ringIndex: number = IIQ_DEX_RING.indexOf(initialSlot)
  if (ringIndex === -1) return initialSlot // centre hexagon stays
  return IIQ_DEX_RING[(ringIndex + step) % IIQ_DEX_RING.length]
}

/* Fires once when the element scrolls into view */
function useIiqDexInView<T extends HTMLElement>() {
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
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

function IiqDexHex({ item }: { item: IiqDexItem }): JSX.Element {
  return (
    <article
      className={`iiq-dex-hex iiq-dex-hex-${item.id} group relative h-[210px] w-[190px] bg-slate-200/80 transition-colors duration-300 hover:bg-sky-300 ${iiqDexHexClip}`}
    >
      <div
        className={`iiq-dex-hex-inner absolute inset-[3px] overflow-hidden bg-gradient-to-br from-[#0b2a5c] via-[#07122e] to-[#030a1c] ${iiqDexHexClip}`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e: SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.style.display = 'none'
          }}
          className="iiq-dex-hex-img absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-80"
        />
        <div className="iiq-dex-hex-overlay absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/30 to-[#030712]/60" />

        <div className="iiq-dex-hex-content relative flex h-full flex-col items-center justify-center px-9 text-center">
          <h3 className="iiq-dex-hex-title text-[13px] font-bold leading-tight text-white">
            {item.title}
          </h3>
          <p className="iiq-dex-hex-text mt-2 text-[8px] leading-snug text-slate-200">
            {item.text}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function DigitalExpertise(): JSX.Element {
  const { ref: honeycombRef, inView } = useIiqDexInView<HTMLDivElement>()
  const [step, setStep] = useState<number>(0)
  const [paused, setPaused] = useState<boolean>(false)

  /* Advance the clockwise rotation every IIQ_DEX_STEP_MS */
  useEffect(() => {
    if (!inView || paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setStep((s: number) => s + 1), IIQ_DEX_STEP_MS)
    return () => window.clearInterval(id)
  }, [inView, paused])

  return (
    <section className="iiq-dex-section relative w-full overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="iiq-dex-container mx-auto max-w-6xl">
        <h2
          className={`iiq-dex-heading text-center text-3xl font-extrabold tracking-tight text-white transition-all duration-700 ease-out motion-reduce:transition-none sm:text-4xl ${
            inView ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          Our Digital Expertise
        </h2>

        {/* Honeycomb */}
        <div ref={honeycombRef} className="iiq-dex-honeycomb mt-14">
          {/* Desktop: 7 hexagons travelling clockwise around the centre one */}
          <div
            className="iiq-dex-orbit relative mx-auto hidden h-[566px] w-[594px] lg:block"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {iiqDexItems.map((item: IiqDexItem, index: number) => {
              const slot: IiqDexSlot = IIQ_DEX_SLOTS[iiqDexGetSlot(index, step)]
              return (
                <div
                  key={item.id}
                  style={{
                    transform: `translate(${slot.x}px, ${slot.y}px)`,
                    transitionDuration: `${IIQ_DEX_MOVE_MS}ms`,
                  }}
                  className={`iiq-dex-mover iiq-dex-mover-${item.id} absolute left-0 top-0 transition-transform ease-in-out motion-reduce:transition-none`}
                >
                  <div
                    style={{ transitionDelay: `${index * 120}ms` }}
                    className={`iiq-dex-fade transition-opacity duration-700 ease-out motion-reduce:transition-none ${
                      inView ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <IiqDexHex item={item} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile / tablet: static rows, no rotation */}
          <div className="iiq-dex-static flex flex-col items-center gap-4 lg:hidden">
            {iiqDexRows.map((row: IiqDexItem[], rowIndex: number) => (
              <div
                key={`iiq-dex-row-${rowIndex}`}
                className={`iiq-dex-row iiq-dex-row-${rowIndex + 1} flex flex-wrap justify-center gap-4`}
              >
                {row.map((item: IiqDexItem) => (
                  <IiqDexHex key={item.id} item={item} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div
          className={`iiq-dex-cta mt-14 flex flex-col items-start justify-between gap-5 rounded-xl border border-indigo-400/20 bg-gradient-to-r from-[#0b1230] to-[#1a1040] px-6 py-6 transition-all delay-500 duration-700 ease-out motion-reduce:transition-none sm:flex-row sm:items-center ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="iiq-dex-cta-copy">
            <h3 className="iiq-dex-cta-title text-lg font-bold text-white sm:text-xl">
              Let&apos;s Start Your Digital Transformation Journey!
            </h3>
            <p className="iiq-dex-cta-text mt-1 text-[11px] text-slate-400">
              Let&apos;s turn your technology challenges into opportunities for growth.
            </p>
          </div>
          <Link
            to="/contact"
            className="iiq-dex-cta-btn inline-flex shrink-0 items-center rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-2.5 text-[11px] font-bold text-white shadow-lg shadow-pink-600/40 transition hover:-translate-y-0.5 hover:shadow-pink-600/60"
          >
            Contact us →
          </Link>
        </div>
      </div>
    </section>
  )
}