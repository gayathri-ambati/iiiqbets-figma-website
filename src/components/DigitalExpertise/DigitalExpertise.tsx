import type { JSX, SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'

interface IiqDexItem {
  id: string
  title: string
  text: string
  image: string
}

const iiqDexTexture =
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
const iiqDexAnalytics =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'

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

const iiqDexHexClip =
  '[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]'

export default function DigitalExpertise(): JSX.Element {
  return (
    <section className="iiq-dex-section relative w-full overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="iiq-dex-container mx-auto max-w-6xl">
        <h2 className="iiq-dex-heading text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Our Digital Expertise
        </h2>

        {/* Honeycomb */}
        <div className="iiq-dex-honeycomb mt-14 flex flex-col items-center gap-4 lg:gap-0">
          {iiqDexRows.map((row: IiqDexItem[], rowIndex: number) => (
            <div
              key={`iiq-dex-row-${rowIndex}`}
              className={`iiq-dex-row iiq-dex-row-${rowIndex + 1} flex flex-wrap justify-center gap-4 lg:flex-nowrap lg:gap-3 ${
                rowIndex > 0 ? 'lg:-mt-8' : ''
              }`}
            >
              {row.map((item: IiqDexItem) => (
                <article
                  key={item.id}
                  className={`iiq-dex-hex iiq-dex-hex-${item.id} group relative h-[210px] w-[190px] bg-slate-200/80 transition duration-300 hover:scale-105 hover:bg-sky-300 ${iiqDexHexClip}`}
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
                      className="iiq-dex-hex-img absolute inset-0 h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-110 group-hover:opacity-80"
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
              ))}
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="iiq-dex-cta mt-14 flex flex-col items-start justify-between gap-5 rounded-xl border border-indigo-400/20 bg-gradient-to-r from-[#0b1230] to-[#1a1040] px-6 py-6 sm:flex-row sm:items-center">
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