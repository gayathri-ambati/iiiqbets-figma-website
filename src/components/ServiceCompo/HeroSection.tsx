// /* ------------------------------------------------------------------ */
// /*  HeroSection.tsx                                                    */
// /*  Section 1: hero card + Analyze / Redesign / Digitize tiles         */
// /*  Used in pages/Service.tsx  ->  <HeroSection />                     */
// /* ------------------------------------------------------------------ */

// const HERO_IMG = {
//   hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70',
//   analyze: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70',
//   redesign: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=70',
//   digitize: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=70',
// }

// export default function HeroSection() {
//   const tiles = [
//     { label: '01 / ANALYZE', img: HERO_IMG.analyze },
//     { label: '02 / REDESIGN', img: HERO_IMG.redesign },
//     { label: '03 / DIGITIZE', img: HERO_IMG.digitize },
//   ]
//   const thumbs = [HERO_IMG.analyze, HERO_IMG.hero, HERO_IMG.analyze]

//   return (
//     <>
//       <style>{HERO_CSS}</style>
//       <section className="svc-hero-wrap">
//         <div className="svc-stars" aria-hidden="true" />
//         <div className="svc-hero-inner">
//           <div className="svc-hero-card" style={{ backgroundImage: `url(${HERO_IMG.hero})` }}>
//             <div className="svc-hero-shade" />
//             <div className="svc-hero-copy">
//               <span className="svc-eyebrow">DIGITAL TRANSFORMATION</span>
//               <h2 className="svc-hero-title">
//                 Process Reengineering <span>for Digitization</span>
//               </h2>
//               <p className="svc-hero-text">
//                 We create value for our customers by understanding and improving their processes from both short-term
//                 and long-term perspectives. We guide business process owners and subject matter experts in
//                 re-engineering business processes by focusing on redesign and reconfiguration of existing processes.
//               </p>
//               <button className="svc-btn-pink" type="button">EXPLORE →</button>
//             </div>
//           </div>

//           <div className="svc-tiles">
//             {tiles.map((t, i) => (
//               <div
//                 key={t.label}
//                 className="svc-tile"
//                 style={{ backgroundImage: `url(${t.img})`, animationDelay: `${0.5 + i * 0.15}s` }}
//               >
//                 <div className="svc-tile-shade" />
//                 <span className="svc-tile-label">{t.label}</span>
//               </div>
//             ))}
//             <div className="svc-thumbs">
//               {thumbs.map((src, i) => (
//                 <div
//                   key={i}
//                   className="svc-thumb"
//                   style={{ backgroundImage: `url(${src})`, animationDelay: `${0.95 + i * 0.12}s` }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// /* Styles for this section only (uses the --pink / --cyan variables set on .svc-page) */
// const HERO_CSS = `
// .svc-hero-wrap{position:relative; padding:90px 5% 60px; background:#0a0710}
// .svc-stars{
//   position:absolute; inset:0; pointer-events:none;
//   background:
//     radial-gradient(ellipse at 15% 30%, rgba(120,60,200,.45), transparent 55%),
//     radial-gradient(ellipse at 85% 75%, rgba(150,60,200,.40), transparent 55%),
//     radial-gradient(ellipse at 50% 100%, rgba(255,23,99,.20), transparent 60%),
//     radial-gradient(1.5px 1.5px at 20px 30px, #fff9, transparent),
//     radial-gradient(1px 1px at 90px 80px, #fff8, transparent),
//     radial-gradient(1.5px 1.5px at 140px 20px, #c9b3ff, transparent);
//   background-size:auto,auto,auto,170px 110px,170px 110px,170px 110px;
//   animation:svc-drift 40s linear infinite;
// }
// @keyframes svc-drift{to{background-position:0 0,0 0,0 0,170px 110px,-170px 110px,170px -110px}}
// .svc-hero-inner{position:relative; max-width:1180px; margin:0 auto}

// .svc-hero-card{
//   position:relative; min-height:300px; border-radius:22px; overflow:hidden;
//   background-size:cover; background-position:center; background-color:#1a2530;
//   box-shadow:0 0 60px rgba(255,23,99,.45), 0 0 0 1px rgba(255,23,99,.35);
//   animation:svc-rise .9s cubic-bezier(.2,.7,.2,1) both, svc-glow 4s ease-in-out 1s infinite;
// }
// @keyframes svc-glow{50%{box-shadow:0 0 90px rgba(255,23,99,.7), 0 0 0 1px rgba(255,23,99,.6)}}
// @keyframes svc-rise{from{opacity:0; transform:translateY(34px) scale(.98)}to{opacity:1; transform:none}}
// .svc-hero-shade{position:absolute; inset:0; background:linear-gradient(90deg, rgba(10,12,20,.88) 0%, rgba(10,12,20,.55) 45%, rgba(10,12,20,.1) 100%)}
// .svc-hero-copy{position:relative; padding:56px 44px; max-width:520px}
// .svc-eyebrow{font-size:9px; letter-spacing:.2em; font-weight:700; color:var(--cyan)}
// .svc-hero-title{margin:14px 0 12px; font-size:26px; line-height:1.15; font-weight:700; letter-spacing:-.01em}
// .svc-hero-title span{color:#cfd3dc; font-weight:600}
// .svc-hero-text{font-size:10.5px; line-height:1.9; color:#d5d9e2; margin:0 0 20px}

// /* tiles */
// .svc-tiles{display:grid; grid-template-columns:1fr 1fr 1fr .8fr; gap:18px; margin-top:26px; height:196px}
// .svc-tile{
//   position:relative; border-radius:18px; overflow:hidden; background-size:cover; background-position:center;
//   background-color:#1b1f33; display:flex; align-items:flex-end;
//   box-shadow:0 0 34px rgba(150,70,230,.4), 0 0 0 1px rgba(255,255,255,.07);
//   animation:svc-rise .8s cubic-bezier(.2,.7,.2,1) both;
//   transition:transform .35s, box-shadow .35s;
// }
// .svc-tile:hover{transform:translateY(-6px); box-shadow:0 0 46px rgba(255,23,99,.55), 0 0 0 1px rgba(255,23,99,.5)}
// .svc-tile-shade{position:absolute; inset:0; background:linear-gradient(0deg, rgba(8,8,16,.85), transparent 55%)}
// .svc-tile-label{position:relative; padding:0 20px 16px; font-size:8px; font-weight:800; letter-spacing:.16em}
// .svc-thumbs{display:flex; flex-direction:column; gap:8px}
// .svc-thumb{
//   flex:1; border-radius:9px; background-size:cover; background-position:center; background-color:#1b1f33;
//   box-shadow:0 0 24px rgba(150,70,230,.35), 0 0 0 1px rgba(255,255,255,.07);
//   animation:svc-rise .8s cubic-bezier(.2,.7,.2,1) both; transition:transform .3s;
// }
// .svc-thumb:hover{transform:translateX(-5px)}

// /* responsive */
// @media (max-width:1000px){
//   .svc-tiles{grid-template-columns:1fr 1fr; height:auto}
//   .svc-tile{height:170px}
//   .svc-thumbs{flex-direction:row; height:80px; grid-column:1 / -1}
// }
// @media (max-width:600px){
//   .svc-hero-copy{padding:36px 22px}
//   .svc-tiles{grid-template-columns:1fr}
// }
// `

import { Rise } from './serviceShared'

/* ------------------------------------------------------------------ */
/*  HeroSection.tsx  (Tailwind only - no CSS)                          */
/*  Section 1: hero card + Analyze / Redesign / Digitize tiles         */
/*  Used in pages/Service.tsx  ->  <HeroSection />                     */
/* ------------------------------------------------------------------ */

const HERO_IMG = {
  hero: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=70',
  analyze: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70',
  redesign: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=70',
  digitize: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=70',
}

export default function HeroSection() {
  const tiles = [
    { label: '01 / ANALYZE', img: HERO_IMG.analyze },
    { label: '02 / REDESIGN', img: HERO_IMG.redesign },
    { label: '03 / DIGITIZE', img: HERO_IMG.digitize },
  ]
  const thumbs = [HERO_IMG.analyze, HERO_IMG.hero, HERO_IMG.analyze]

  return (
    <section className="relative overflow-hidden bg-[#0a0710] px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 lg:px-[5%] lg:pb-[60px] lg:pt-[90px]">
      {/* purple / pink nebula glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(120,60,200,.45),transparent_55%),radial-gradient(ellipse_at_85%_75%,rgba(150,60,200,.4),transparent_55%),radial-gradient(ellipse_at_50%_100%,rgba(255,23,99,.2),transparent_60%)]"
      />
      {/* stars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_20px_30px,#fff9,transparent),radial-gradient(1px_1px_at_90px_80px,#fff8,transparent),radial-gradient(1.5px_1.5px_at_140px_20px,#c9b3ff,transparent)] bg-[length:170px_110px]"
      />

      <div className="relative mx-auto max-w-[1180px]">
        {/* hero card */}
        <Rise className="w-full" delay={0}>
          <div
            className="relative min-h-[300px] overflow-hidden rounded-[22px] bg-[#1a2530] bg-cover bg-center shadow-[0_0_60px_rgba(255,23,99,.45),0_0_0_1px_rgba(255,23,99,.35)]"
            style={{ backgroundImage: `url(${HERO_IMG.hero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,12,20,.9)] via-[rgba(10,12,20,.7)] to-[rgba(10,12,20,.25)] sm:via-[rgba(10,12,20,.55)] sm:to-[rgba(10,12,20,.1)]" />
            <div className="relative max-w-[520px] px-5 py-9 sm:px-9 sm:py-12 lg:px-11 lg:py-14">
              <span className="text-[10px] font-bold tracking-[.2em] text-[#22d3ee] sm:text-[9px]">
                DIGITAL TRANSFORMATION
              </span>
              <h2 className="mb-3 mt-3.5 text-2xl font-bold leading-[1.15] tracking-[-0.01em] text-white sm:text-[26px]">
                Process Reengineering <span className="font-semibold text-[#cfd3dc]">for Digitization</span>
              </h2>
              <p className="mb-5 text-xs leading-[1.9] text-[#d5d9e2] sm:text-[10.5px]">
                We create value for our customers by understanding and improving their processes from both short-term
                and long-term perspectives. We guide business process owners and subject matter experts in
                re-engineering business processes by focusing on redesign and reconfiguration of existing processes.
              </p>
              <button
                type="button"
                className="rounded-[5px] bg-[#ff1763] px-[13px] py-2 text-[10px] font-extrabold tracking-[.1em] text-[#1a0410] transition hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(255,23,99,.55)] sm:text-[9px]"
              >
                EXPLORE →
              </button>
            </div>
          </div>
        </Rise>

        {/* tiles + thumbnails */}
        <div className="mt-[26px] grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:h-[196px] lg:grid-cols-[1fr_1fr_1fr_.8fr]">
          {tiles.map((t, i) => (
            <Rise key={t.label} delay={500 + i * 150} className="h-[170px] lg:h-full">
              <div
                className="relative flex h-full items-end overflow-hidden rounded-[18px] bg-[#1b1f33] bg-cover bg-center shadow-[0_0_34px_rgba(150,70,230,.4),0_0_0_1px_rgba(255,255,255,.07)] transition duration-[350ms] hover:-translate-y-1.5 hover:shadow-[0_0_46px_rgba(255,23,99,.55),0_0_0_1px_rgba(255,23,99,.5)]"
                style={{ backgroundImage: `url(${t.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,8,16,.85)] via-[rgba(8,8,16,.25)] to-transparent" />
                <span className="relative px-5 pb-4 text-[10px] font-extrabold tracking-[.16em] text-white sm:text-[8px]">
                  {t.label}
                </span>
              </div>
            </Rise>
          ))}

          <div className="flex h-20 gap-2 sm:col-span-2 lg:col-span-1 lg:h-auto lg:flex-col">
            {thumbs.map((src, i) => (
              <Rise key={i} delay={950 + i * 120} className="flex-1">
                <div
                  className="h-full w-full rounded-[9px] bg-[#1b1f33] bg-cover bg-center shadow-[0_0_24px_rgba(150,70,230,.35),0_0_0_1px_rgba(255,255,255,.07)] transition duration-300 lg:hover:-translate-x-1"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </Rise>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}