/** Placeholder mark. Pass `src` to use your real logo image instead. */
export default function IiqLogo({ src, className = 'h-8' }: { src?: string; className?: string }) {
  if (src) return <img src={src} alt="iiQbets" className={`${className} w-auto object-contain`} />
  return (
    <span className="iiq-advantage__logo inline-flex items-end gap-1 font-black leading-none" aria-label="iiQbets">
      <span className="flex items-end gap-[3px]" aria-hidden="true">
        <span className="h-3 w-1.5 bg-rose-600" />
        <span className="h-4 w-1.5 bg-blue-700" />
        <span className="h-5 w-1.5 bg-blue-600" />
      </span>
      <span className="text-3xl text-rose-600">Q</span>
    </span>
  )
}