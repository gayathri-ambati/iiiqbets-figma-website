import { Reveal } from './ServiceShared'
import type { ServiceItem } from './ServiceShared'
import ServiceCard from './ServiceCard'

/* ------------------------------------------------------------------ */
/*  Section 4: Available services grid                                 */
/*  Responsive: mobile 1 col | tablet + small laptop 2 cols | xl 4 cols */
/* ------------------------------------------------------------------ */

export default function AvailableSection({ items }: { items: ServiceItem[] }) {
  return (
    <section className="mx-auto max-w-[1180px] px-4 pb-16 pt-12 sm:px-6 sm:pb-[90px] sm:pt-[70px] lg:px-[5%]">
      <Reveal>
        <h2 className="mb-8 text-left text-xl font-extrabold tracking-[-0.01em] text-white sm:mb-[34px]">Available services</h2>
      </Reveal>
      {items.length === 0 ? (
        <p className="py-10 text-center text-xs text-[#8b93a7]">
          No services match these filters. Reset the filters or widen the budget range.
        </p>
      ) : (
        // key forces the stagger animation to replay whenever the result set changes
        <div
          className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 xl:grid-cols-4 xl:px-[4%]"
          key={items.map((i) => i.id).join('-')}
        >
          {items.map((s, i) => (
            <ServiceCard key={s.id} s={s} index={i} />
          ))}
        </div>
      )}
    </section>
  )
}