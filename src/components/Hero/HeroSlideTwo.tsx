import { HeroBadges, HeroButtons, HeroEyebrow } from './HeroShared'
import { HERO_SERVICES, type HeroService } from './HeroData'

function ServiceCard({
  service,
  tall = false,
}: {
  service: HeroService
  tall?: boolean
}) {
  return (
    <article
      className={`flex flex-col rounded-xl border border-sky-400/15 bg-gradient-to-br from-[#0c1830] to-[#050b17] p-4 lg:p-5 ${
        tall ? 'justify-center sm:min-h-[9rem]' : 'justify-start sm:min-h-[8.5rem]'
      }`}
    >
      <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-sky-400/30 bg-sky-500/10 text-sm text-sky-300">
        {service.icon}
      </span>

      <h3 className="!m-0 !text-white text-sm font-semibold leading-tight">
        {service.title}
      </h3>

      <p className="mt-1.5 text-[11px] leading-snug text-slate-400">
        {service.text}
      </p>
    </article>
  )
}

export default function HeroSlideTwo() {
  const getService = (id: string): HeroService => {
    const service = HERO_SERVICES.find((item) => item.id === id)
    if (!service) throw new Error(`Hero service "${id}" was not found`)
    return service
  }

  return (
    <div className="grid min-w-0 grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
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

      {/* Service Cards Grid */}
      <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 lg:gap-4">
        <div className="flex flex-col gap-3 sm:pt-8 lg:gap-4">
          <ServiceCard service={getService('sw')} />
          <ServiceCard service={getService('data')} />
        </div>

        <div className="flex flex-col gap-3 lg:gap-4">
          <ServiceCard service={getService('cloud')} tall />
          <ServiceCard service={getService('ai')} tall />
          <ServiceCard service={getService('consult')} tall />
        </div>

        <div className="flex flex-col gap-3 sm:pt-14 lg:gap-4">
          <ServiceCard service={getService('sec')} />
          <ServiceCard service={getService('it')} />
        </div>
      </div>
    </div>
  )
}