import { HeroBadges, HeroButtons, HeroEyebrow } from './HeroShared'
import { HERO_IMAGES } from './HeroData'

export default function HeroSlideOne() {
  return (
    // Figma: left 662 / right 766
    <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:min-h-[570px] lg:grid-cols-[662fr_766fr] lg:gap-8">
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

      {/* Right image (Figma: 648 x 473) */}
      <div className="relative min-w-0 w-full lg:flex lg:justify-end">
        <div className="relative w-full lg:max-w-[648px]">
          <div className="pointer-events-none absolute -left-10 top-8 z-0 hidden h-32 w-32 rounded-full border border-sky-400/20 md:block" />
          <div className="pointer-events-none absolute -left-5 top-[4.5rem] z-0 hidden h-20 w-20 rounded-full border border-sky-400/20 md:block" />

          <img
            src={HERO_IMAGES.office}
            alt="Team collaborating in a modern office"
            className="relative z-10 block aspect-[648/473] w-full rounded-xl border border-sky-400/20 object-cover shadow-2xl shadow-sky-950/40"
          />

          <div className="absolute -bottom-6 right-2 z-20 w-[150px] rounded-md border border-slate-700/60 bg-[#070d1b]/95 p-4 text-[10px] text-slate-400 sm:-right-6 sm:w-[170px]">
            <p>People Process Technology</p>
            <span className="my-2 block h-0.5 w-6 bg-rose-500" />
            <p className="text-sm font-semibold leading-tight text-white">
              Build a Better Tomorrow
            </p>
          </div>

          <div className="absolute -right-2 -top-2 z-20 hidden border border-slate-800 bg-[#070d1b] px-4 py-2 text-[10px] font-bold tracking-widest text-sky-400 md:block">
            IDEA
          </div>
        </div>
      </div>
    </div>
  )
}