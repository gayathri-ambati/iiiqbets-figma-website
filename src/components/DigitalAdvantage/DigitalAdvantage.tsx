import AdvantageGrid from './AdvantageGrid'
import AdvantageCta from './Advantagecta'
import GrowthJourney from './GrowthJourney'

export default function DigitalAdvantage() {
  return (
    <section
      className="iiq-advantage relative w-full overflow-hidden bg-[#03050f] px-4 py-14 text-left font-[Inter,system-ui,sans-serif] text-white sm:px-8 lg:px-12 lg:py-20"
      aria-labelledby="iiq-advantage-title"
    >
      <div className="iiq-advantage__inner relative mx-auto w-full max-w-[1100px]">
        <header className="iiq-advantage__header">
          <p className="m-0 flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-sky-400">
            <span className="h-px w-8 bg-sky-400" />
            DIGITAL TRANSFORMATION
          </p>
          <h2 id="iiq-advantage-title" className="m-0 mt-3 text-left text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            From Business challenges to<br />
            <span className="bg-gradient-to-r from-[#ff1f1f] via-[#b91c3c] to-[#3b2a7a] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
              Digital Advantage.
            </span>
          </h2>
          <p className="m-0 mt-5 max-w-xl text-left text-xs leading-6 text-slate-400 sm:text-[13px]">
            We don’t just build software. We understand your business, connect technology to your operations and create digital
            solutions designed around measurable business outcomes.
          </p>
        </header>

        <div className="mt-10"><AdvantageGrid /></div>
        <div className="mt-5"><AdvantageCta /></div>
        <div className="mt-10"><GrowthJourney /></div>
      </div>
    </section>
  )
}