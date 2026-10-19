import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from 'react'

import HeroSlideOne from './HeroSlideOne'
import HeroSlideTwo from './HeroSlideTwo'
import HeroSlidePromote from './HeroSlidePromote'
import { HeroProductStrip } from './HeroShared'

const SLIDES = [
  { id: 'empower', label: 'Empowering businesses', node: <HeroSlideOne /> },
  { id: 'services', label: 'Our services', node: <HeroSlideTwo /> },
  {
    id: 'promote-a',
    label: 'Promote your business',
    node: <HeroSlidePromote variant="a" />,
  },
  {
    id: 'promote-b',
    label: 'Digital marketing strategies',
    node: <HeroSlidePromote variant="b" />,
  },
]

const AUTOPLAY_MS = 4000

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef<number | null>(null)
  const count = SLIDES.length

  const go = useCallback(
    (nextIndex: number) => {
      setIndex(((nextIndex % count) + count) % count)
    },
    [count],
  )

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(timer)
  }, [paused, count])

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return

    const difference = event.changedTouches[0].clientX - touchX.current

    if (Math.abs(difference) > 50) {
      go(index + (difference < 0 ? 1 : -1))
    }

    touchX.current = null
  }

  return (
    <section
      aria-label="Featured highlights"
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') go(index + 1)
        if (event.key === 'ArrowLeft') go(index - 1)
      }}
      // Increased outer padding to give the content more breathing room
      className="relative mx-auto w-full max-w-none overflow-hidden rounded-lg border border-slate-800/70 bg-[#030712] px-6 py-8 text-left font-sans text-white sm:px-10 sm:py-10 lg:px-16 lg:py-12"
    >
      <div
        className="relative min-w-0 w-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {SLIDES.map((slide, slideIndex) => {
          const active = slideIndex === index

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${count}: ${slide.label}`}
              aria-hidden={!active}
              className={`w-full transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                active
                  ? 'relative z-10 opacity-100'
                  : 'absolute inset-0 z-0 pointer-events-none opacity-0'
              }`}
            >
              {slide.node}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Choose slide"
        >
          {SLIDES.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => go(slideIndex)}
              className={`h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                slideIndex === index
                  ? 'w-8 bg-sky-400'
                  : 'w-2 bg-white/25 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(index - 1)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-xl text-white transition hover:border-sky-400 hover:bg-slate-800"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(index + 1)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 text-xl text-white transition hover:border-sky-400 hover:bg-slate-800"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-8">
        <HeroProductStrip />
      </div>
    </section>
  )
}