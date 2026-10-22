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
  {
    id: 'promote',
    label: 'Promote your business',
    node: <HeroSlidePromote variant="a" />,
  },
  { id: 'services', label: 'Our services', node: <HeroSlideTwo /> },
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

  // Auto-advance every AUTOPLAY_MS. Restarts after every slide change
  // (auto or manual). Hover/focus no longer pause it – a resting mouse
  // pointer over the hero was freezing the carousel.
  useEffect(() => {
    if (paused) return
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % count)
    }, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [paused, index, count])

  // Pause only while the browser tab is in the background
  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchX.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return
    const difference = event.changedTouches[0].clientX - touchX.current
    if (Math.abs(difference) > 50) go(index + (difference < 0 ? 1 : -1))
    touchX.current = null
  }

  return (
    <section
      aria-label="Featured highlights"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight') go(index + 1)
        if (event.key === 'ArrowLeft') go(index - 1)
      }}
      className="relative mx-auto w-full max-w-[1502px] overflow-hidden rounded-lg border border-slate-800/70 bg-[#020611] px-6 py-8 text-left font-sans text-white outline-none sm:px-10 sm:py-10 lg:px-[55px] lg:py-[50px]"
    >
      {/* All slides share ONE grid cell -> height = tallest slide, no jumping */}
      <div
        className="grid min-w-0 w-full"
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
              className={`col-start-1 row-start-1 w-full transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${
                active
                  ? 'z-10 opacity-100'
                  : 'pointer-events-none z-0 opacity-0'
              }`}
            >
              {slide.node}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {SLIDES.map((slide, slideIndex) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => go(slideIndex)}
              className={`h-1.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
                slideIndex === index ? 'w-8 bg-sky-400' : 'w-2 bg-white/25 hover:bg-white/60'
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