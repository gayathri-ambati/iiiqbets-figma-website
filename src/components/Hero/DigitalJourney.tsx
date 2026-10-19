import React from 'react';

import LogoImage from '../../assets/logo.webp';

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

const DigitalJourney: React.FC = () => {
  return (
    <section className="relative w-full bg-[#030611] text-white py-12 md:py-16 font-sans overflow-hidden flex flex-col items-center justify-center">
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:block w-full max-w-[1142px] mx-auto">
        <svg viewBox="0 0 1142 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* soft dark-green card behind everything */}
            <radialGradient id="cardGlow" cx="50%" cy="55%" r="60%">
              <stop offset="0%" stopColor="#031a0f" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#02100a" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#030611" stopOpacity="0" />
            </radialGradient>

            {/* fill under the curve */}
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0.14" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
            </linearGradient>

            {/* vertical connector lines */}
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
              <circle cx="594" cy="150" r="54" />
            </clipPath>
          </defs>

          {/* Card background */}
          <rect x="97" y="45" width="953" height="330" fill="url(#cardGlow)" />

          {/* Area under the curve */}
          <path d={`${curve} L 1045 375 L 143 375 Z`} fill="url(#areaFill)" />

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

              {/* vertical stem */}
              <rect x={n.x - 0.5} y={n.y + 41} width="1" height={n.dotY - n.y - 49} fill="url(#stem)" />

              {/* target dot */}
              <circle cx={n.x} cy={n.dotY} r="6" fill={GREEN} opacity="0.5" filter="url(#dotGlow)" />
              <circle cx={n.x} cy={n.dotY} r="5" fill="#03140c" stroke={GREEN} strokeWidth="1.2" />
              <circle cx={n.x} cy={n.dotY} r="1.8" fill={GREEN} />
            </g>
          ))}

          {/* Central logo circle (drawn last so it overlaps node 03 text) */}
          <circle cx="594" cy="150" r="66" fill="none" stroke={GREEN} strokeOpacity="0.08" />
          <circle cx="594" cy="150" r="60" fill="none" stroke={GREEN} strokeOpacity="0.18" strokeDasharray="2 3" />
          <circle cx="594" cy="150" r="54" fill="#02050a" stroke={GREEN} strokeOpacity="0.35" />
          <image
            href={LogoImage}
            x="552"
            y="124"
            width="84"
            height="52"
            preserveAspectRatio="xMidYMid meet"
            clipPath="url(#logoClip)"
          />
        </svg>
      </div>

      {/* ================= MOBILE/TABLET VIEW ================= */}
      <div className="lg:hidden w-full max-w-md mx-auto px-6 flex flex-col relative gap-8">
        <div className="flex justify-center mb-4">
          <div className="w-[140px] h-[140px] rounded-full bg-[#02050a] border border-[#22E08A]/30 flex items-center justify-center relative">
            <div className="absolute inset-2 border border-dashed border-[#22E08A]/20 rounded-full" />
            <img src={LogoImage} alt="Logo" className="w-[80px] object-contain" />
          </div>
        </div>

        <div className="absolute left-[39px] top-[180px] bottom-10 w-[2px] bg-[#22E08A]/20" />

        {nodes.map((item) => (
          <div key={item.num} className="relative pl-12">
            <div className="absolute left-[2px] top-1 w-[18px] h-[18px] rounded-full bg-[#030611] border-2 border-[#22E08A] flex items-center justify-center z-10">
              <div className="w-1.5 h-1.5 bg-[#22E08A] rounded-full" />
            </div>
            <span className="text-[#22E08A] font-bold text-xs mb-1 block">{item.num}</span>
            <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
            <p className="text-gray-400 text-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalJourney;