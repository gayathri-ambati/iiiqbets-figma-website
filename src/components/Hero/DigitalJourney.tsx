import React from 'react';
import { motion } from 'framer-motion';

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

/* ===== Animation configs ===== */
// const CURVE_PATH_LENGTH = 1400; // approximate; using pathLength=1 avoids needing exact value

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

          {/* Background glow – covers the whole viewBox (fades in) */}
          <motion.rect
            x="143"
            y="38"
            width="902"
            height="340"
            fill="url(#cardGlow)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />

          {/* Area under the curve (fades in) */}
          <motion.path
            d={`${curve} L 1045 378 L 143 378 Z`}
            fill="url(#areaFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />

          {/* Curve glow + core line — draw-in on mount */}
          <motion.path
            d={curve}
            fill="none"
            stroke={GREEN}
            strokeWidth="6"
            strokeOpacity="0.45"
            filter="url(#blurGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />
          <motion.path
            d={curve}
            fill="none"
            stroke={GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
          />

          {/* Nodes — staggered reveal, each dot pulses */}
          {nodes.map((n, i) => {
            const delay = 0.5 + i * 0.28;
            return (
              <motion.g
                key={n.num}
                textAnchor="middle"
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay, ease: 'easeOut' }}
              >
                <text x={n.x} y={n.y + 4} fill={GREEN} fontSize="11" fontWeight="700">
                  {n.num}
                </text>
                <text x={n.x} y={n.y + 20} fill="#ffffff" fontSize="10" fontWeight="700">
                  {n.title}
                </text>
                <text x={n.x} y={n.y + 34} fill="#6b7280" fontSize="7.5">
                  {n.desc}
                </text>

                {/* Stem — grows from top to dot */}
                <motion.rect
                  x={n.x - 0.5}
                  y={n.y + 41}
                  width="1"
                  height={n.dotY - n.y - 49}
                  fill="url(#stem)"
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1, originY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: delay + 0.15, ease: 'easeOut' }}
                  style={{ transformBox: 'fill-box', transformOrigin: 'top' }}
                />

                {/* Pulsing halo */}
                <motion.circle
                  cx={n.x}
                  cy={n.dotY}
                  r="6"
                  fill={GREEN}
                  opacity="0.5"
                  filter="url(#dotGlow)"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.dotY}
                  r="5"
                  fill="#03140c"
                  stroke={GREEN}
                  strokeWidth="1.2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                    delay: delay + 0.35,
                  }}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                />
                <motion.circle
                  cx={n.x}
                  cy={n.dotY}
                  r="1.8"
                  fill={GREEN}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.45, duration: 0.3 }}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
                />
              </motion.g>
            );
          })}

          {/* Central logo badge — scale + fade in, rings pulse */}
          <motion.g
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformBox: 'fill-box', transformOrigin: `${LOGO.cx}px ${LOGO.cy}px` }}
          >
            <motion.circle
              cx={LOGO.cx}
              cy={LOGO.cy}
              r={LOGO.r + 10}
              fill="none"
              stroke={GREEN}
              strokeOpacity="0.08"
              animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transformBox: 'fill-box', transformOrigin: `${LOGO.cx}px ${LOGO.cy}px` }}
            />
            <motion.circle
              cx={LOGO.cx}
              cy={LOGO.cy}
              r={LOGO.r + 5}
              fill="none"
              stroke={GREEN}
              strokeOpacity="0.18"
              strokeDasharray="2 3"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              style={{ transformBox: 'fill-box', transformOrigin: `${LOGO.cx}px ${LOGO.cy}px` }}
            />
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
          </motion.g>
        </svg>
      </div>

      {/* ================= MOBILE/TABLET VIEW ================= */}
      <div className="relative mx-auto flex w-full max-w-md flex-col gap-8 px-6 py-12 lg:hidden">
        {/* Logo badge — scale in + floating + rotating dashed ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex h-[140px] w-[140px] items-center justify-center rounded-full border border-[#22E08A]/30 bg-[#02050a]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-2 rounded-full border border-dashed border-[#22E08A]/20"
            />
            <img src={LogoImage} alt="iiQbets Logo" className="h-auto w-[100px] object-contain drop-shadow-md" />
          </motion.div>
        </motion.div>

        {/* Vertical connector line — grows downward on scroll */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
          className="absolute bottom-12 left-[39px] top-[228px] w-[2px] bg-[#22E08A]/20"
        />

        {nodes.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
            className="relative pl-12"
          >
            {/* Dot marker — spring pop + pulsing halo */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, damping: 15, delay: i * 0.1 + 0.2 }}
              className="absolute left-[2px] top-1 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 border-[#22E08A] bg-[#030611]"
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                className="h-1.5 w-1.5 rounded-full bg-[#22E08A]"
              />
            </motion.div>
            <span className="mb-1 block text-xs font-bold text-[#22E08A]">{item.num}</span>
            <h3 className="m-0 mb-1 text-left text-base font-bold text-white">{item.title}</h3>
            <p className="m-0 text-left text-xs text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DigitalJourney;