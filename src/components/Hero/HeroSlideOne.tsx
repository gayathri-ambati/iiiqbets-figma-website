import { HeroBadges, HeroButtons, HeroEyebrow } from './HeroShared'
import { HERO_IMAGES } from './HeroData'

export default function HeroSlideOne() {
  return (
    <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1fr] lg:gap-12">
      {/* Left content */}
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

      {/* Right image and decorative elements */}
      <div className="relative min-w-0 w-full md:pl-4">
        <div className="pointer-events-none absolute -left-8 top-10 z-0 hidden h-28 w-28 rounded-full border border-sky-400/20 md:block" />
        <div className="pointer-events-none absolute -left-4 top-20 z-0 hidden h-16 w-16 rounded-full border border-sky-400/20 md:block" />

        <div className="relative z-10 w-full">
          <img
            src={HERO_IMAGES.office}
            alt="Team collaborating in a modern office"
            // Adjusted aspect ratio to match the larger text block height
            className="block aspect-[4/3] w-full rounded-xl border border-sky-400/20 object-cover shadow-2xl shadow-sky-950/40 lg:aspect-[1.1/1]"
          />

          <div className="absolute -bottom-4 right-2 w-[150px] rounded-md border border-slate-700/60 bg-[#070d1b]/95 p-4 text-[10px] text-slate-400 sm:-right-4 sm:w-[170px]">
            <p>People Process Technology</p>
            <span className="my-2 block h-0.5 w-6 bg-rose-500" />
            <p className="text-sm font-semibold leading-tight text-white">
              Build a Better Tomorrow
            </p>
          </div>
        </div>

        <div className="absolute -right-2 -top-2 z-20 hidden border border-slate-800 bg-[#070d1b] px-4 py-2 text-[10px] font-bold tracking-widest text-sky-400 md:block">
          IDEA
        </div>
      </div>
    </div>
  )
}