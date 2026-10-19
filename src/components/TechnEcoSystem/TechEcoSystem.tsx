import TechLogos from './TechLogo'
import TechShowcase from './TechShowCase'

export default function TechEcosystem({ videoSrc }: { videoSrc?: string }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#03050f] px-4 py-14 text-left font-[Inter,system-ui,sans-serif] text-white sm:px-8 lg:px-12 lg:py-20"
      aria-labelledby="tech-ecosystem-title"
    >
      {/* Background glows + accent dots */}
      <span className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
      <span className="absolute left-[4%] top-[18%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />
      <span className="absolute right-[8%] top-[48%] h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_#a78bfa]" />
      <span className="absolute bottom-[6%] left-[40%] h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_#38bdf8]" />

      <div className="relative mx-auto w-full max-w-[1280px]">
        <header className="mx-auto max-w-2xl text-center">
          <p className="m-0 text-center text-[10px] font-medium tracking-[0.3em] text-sky-400 sm:text-[11px]">TECHNOLOGY ECOSYSTEM</p>
          <h2
            id="tech-ecosystem-title"
            className="m-0 mt-3 text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          >
            <span className="bg-gradient-to-r from-[#ff2e7e] via-[#a855f7] to-[#312e81] bg-clip-text text-transparent">
              Powered By Leading Technologies
            </span>
          </h2>
          <p className="m-0 mt-3 text-center text-xs leading-6 text-slate-300 sm:text-sm">
            We combine modern technology, intelligent platforms and proven frameworks to build scalable digital solutions that help
            businesses grow faster.
          </p>
        </header>

        <div className="mt-10"><TechLogos /></div>
        <div className="mt-14 lg:mt-16"><TechShowcase videoSrc={videoSrc} /></div>
      </div>
    </section>
  )
}