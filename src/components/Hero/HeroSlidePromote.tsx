import { useState } from 'react'
import { HeroBadges, HeroEyebrow } from './HeroShared'
import { HERO_IMAGES } from './HeroData'

const PANELS = [
  {
    id: 'strategies',
    image: HERO_IMAGES.dashboard,
    alt: 'Analytics dashboards and business technology',
    tag: '01 / STRATEGY',
    title: '7 Digital Marketing Strategies to Grow Your Business',
    text: 'Discover proven marketing strategies to increase brand awareness, attract potential customers, improve engagement, and grow your online presence.',
  },
  {
    id: 'campaigns',
    image: HERO_IMAGES.poster,
    alt: 'Digital marketing campaign',
    tag: '02 / CAMPAIGNS',
    title: 'Social Media & Brand Campaigns',
    text: 'Creative campaigns that tell your story, reach the right audience and turn followers into loyal customers.',
  },
  {
    id: 'planner',
    image: HERO_IMAGES.planner,
    alt: 'Business planning and content strategy',
    tag: '03 / CONTENT',
    title: 'Content Planning & Strategy',
    text: 'Plan, schedule and measure your content calendar so every post supports a clear business goal.',
  },
]

interface Props {
  variant?: 'a' | 'b'
}

export default function HeroSlidePromote({ variant = 'a' }: Props) {
  const [active, setActive] = useState(0)
  const compact = variant === 'b'

  const buttonClass =
    'rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400'

  const videoButtonClass =
    'flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/70 px-5 py-2.5 text-sm text-slate-200 transition hover:border-sky-400/60'

  return (
    <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:min-h-[570px] lg:grid-cols-[0.7fr_1.3fr] lg:gap-10">
      <div className="min-w-0 text-left">
        <HeroEyebrow text="YOUR NEXT BIG IDEA STARTS HERE" dot />

        <h1 className="!m-0 !text-white text-[42px] font-extrabold leading-[1.05] tracking-[-1.5px] sm:text-[54px] lg:text-[64px]">
          Promote
          <br />
          Your{' '}
          <span className="bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Business
          </span>
        </h1>

        <p
          className={`mt-6 max-w-[480px] leading-relaxed text-slate-400 ${
            compact ? 'text-sm' : 'text-sm sm:text-base'
          }`}
        >
          Discover powerful digital marketing solutions designed to grow your
          brand, connect with your audience and turn creative ideas into
          measurable business opportunities.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button type="button" className={buttonClass}>
            Explore →
          </button>
          <button type="button" className={videoButtonClass}>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400 text-[10px] text-sky-400">
              ▶
            </span>
            Watch Video
          </button>
        </div>

      </div>

      {/* Expandable panels: click (or hover / focus) one to open it big with its content */}
      <div className="flex h-[34rem] min-w-0 flex-col gap-4 sm:h-[22rem] sm:flex-row lg:h-[473px]">
        {PANELS.map((panel, i) => {
          const open = i === active
          return (
            <button
              key={panel.id}
              type="button"
              aria-pressed={open}
              aria-label={panel.title}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              style={{ flexGrow: open ? 4 : 1 }}
              className={`group relative m-0 min-h-0 min-w-0 basis-0 cursor-pointer overflow-hidden border p-0 text-left transition-[flex-grow] duration-500 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 motion-reduce:transition-none ${
                open
                  ? 'rounded-2xl border-sky-400/30'
                  : 'rounded-[2rem] border-white/10'
              }`}
            >
              <img
                src={panel.image}
                alt={panel.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  open
                    ? 'bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100'
                    : 'bg-black/30 opacity-100 group-hover:bg-black/10'
                }`}
              />

              {/* Content – only for the open panel */}
              <div
                className={`absolute bottom-0 left-0 w-full p-4 transition-all duration-500 sm:p-6 ${
                  open
                    ? 'translate-y-0 opacity-100 delay-150'
                    : 'pointer-events-none translate-y-3 opacity-0'
                }`}
              >
                <h2 className="text-base font-bold leading-snug text-white sm:text-xl">
                  {panel.title}
                </h2>
                <p className="mt-2 max-w-[34rem] text-xs leading-snug text-slate-300">
                  {panel.text}
                </p>
              </div>
            </button>
          )
        })}
      </div>

      {/* Badges: one full-width row under the content, like Figma */}
      <div className="lg:col-span-2">
        <HeroBadges />
      </div>
    </div>
  )
}