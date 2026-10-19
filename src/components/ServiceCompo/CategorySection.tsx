import { CATEGORIES, Reveal } from './ServiceShared'
import type { Category } from './ServiceShared'

/* ------------------------------------------------------------------ */
/*  Section 2: Browse by category                                      */
/*  Responsive: pills wrap on mobile/tablet; compact type from lg up   */
/* ------------------------------------------------------------------ */

export default function CategorySection({
  active,
  onSelect,
}: {
  active: 'All Categories' | Category
  onSelect: (c: 'All Categories' | Category) => void
}) {
  const pills: ('All Categories' | Category)[] = ['All Categories', ...CATEGORIES]
  return (
    <section className="mx-auto max-w-[1180px] px-4 pb-5 pt-10 text-center sm:px-6 sm:pt-14 lg:px-[5%]">
      <Reveal>
        <h2 className="mb-3 text-2xl font-extrabold tracking-[-0.01em] text-white sm:text-[26px]">
          Browse Services by Category
        </h2>
        <p className="mx-auto mb-6 max-w-[520px] text-xs leading-[1.7] text-[#8b93a7] sm:text-[13px] lg:text-[10.5px]">
          Discover professional services, compare experts, and find the right solutions for your business needs.
        </p>
        <div className="mt-1.5 flex flex-wrap justify-center gap-2 sm:gap-[9px]" role="tablist">
          {pills.map((p) => {
            const on = active === p
            return (
              <button
                key={p}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => onSelect(p)}
                className={`rounded-full border px-3.5 py-2 text-[11px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2dd4c4] sm:text-xs lg:py-[7px] lg:text-[9px] ${
                  on
                    ? 'border-[#2dd4c4] bg-[#2dd4c4] font-bold text-[#04201d] shadow-[0_0_18px_rgba(45,212,196,.45)]'
                    : 'border-[#2a3345] bg-[#1b2232] text-[#aeb6c8] hover:text-white'
                }`}
              >
                {p === 'All Categories' ? 'All Services' : p}
              </button>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}