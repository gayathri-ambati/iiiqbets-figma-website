import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

/* ------------------------------------------------------------------ */
/*  Shared types + data (used by Service.tsx and the section files)    */
/* ------------------------------------------------------------------ */

export type Category =
  | 'Web Development'
  | 'UI/UX Design'
  | 'Digital Marketing'
  | 'SEO'
  | 'Data Analytics'
  | 'Content Writing'

export interface ServiceItem {
  id: number
  title: string
  desc: string
  category: Category
  tag: string
  badge: string
  minRate: number
  maxRate: number
  provider: string
  location: string
  providerType: 'Agency' | 'Freelancer'
  rating: number
  verified: boolean
}

export const CATEGORIES: Category[] = [
  'Web Development',
  'UI/UX Design',
  'Digital Marketing',
  'SEO',
  'Data Analytics',
  'Content Writing',
]

export interface Filters {
  keyword: string
  category: 'All Categories' | Category
  providerType: 'All Providers' | 'Agency' | 'Freelancer'
  minRating: number
  minBudget: string
  maxBudget: string
  verifiedOnly: boolean
}

/* ------------------------------------------------------------------ */
/*  Small helpers (Tailwind-based animations)                          */
/* ------------------------------------------------------------------ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, shown }
}

/** Fade + slide up when scrolled into view */
export function Reveal({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  const { ref, shown } = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`transition-all duration-[800ms] ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}

function useMounted() {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true))
    return () => cancelAnimationFrame(id)
  }, [])
  return on
}

/** Staggered card entrance (replays when its key changes) */
export function Rise({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const on = useMounted()
  return (
    <div
      className={`transition-all duration-[700ms] ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${
        on ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-8 scale-[.98] opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/** Small scale-in used for the "N Results" counter (replays when its key changes) */
export function PopIn({ children, className = '' }: { children: ReactNode; className?: string }) {
  const on = useMounted()
  return (
    <strong
      className={`transition-all duration-[400ms] ease-out motion-reduce:transition-none ${
        on ? 'scale-100 opacity-100' : 'scale-[.7] opacity-20'
      } ${className}`}
    >
      {children}
    </strong>
  )
}