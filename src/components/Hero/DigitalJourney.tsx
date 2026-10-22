import React from 'react';

import LogoImage from '../../assets/iiiqbetslogo.png';

const GREEN = '#22E08A';

const nodes = [
  { x: 215, y: 246, num: '01', title: 'Understand Your Business', desc: 'Strategy starts with context.', dotY: 331 },
  { x: 368, y: 202, num: '02', title: 'Design Better Experiences', desc: 'Turn ideas into intuitive solutions.', dotY: 286 },
  { x: 521, y: 172, num: '03', title: 'Build With Technology', desc: 'Engineering built for scale.', dotY: 257 },
  { x: 701, y: 138, num: '04', title: 'Integrate Everything', desc: 'Connect people, systems and data.', dotY: 222 },
  { x: 881, y: 79, num: '05', title: 'Scale Your Business', desc: 'Technology that grows with you.', dotY: 163 },
];

const curve =
  'M143 330 C 200 316, 260 306, 300 292 C 335 278, 345 262, 400 255 C 440 250, 470 248, 495 238 ' +
  'C 520 228, 550 224, 580 224 C 620 224, 640 218, 665 206 C 690 194, 720 190, 760 187 ' +
  'C 800 184, 815 178, 845 165 C 870 154, 900 148, 940 142 C 990 135, 1020 125, 1045 111';

/* Logo badge position: floated above the curve so it never covers node text */
const LOGO = { cx: 594, cy: 100, r: 48 };

/*
 * The viewBox is cropped tightly to the artwork (curve runs x:143 → 1045, content y:38 → 375),
 * so the graph touches the left/right edges of the screen and has no empty space above it.
 */
const DigitalJourney: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#030611] p-0 font-sans text-white">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden w-full lg:block">
        <svg
          viewBox="143 38 902 340"
          preserveAspectRatio="xMidYMid slice"
          className="block h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="cardGlow" cx="50%" cy="60%" r="65%">
              <stop offset="0%" stopColor="#031a0f" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#02100a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#030611" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0.14" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
            </linearGradient>

            <linearGradient id="stem" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0.9" />
            </linearGradient>

            <filter id="blurGlow" x="-10%" y="-50%" width="120%" height="200%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
            <filter id="dotGlow" x="-300%" y="-300%" width="700%" height="700%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
            <clipPath id="logoClip">
              <circle cx={LOGO.cx} cy={LOGO.cy} r={LOGO.r} />
            </clipPath>
          </defs>

          {/* Background glow – covers the whole viewBox */}
          <rect x="143" y="38" width="902" height="340" fill="url(#cardGlow)" />

          {/* Area under the curve */}
          <path d={`${curve} L 1045 378 L 143 378 Z`} fill="url(#areaFill)" />

          {/* Curve glow + core line */}
          <path d={curve} fill="none" stroke={GREEN} strokeWidth="6" strokeOpacity="0.45" filter="url(#blurGlow)" />
          <path d={curve} fill="none" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />

          {/* Nodes */}
          {nodes.map((n) => (
            <g key={n.num} textAnchor="middle">
              <text x={n.x} y={n.y + 4} fill={GREEN} fontSize="11" fontWeight="700">
                {n.num}
              </text>
              <text x={n.x} y={n.y + 20} fill="#ffffff" fontSize="10" fontWeight="700">
                {n.title}
              </text>
              <text x={n.x} y={n.y + 34} fill="#6b7280" fontSize="7.5">
                {n.desc}
              </text>

              <rect x={n.x - 0.5} y={n.y + 41} width="1" height={n.dotY - n.y - 49} fill="url(#stem)" />

              <circle cx={n.x} cy={n.dotY} r="6" fill={GREEN} opacity="0.5" filter="url(#dotGlow)" />
              <circle cx={n.x} cy={n.dotY} r="5" fill="#03140c" stroke={GREEN} strokeWidth="1.2" />
              <circle cx={n.x} cy={n.dotY} r="1.8" fill={GREEN} />
            </g>
          ))}

          {/* Central logo badge (sits above the curve, clear of node 03 / 04 text) */}
          <circle cx={LOGO.cx} cy={LOGO.cy} r={LOGO.r + 10} fill="none" stroke={GREEN} strokeOpacity="0.08" />
          <circle cx={LOGO.cx} cy={LOGO.cy} r={LOGO.r + 5} fill="none" stroke={GREEN} strokeOpacity="0.18" strokeDasharray="2 3" />
          <circle cx={LOGO.cx} cy={LOGO.cy} r={LOGO.r} fill="#02050a" stroke={GREEN} strokeOpacity="0.35" />
         <image
            href={LogoImage}
            x={LOGO.cx - 40}
            y={LOGO.cy - 20}
            width="80"
            height="40"
            preserveAspectRatio="xMidYMid meet"
            clipPath="url(#logoClip)"
          />
        </svg>
      </div>

      {/* ================= MOBILE/TABLET VIEW ================= */}
      <div className="relative mx-auto flex w-full max-w-md flex-col gap-8 px-6 py-12 lg:hidden">
        <div className="mb-4 flex justify-center">
          <div className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full border border-[#22E08A]/30 bg-[#02050a]">
            <div className="absolute inset-2 rounded-full border border-dashed border-[#22E08A]/20" />
            <img src={LogoImage} alt="iiQbets Logo" className="h-auto w-[100px] object-contain drop-shadow-md" />
          </div>
        </div>

        <div className="absolute bottom-12 left-[39px] top-[228px] w-[2px] bg-[#22E08A]/20" />

        {nodes.map((item) => (
          <div key={item.num} className="relative pl-12">
            <div className="absolute left-[2px] top-1 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#22E08A] bg-[#030611]">
              <div className="h-1.5 w-1.5 rounded-full bg-[#22E08A]" />
            </div>
            <span className="mb-1 block text-xs font-bold text-[#22E08A]">{item.num}</span>
            <h3 className="m-0 mb-1 text-left text-base font-bold text-white">{item.title}</h3>
            <p className="m-0 text-left text-xs text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalJourney;