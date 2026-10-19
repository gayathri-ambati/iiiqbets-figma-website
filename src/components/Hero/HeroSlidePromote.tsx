import { HeroBadges, HeroEyebrow } from './HeroShared'
import { HERO_IMAGES } from './HeroData'

interface Props {
  variant?: 'a' | 'b'
}

export default function HeroSlidePromote({ variant = 'a' }: Props) {
  const compact = variant === 'b'

  const buttonClass =
    'rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400'

  const videoButtonClass =
    'flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-950/70 px-5 py-2.5 text-sm text-slate-200 transition hover:border-sky-400/60'

  return (
    <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
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

        <div className="mt-8 hidden md:block lg:hidden">
          <HeroBadges />
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid min-w-0 grid-cols-2 gap-4 sm:grid-cols-[2.2fr_1fr_1fr]">
        <figure className="relative col-span-2 m-0 min-w-0 overflow-hidden rounded-xl border border-sky-400/15 sm:col-span-1">
          <img
            src={HERO_IMAGES.dashboard}
            alt="Analytics dashboards and business technology"
            // Drastically increased the minimum height of the main image
            className="block aspect-[16/10] w-full object-cover sm:aspect-auto sm:h-full sm:min-h-[20rem] lg:min-h-[24rem]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <figcaption className="absolute bottom-0 left-0 p-4 sm:p-6">
            <h2 className="text-base font-bold leading-snug text-white sm:text-xl">
              7 Digital Marketing Strategies to Grow Your Business
            </h2>

            <p className="mt-2 hidden text-xs leading-snug text-slate-300 sm:block">
              Discover proven marketing strategies to increase brand
              awareness, attract potential customers, improve engagement,
              and grow your online presence.
            </p>
          </figcaption>
        </figure>

        <figure className="m-0 min-w-0 overflow-hidden rounded-xl border border-white/10">
          <img
            src={HERO_IMAGES.poster}
            alt="Digital marketing campaign"
            className="h-full min-h-[10rem] w-full object-cover sm:min-h-[20rem] lg:min-h-[24rem]"
          />
        </figure>

        <figure className="m-0 col-span-2 min-w-0 overflow-hidden rounded-xl border border-white/10 sm:col-span-1">
          <img
            src={HERO_IMAGES.planner}
            alt="Business planning and content strategy"
            className="h-full min-h-[10rem] w-full object-cover sm:min-h-[20rem] lg:min-h-[24rem]"
          />
        </figure>
      </div>
    </div>
  )
}