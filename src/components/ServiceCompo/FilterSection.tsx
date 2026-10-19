import { useMemo } from 'react'
import { CATEGORIES, PopIn, Reveal } from './ServiceShared'
import type { Filters, ServiceItem } from './ServiceShared'

/* ------------------------------------------------------------------ */
/*  Section 3: Filters + search summary                                */
/* ------------------------------------------------------------------ */

const LABEL = 'flex flex-col gap-1.5 text-[11px] font-semibold text-[#c9cfdd] sm:text-[9px]'
const CONTROL =
  'h-10 w-full rounded-md border border-transparent bg-[#222a3a] px-2.5 text-xs text-white outline-none transition placeholder:text-[#677089] focus:border-[#2dd4c4] focus:shadow-[0_0_0_3px_rgba(45,212,196,.18)] lg:h-7 lg:text-[9px]'

export default function FilterSection({
  draft,
  setDraft,
  onSearch,
  onReset,
  results,
}: {
  draft: Filters
  setDraft: (f: Filters) => void
  onSearch: () => void
  onReset: () => void
  results: ServiceItem[]
}) {
  const stats = useMemo(() => {
    const n = results.length
    const cats = new Set(results.map((r) => r.category)).size
    const verified = results.filter((r) => r.verified).length
    const avg = n ? (results.reduce((a, r) => a + r.rating, 0) / n).toFixed(1) : '0.0'
    const lo = n ? Math.min(...results.map((r) => r.minRate)) : 0
    const hi = n ? Math.max(...results.map((r) => r.maxRate)) : 0
    return { n, cats, verified, avg, range: n ? `$${lo}-$${hi}/hr` : '-' }
  }, [results])

  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setDraft({ ...draft, [k]: v })

  return (
    <section className="mx-auto max-w-[1180px] px-4 pb-5 pt-10 sm:px-6 sm:pt-14 lg:px-[5%]">
      <Reveal>
        <div className="text-center">
          <h2 className="mb-3 text-2xl font-extrabold tracking-[-0.01em] sm:text-[26px]">Find the Right Service</h2>
          <p className="mx-auto mb-6 max-w-[520px] text-xs leading-[1.7] text-[#8b93a7] sm:text-[10.5px]">
            Filter by expertise, budget, provider rating, and availability to discover services that match your project.
          </p>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-[30px] grid grid-cols-1 items-start gap-[18px] lg:grid-cols-[1fr_218px]">
          {/* Service Filters */}
          <div className="rounded-xl border border-[#2a3345] bg-[#161c2a] px-4 py-5 sm:px-[18px]">
            <h3 className="mb-4 text-sm font-bold sm:text-xs">Service Filters</h3>

            <div className="grid grid-cols-1 items-end gap-x-3.5 gap-y-3 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1fr_auto]">
              <label className={LABEL}>
                <span>Keyword</span>
                <input
                  className={CONTROL}
                  value={draft.keyword}
                  placeholder="Search services, skills, providers..."
                  onChange={(e) => set('keyword', e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && onSearch()}
                />
              </label>

              <label className={LABEL}>
                <span>Service Category</span>
                <select
                  className={CONTROL}
                  value={draft.category}
                  onChange={(e) => set('category', e.target.value as Filters['category'])}
                >
                  <option>All Categories</option>
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>

              <label className={LABEL}>
                <span>Provider Type</span>
                <select
                  className={CONTROL}
                  value={draft.providerType}
                  onChange={(e) => set('providerType', e.target.value as Filters['providerType'])}
                >
                  <option>All Providers</option>
                  <option>Agency</option>
                  <option>Freelancer</option>
                </select>
              </label>

              <label className={LABEL}>
                <span>Minimum Rating</span>
                <select
                  className={CONTROL}
                  value={draft.minRating}
                  onChange={(e) => set('minRating', Number(e.target.value))}
                >
                  <option value={0}>Any Rating</option>
                  <option value={4}>4.0 and above</option>
                  <option value={4.5}>4.5 and above</option>
                  <option value={4.8}>4.8 and above</option>
                </select>
              </label>

              <button
                type="button"
                onClick={onReset}
                className="h-10 w-full rounded-md border border-[#4a5468] bg-transparent px-[18px] text-xs font-bold text-white transition hover:border-[#ff1763] hover:text-[#ff1763] sm:col-span-2 lg:col-span-1 lg:h-7 lg:w-auto lg:text-[9px]"
              >
                Reset
              </button>

              <label className={LABEL}>
                <span>Minimum Budget ($/hr)</span>
                <input
                  className={CONTROL}
                  type="number"
                  min={0}
                  value={draft.minBudget}
                  placeholder="Min price"
                  onChange={(e) => set('minBudget', e.target.value)}
                />
              </label>

              <label className={LABEL}>
                <span>Maximum Budget ($/hr)</span>
                <input
                  className={CONTROL}
                  type="number"
                  min={0}
                  value={draft.maxBudget}
                  placeholder="Max price"
                  onChange={(e) => set('maxBudget', e.target.value)}
                />
              </label>
            </div>

            <label className="mb-3 mt-[18px] flex items-center gap-2 text-[11px] text-[#aeb6c8] sm:text-[9px]">
              <input
                type="checkbox"
                className="accent-[#2dd4c4]"
                checked={draft.verifiedOnly}
                onChange={(e) => set('verifiedOnly', e.target.checked)}
              />
              <span>Verified providers only</span>
            </label>

            <button
              type="button"
              onClick={onSearch}
              className="h-10 w-full rounded-md bg-[#2dd4c4] text-xs font-extrabold text-[#04201d] transition hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(45,212,196,.45)] sm:w-40 lg:h-[27px] lg:text-[9px]"
            >
              Search Services
            </button>
          </div>

          {/* Search Summary */}
          <aside className="rounded-xl border border-[#2a3345] bg-[#161c2a] px-4 py-5 sm:px-[18px]">
            <h3 className="mb-4 text-center text-sm font-bold sm:text-xs">Search Summary</h3>
            <ul className="m-0 list-none p-0">
              {[
                ['Matching Services', stats.n],
                ['Categories', stats.cats],
                ['Verified Providers', stats.verified],
                ['Average Rating', `${stats.avg} / 5`],
                ['Budget Range', stats.range],
              ].map(([label, value]) => (
                <li
                  key={label as string}
                  className="flex justify-between border-t border-[#2a3345] px-1 py-2 text-[11px] text-[#b8bfd0] first:border-t-0 sm:text-[9px]"
                >
                  <span>{label}</span>
                  <b className="text-[#2dd4c4]">{value}</b>
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-lg bg-[#1d2535] px-2 py-4 text-center">
              <PopIn key={stats.n} className="mb-1.5 block text-lg text-[#2dd4c4]">
                {stats.n} Results
              </PopIn>
              <small className="text-[9px] text-[#8b93a7]">Matching your search criteria</small>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  )
}