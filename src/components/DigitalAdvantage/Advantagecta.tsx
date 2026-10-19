export default function AdvantageCta() {
  return (
    <div className="iiq-advantage__cta flex flex-col items-start justify-between gap-5 rounded-xl border border-[#1b2d63]/70 bg-gradient-to-r from-[#0d1b4a] via-[#0a1535] to-[#08102a] px-6 py-6 sm:flex-row sm:items-center sm:px-10 sm:py-7">
      <div>
        <h3 className="m-0 text-left text-xl font-bold text-white sm:text-2xl">Ready to transform your business?</h3>
        <p className="m-0 mt-1 text-left text-[11px] text-slate-400">Let’s turn your technology challenges into opportunities for growth.</p>
      </div>
      <button
        type="button"
        className="iiq-advantage__cta-btn shrink-0 rounded-lg border-0 bg-gradient-to-r from-[#ff2e7e] to-[#e11d48] px-6 py-3 text-xs font-bold text-white shadow-[0_10px_30px_-6px_rgba(244,63,94,0.6)] transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
      >
        Start a Conversation →
      </button>
    </div>
  )
}