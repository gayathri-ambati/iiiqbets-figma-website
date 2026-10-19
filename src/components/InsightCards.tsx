import { useMemo, useState } from 'react'

interface Card {
  id: number
  tag: string
  title: string
  description: string
  label: string
  date: string
  accent: string
  image?: string
}

const cards: Card[] = [
  { id: 1, tag: 'SEO · Optimization', title: 'Off Page Optimization', description: 'Discover link building, backlinks, social bookmarking and essential strategies to improve search rankings.', label: 'SEO Strategy', date: 'September 21, 2021', accent: 'bg-[#f9a93b]' },
  { id: 2, tag: 'Digital Marketing', title: 'Supply Chain Digital Transformation', description: 'Understand the challenges of digital transformation and how businesses can build more agile supply chains.', label: 'Transformation', date: 'June 27, 2021', accent: 'bg-[#f9a93b]' },
  { id: 3, tag: 'Digital Marketing', title: 'Facebook Business Manager', description: 'Learn how to manage Facebook marketing, advertising accounts, brand assets and campaign activities.', label: 'Social Growth', date: 'June 3, 2021', accent: 'bg-[#38b8f0]' },
  { id: 4, tag: 'Digital Marketing', title: 'Facebook Business Manager', description: 'Learn how to manage Facebook marketing, advertising accounts, brand assets and campaign activities.', label: 'Keyword Research', date: 'May 25, 2021', accent: 'bg-[#8dd33f]' },
  { id: 5, tag: 'Digital Marketing', title: 'Facebook Business Manager', description: 'Learn how to manage Facebook marketing, advertising accounts, brand assets and campaign activities.', label: 'Market Insights', date: 'May 20, 2021', accent: 'bg-[#8794a1]' },
]

export default function InsightCards() {
  const [query, setQuery] = useState<string>('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return q ? cards.filter((c) => `${c.title} ${c.tag} ${c.label}`.toLowerCase().includes(q)) : cards
  }, [query])

  return (
    <section id="insights" className="insight-cards-section mx-auto w-full max-w-[1680px] px-5 text-left sm:px-8 lg:px-[8%]">
      <div className="insight-cards-head mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="insight-cards-heading text-lg font-bold text-white sm:text-xl xl:text-2xl">Our Latest Insights</h2>
          <p className="insight-cards-sub mt-1 text-[11px] text-slate-400 xl:text-xs">Five essential topics. Fresh perspectives. Smarter strategies.</p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search insights..."
          aria-label="Search insights"
          className="insight-search w-full rounded-md border border-[#1c2b3b] bg-[#0d1825] px-3 py-2 text-[11px] text-white placeholder:text-slate-500 focus:border-[#38b8f0] focus:outline-none sm:w-60 xl:text-xs"
        />
      </div>

      {filtered.length ? (
        <div className="insight-cards-track -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 xl:grid-cols-5 xl:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filtered.map((c) => (
            <article
              key={c.id}
              className={`insight-card relative flex aspect-[3/4] min-w-[78%] snap-center flex-col rounded-[22px] p-[10px] pb-0 sm:min-w-[46%] md:min-w-0 ${c.accent}`}
            >
              <div className="insight-card__panel relative flex-1 overflow-hidden rounded-2xl border border-white/30 bg-[#08121d]">
                {c.image ? (
                  <img src={c.image} alt="" className="insight-card__image absolute inset-0 h-full w-full object-cover opacity-70" />
                ) : (
                  <div
                    aria-hidden="true"
                    className="insight-card__image absolute inset-0 bg-[#0a2233] [background-image:linear-gradient(rgba(56,184,240,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(56,184,240,.18)_1px,transparent_1px)] [background-size:22px_22px]"
                  />
                )}
                <div className="insight-card__overlay absolute inset-0 bg-gradient-to-t from-[#06101a] via-[#06101a]/70 to-transparent" />

                <div className="insight-card__body absolute inset-x-0 bottom-0 flex flex-col items-start gap-2 p-4">
                  <span className="insight-card__tag text-[9px] font-medium uppercase tracking-wider text-white/60 xl:text-[10px]">{c.tag}</span>
                  <h3 className="insight-card__title text-[15px] font-bold leading-tight text-white xl:text-lg">{c.title}</h3>
                  <p className="insight-card__desc line-clamp-3 text-[10px] leading-relaxed text-slate-400 xl:text-xs">{c.description}</p>
                  <a href="#articles" className="insight-card__link mt-1 text-[10px] font-semibold text-white hover:text-[#38b8f0] xl:text-xs">
                    Explore topic ↗
                  </a>
                </div>
              </div>

              <footer className="insight-card__footer flex h-[52px] items-end justify-between pb-3 text-white xl:h-14">
                <span className="insight-card__number text-[26px] font-medium leading-none xl:text-3xl">
                  {String(c.id).padStart(2, '0')}
                  <sup className="ml-0.5 text-[9px] font-normal opacity-70">/05</sup>
                </span>
                <span className="insight-card__meta text-right text-[8px] leading-tight xl:text-[9px]">
                  <strong className="block font-bold uppercase tracking-wide">{c.label}</strong>
                  <span className="opacity-80">{c.date}</span>
                </span>
              </footer>
            </article>
          ))}
        </div>
      ) : (
        <p className="insight-empty rounded-lg border border-[#1c2b3b] p-6 text-center text-sm text-slate-400">
          No insights match “{query}”.
        </p>
      )}
    </section>
  )
}