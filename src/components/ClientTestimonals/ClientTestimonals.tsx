import type { JSX, ReactNode } from 'react'
import { motion } from 'framer-motion'

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="iiq-ct-header text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="iiq-ct-eyebrow text-[10px] font-semibold uppercase tracking-[0.25em] text-rose-500"
          >
            {'// Our Clients'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="iiq-ct-heading mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            <span className="iiq-ct-heading-line1 block text-white">We Are Trusted.</span>
            <span className="iiq-ct-heading-line2 block text-indigo-500">
              Their Trust Matters to Us.
            </span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="iiq-ct-grid mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {iiqCtItems.map((item: IiqCtTestimonial, index: number) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`iiq-ct-card iiq-ct-card-${item.id} relative flex flex-col overflow-hidden rounded-xl border border-white/60 bg-[#f1f3f3] px-5 pb-4 pt-8 text-slate-800 shadow-lg shadow-black/40`}
            >
              {/* Top accent tab — slides down from top */}
              <motion.span
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.15,
                  ease: 'easeOut',
                }}
                style={{ transformOrigin: 'top' }}
                className={`iiq-ct-card-tab absolute left-1/2 top-0 h-2.5 w-28 -translate-x-1/2 rounded-b-md ${item.tabClass}`}
              />

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.35 + index * 0.15,
                  ease: 'easeOut',
                }}
                className="iiq-ct-author flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="iiq-ct-logo-box flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm"
                >
                  {item.logo}
                </motion.div>
                <div className="iiq-ct-author-info">
                  <h3 className="iiq-ct-name text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="iiq-ct-role text-[10px] text-slate-400">{item.role}</p>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.45 + index * 0.15,
                }}
                className="iiq-ct-quote mt-8 flex-1"
              >
                <motion.span
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 15,
                    delay: 0.5 + index * 0.15,
                  }}
                  className={`iiq-ct-quote-mark block font-serif text-2xl font-bold italic leading-none origin-top-left ${item.quoteMarkClass}`}
                >
                  &ldquo;
                </motion.span>
                <p className="iiq-ct-quote-text mt-1 text-[11px] leading-relaxed text-slate-500">
                  {item.quote}
                </p>
              </motion.div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.15,
                  ease: 'easeOut',
                }}
                className="iiq-ct-footer mt-5 flex items-center justify-between"
              >
                <span className="iiq-ct-category text-[9px] text-slate-400">{item.category}</span>
                <span className="iiq-ct-badge text-[9px] font-semibold text-emerald-600">
                  ✓ Client feedback
                </span>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}