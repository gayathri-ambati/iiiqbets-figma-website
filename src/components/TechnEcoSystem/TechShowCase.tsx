import { useState, type ReactNode } from 'react'

const Ico = ({ children }: { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
)

const FEATURES = [
  { title: 'Faster Innovation', text: 'Modern technology stack', icon: <Ico><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></Ico> },
  { title: 'Cloud Ready', text: 'Scalable infrastructure', icon: <Ico><path d="M7 18a4 4 0 0 1-.5-7.9A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z" /></Ico> },
  { title: 'Secure Solutions', text: 'Enterprise grade security', icon: <Ico><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" /></Ico> },
  { title: 'Business Growth', text: 'Technology built to scale', icon: <Ico><path d="M4 4v16h16" /><path d="m8 15 4-4 3 3 4-5" /></Ico> },
]

// Placeholder demo video (Blender Foundation's "Big Buck Bunny"). Replace with your own ID.
const DEFAULT_YOUTUBE_ID = 'aqz-KE-bpKQ'

interface Props {
  /** Direct video file (mp4/webm). Takes priority over YouTube if provided. */
  videoSrc?: string
  /** YouTube video ID, e.g. "aqz-KE-bpKQ" */
  youtubeId?: string
}

export default function TechShowcase({ videoSrc, youtubeId = DEFAULT_YOUTUBE_ID }: Props) {
  const [playing, setPlaying] = useState(false)
  const [thumb, setThumb] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`)

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      {/* Video frame */}
      <div className="relative">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-[#1b4fa0]/70 via-[#2a1647]/70 to-[#7a1f55]/70 p-2 shadow-[0_0_60px_-10px_rgba(168,85,247,0.35)]">
          <div className="relative flex aspect-[1.6/1] items-center justify-center overflow-hidden rounded-2xl bg-[#04081a]">
            {playing ? (
              videoSrc ? (
                <video src={videoSrc} className="h-full w-full object-cover" controls autoPlay />
              ) : (
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="Technology showcase video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <>
                {/* Placeholder thumbnail */}
                {!videoSrc && (
                  <img
                    src={thumb}
                    alt=""
                    loading="lazy"
                    onError={() => setThumb(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`)}
                    className="absolute inset-0 h-full w-full object-cover opacity-60"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#04081a] via-[#04081a]/30 to-[#04081a]/50" />

                <button
                  type="button"
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                  className="relative flex h-14 w-14 items-center justify-center rounded-full border-0 bg-gradient-to-br from-[#ff2e7e] to-[#e11d48] p-0 text-white shadow-[0_0_40px_rgba(244,63,94,0.7)] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" /></svg>
                </button>
                <p className="m-0 absolute bottom-[10%] w-full text-center text-[8px] tracking-[0.3em] text-slate-300 sm:text-[9px]">
                  DIGITAL TRANSFORMATION SPECIALISTS
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Copy */}
      <div>
        <p className="m-0 text-[10px] font-medium tracking-[0.3em] text-sky-400 sm:text-[11px]">INNOVATION • TECHNOLOGY • GROWTH</p>
        <h2 className="m-0 mt-4 text-left text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl xl:text-[2.75rem]">
          Technology That<br />Moves Your<br />Business Forward
        </h2>
        <p className="m-0 mt-6 max-w-md text-left text-sm leading-7 text-slate-400">
          From intelligent business applications to cloud infrastructure and modern web technologies, iiQbets delivers solutions
          designed around the way your business operates.
        </p>

        <ul className="m-0 mt-7 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.title} className="flex items-center gap-3 rounded-lg border border-[#1b2d63]/70 bg-gradient-to-b from-[#0b1736]/80 to-[#060d24]/80 px-3 py-3 backdrop-blur-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sky-500/15 text-sky-400">{f.icon}</span>
              <span className="min-w-0 text-[11px] leading-tight">
                <strong className="block font-bold text-white">{f.title}</strong>
                <span className="text-slate-500">{f.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button type="button" className="inline-flex items-center justify-center gap-2 rounded-lg border-0 bg-gradient-to-r from-[#ff2e7e] to-[#e11d48] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-6px_rgba(244,63,94,0.6)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400">Explore Our Technology →</button>
        </div>
      </div>
    </div>
  )
}