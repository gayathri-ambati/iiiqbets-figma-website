import InsightCards from '../components/InsightCards'
import ArticleList from '../components/ArticleList'

export default function Blogs() {
  return (
    <div className="blogs-page  w-full bg-[#050b14] text-left font-['Inter',ui-sans-serif,system-ui,sans-serif] text-slate-200 antialiased">
      <section className="blogs-hero mx-auto w-full max-w-[1680px] px-5 pb-14 pt-10 sm:px-8 sm:pt-14 lg:px-[8%]">
        <p className="blogs-eyebrow text-[9px] font-semibold uppercase tracking-[0.2em] text-[#38b8f0] xl:text-[11px]">
          Knowledge that creates impact
        </p>
        <h1 className="blogs-title mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px] xl:text-[68px]">
          Explore ideas.
          <br />
          Discover <span className="text-[#38b8f0]">new possibilities.</span>
        </h1>
        <p className="blogs-lead mt-5 max-w-xl text-xs leading-relaxed text-slate-400 xl:text-sm">
          Explore practical knowledge on SEO, digital marketing, business transformation, and competitive strategy — all designed to help you understand the digital world and grow your business.
        </p>
      </section>

      <InsightCards />
      <div className="blogs-spacer h-16 sm:h-24" />
      <ArticleList />
      <div className="blogs-bottom-space h-16" />
    </div>
  )
}