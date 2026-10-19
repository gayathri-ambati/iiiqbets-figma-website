import React from 'react';

// --- Types ---
interface TeamCard {
  id: string;
  title: string;
  description: string;
}

// --- Data ---
const teamData: TeamCard[] = [
  {
    id: '01',
    title: 'Business Leaders',
    description:
      'Strategic thinking and business understanding that turn ambitious ideas into practical growth opportunities.',
  },
  {
    id: '02',
    title: 'Data & Marketing Experts',
    description:
      'Data scientists and marketing professionals who transform insights into informed decisions and stronger customer experiences.',
  },
  {
    id: '03',
    title: 'Technology Innovators',
    description:
      'Experienced coders and developers building intelligent, scalable, and business-focused digital solutions.',
  },
];

const MindsBehind: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[#03060F] text-white py-14 px-6 flex justify-center overflow-hidden"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      {/* Font (Manrope matches the screenshot) */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap');`}</style>

      <div className="w-full max-w-[940px] flex flex-col">
        {/* ================= HEADER ================= */}
        <span className="text-[10px] font-extrabold tracking-[0.2em] text-[#12A594] uppercase">
          The Minds Behind iiiQ
        </span>

        <h2 className="mt-6 text-[34px] leading-[1.15] font-bold tracking-[-0.02em] text-white">
          Experience meets{' '}
          <span className="text-[#12A594] ml-1">innovation.</span>
        </h2>

        {/* ================= CARDS ================= */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[22px]">
          {teamData.map((card) => (
            <div
              key={card.id}
              className="rounded-[22px] px-[12px] py-[8px] transition-transform duration-300 hover:-translate-y-1"
              style={{
                // gradient border (cyan -> blue -> violet)
                background:
                  'linear-gradient(165deg, #1FD1F9 0%, #4361EE 48%, #8B5CF6 100%)',
                // red outer glow
                boxShadow:
                  '0 0 22px 2px rgba(255, 40, 70, 0.55), 0 0 40px 6px rgba(255, 30, 60, 0.18)',
              }}
            >
              {/* Inner card */}
              <div className="h-full rounded-[16px] bg-[#0A1630] pl-6 pr-10 pt-5 pb-8 flex flex-col">
                {/* Number badge */}
                <div className="w-8 h-8 rounded-lg bg-[#E6FFFA] flex items-center justify-center">
                  <span className="text-[#0D9488] text-[10px] font-extrabold">
                    {card.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-[22px] text-[14px] leading-tight font-bold text-white">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-[10px] text-[10px] leading-[15.5px] text-slate-300/90 font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MindsBehind;