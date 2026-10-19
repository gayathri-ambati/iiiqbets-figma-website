import type { JSX, ReactNode } from 'react'

interface IiqCtTestimonial {
  id: string
  name: string
  role: string
  quote: string
  category: string
  logo: ReactNode
  tabClass: string
  quoteMarkClass: string
}

const iiqCtItems: IiqCtTestimonial[] = [
  {
    id: 'alphabets',
    name: 'Alphabets',
    role: 'Chief Transformation Leader',
    quote:
      'Very thoughtful and articulate communication. Clear milestones, reliable deadlines and fast work. No shortcuts, just a professional approach to delivery.',
    category: 'Digital Transformation',
    logo: (
      <span className="iiq-ct-logo-alphabets text-3xl font-black leading-none text-rose-600">
        A
      </span>
    ),
    tabClass: 'bg-emerald-400',
    quoteMarkClass: 'text-emerald-500',
  },
  {
    id: 'qpro',
    name: 'Q Pro Technologies',
    role: 'IT Chief',
    quote:
      'Very professional and highly reliable team. Great technical skills made our transformational journey smooth, efficient and easier to manage.',
    category: 'Technology Services',
    logo: (
      <span className="iiq-ct-logo-qpro text-base font-extrabold leading-none text-blue-900">
        <span className="text-rose-600">Q</span> Pro
      </span>
    ),
    tabClass: 'bg-cyan-400',
    quoteMarkClass: 'text-cyan-500',
  },
  {
    id: 'partners',
    name: 'Technology Partners',
    role: 'Business Leadership',
    quote:
      'Their collaborative mindset and focus on business needs help bring ideas to life through thoughtful technology solutions and dependable execution.',
    category: 'Business Solutions',
    logo: (
      <span className="iiq-ct-logo-partners flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500 text-lg font-bold leading-none text-white">
        ✱
      </span>
    ),
    tabClass: 'bg-sky-500',
    quoteMarkClass: 'text-sky-500',
  },
]

export default function ClientTestimonials(): JSX.Element {
  return (
    <section className="iiq-ct-section relative w-full overflow-hidden bg-[#030712] px-4 py-16 text-white sm:px-6 lg:px-10">
      <div className="iiq-ct-container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="iiq-ct-header text-center">
          <p className="iiq-ct-eyebrow text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-500">
            {'// Our Clients'}
          </p>
          <h2 className="iiq-ct-heading mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            <span className="iiq-ct-heading-line1 block text-white">We Are Trusted.</span>
            <span className="iiq-ct-heading-line2 block text-indigo-500">
              Their Trust Matters to Us.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="iiq-ct-grid mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {iiqCtItems.map((item: IiqCtTestimonial) => (
            <article
              key={item.id}
              className={`iiq-ct-card iiq-ct-card-${item.id} relative flex flex-col overflow-hidden rounded-xl border border-white/60 bg-[#f1f3f3] px-5 pb-4 pt-8 text-slate-800 shadow-lg shadow-black/40 transition duration-300 hover:-translate-y-1`}
            >
              {/* Top accent tab */}
              <span
                className={`iiq-ct-card-tab absolute left-1/2 top-0 h-2.5 w-28 -translate-x-1/2 rounded-b-md ${item.tabClass}`}
              />

              {/* Author */}
              <div className="iiq-ct-author flex items-center gap-4">
                <div className="iiq-ct-logo-box flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  {item.logo}
                </div>
                <div className="iiq-ct-author-info">
                  <h3 className="iiq-ct-name text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="iiq-ct-role text-[10px] text-slate-400">{item.role}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="iiq-ct-quote mt-8 flex-1">
                <span
                  className={`iiq-ct-quote-mark block font-serif text-2xl font-bold italic leading-none ${item.quoteMarkClass}`}
                >
                  &ldquo;
                </span>
                <p className="iiq-ct-quote-text mt-1 text-[11px] leading-relaxed text-slate-500">
                  {item.quote}
                </p>
              </div>

              {/* Footer */}
              <div className="iiq-ct-footer mt-5 flex items-center justify-between">
                <span className="iiq-ct-category text-[9px] text-slate-400">{item.category}</span>
                <span className="iiq-ct-badge text-[9px] font-semibold text-emerald-600">
                  ✓ Client feedback
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}