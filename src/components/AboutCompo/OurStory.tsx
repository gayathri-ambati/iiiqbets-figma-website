// import React from 'react';

// // --- Data ---
// const tags = [
//   'Application Development',
//   'Data Science',
//   'Digital Transformation',
//   'Digital Marketing',
//   'Design Consultancy',
//   'Business Intelligence',
// ];

// const OurStory: React.FC = () => {
//   return (
//     <section className="relative w-full  bg-[#050A15] text-white py-16 md:py-24 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center">
      
//       {/* Background Ambient Glow (Subtle) */}
//       <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12 md:gap-16">
        
//         {/* ================= HEADER SECTION ================= */}
//         <div className="flex flex-col items-center text-center gap-4">
//           <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#14B8A6] uppercase">
//             Our Story
//           </span>
//           <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
//             Experience meets <span className="text-[#14B8A6]">innovation.</span>
//           </h1>
//         </div>

//         {/* ================= MAIN CONTENT GRID ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
//           {/* LEFT COLUMN: Image */}
//           <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800/50">
//             <img 
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
//               alt="Team collaborating at a table with laptops"
//               className="w-full h-full object-cover"
//             />
//             {/* Slight dark overlay to match the mood */}
//             <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
//           </div>

//           {/* RIGHT COLUMN: Text Content */}
//           <div className="flex flex-col gap-6 lg:pr-4">
            
//             <span className="text-xs font-bold tracking-[0.15em] text-[#14B8A6] uppercase">
//               Our Story
//             </span>
            
//             <h2 className="text-3xl md:text-4xl font-bold leading-[1.2]">
//               Intelligence is at the <br className="hidden md:block" />
//               <span className="text-[#14B8A6]">heart of everything.</span>
//             </h2>

//             <div className="flex flex-col gap-4 text-gray-300 text-sm md:text-base leading-relaxed">
//               <p>
//                 Intelligence Quotient — that's what we're
//                 <sup className="text-gray-500 text-[10px] ml-1">TM</sup>
//                 <br className="hidden md:block" />
//                 on. We believe in multiplying the power of intelligence by bringing together our team's IQ, our customers' IQ, and the IQ of the people who use the solutions we create.
//               </p>
              
//               <p>
//                 At <span className="font-semibold text-white">iiiQbets</span> (pronounced "triple IQ Bets"), intelligence drives everything we do and every technology we develop. We are a technology services company helping businesses turn complex challenges into meaningful digital opportunities.
//               </p>
              
//               <p>
//                 Headquartered in Bangalore, India's IT capital, we work with technology start-ups and traditional enterprises to rethink possibilities, modernize operations, and build strategies for a digitally connected future.
//               </p>
//             </div>

//             {/* Tags Section */}
//             <div className="flex flex-col gap-4 mt-2">
//               <h3 className="text-white font-bold text-sm md:text-base">What We Bring Together</h3>
              
//               <div className="flex flex-wrap gap-2 md:gap-3">
//                 {tags.map((tag, index) => (
//                   <span 
//                     key={index}
//                     className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-medium text-gray-200 bg-[#0C162C] border border-[#1E3A8A]/40 rounded-full hover:bg-[#1E3A8A]/20 hover:border-[#3B82F6]/50 transition-colors cursor-default shadow-[0_0_15px_rgba(30,58,138,0.2)]"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;


import React, { useEffect, useRef, useState } from 'react';

// --- Data ---
const tags = [
  'Application Development',
  'Data Science',
  'Digital Transformation',
  'Digital Marketing',
  'Design Consultancy',
  'Business Intelligence',
];

// --- Custom hook for intersection observer (re-triggers on every enter/leave) ---
const useInView = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Toggle based on intersection — animates in when visible, out when not
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.15, ...options });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isInView };
};

// --- Animation wrapper component ---
interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  threshold = 0.15,
}) => {
  const { ref, isInView } = useInView({ threshold });

  const getTransform = () => {
    if (isInView) return 'translate-x-0 translate-y-0';

    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-x-0 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out will-change-transform
        ${isInView ? 'opacity-100' : 'opacity-0'}
        ${getTransform()}
        ${className}
      `}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
};

const OurStory: React.FC = () => {
  return (
    <section className="relative w-full bg-[#050A15] text-white py-16 md:py-24 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center">

      {/* Background Ambient Glow (Subtle) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-teal-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-12 md:gap-16">

        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col items-center text-center gap-4">
          <AnimatedElement delay={0} direction="down">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#14B8A6] uppercase">
              Our Story
            </span>
          </AnimatedElement>
          <AnimatedElement delay={100} direction="up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Experience meets <span className="text-[#14B8A6]">innovation.</span>
            </h1>
          </AnimatedElement>
        </div>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN: Image */}
          <AnimatedElement delay={150} direction="left" className="w-full">
            <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800/50">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop"
                alt="Team collaborating at a table with laptops"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>
          </AnimatedElement>

          {/* RIGHT COLUMN: Text Content */}
          <div className="flex flex-col gap-6 lg:pr-4">

            <AnimatedElement delay={250} direction="right">
              <span className="text-xs font-bold tracking-[0.15em] text-[#14B8A6] uppercase">
                Our Story
              </span>
            </AnimatedElement>

            <AnimatedElement delay={350} direction="right">
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.2]">
                Intelligence is at the <br className="hidden md:block" />
                <span className="text-[#14B8A6]">heart of everything.</span>
              </h2>
            </AnimatedElement>

            <AnimatedElement delay={450} direction="right">
              <div className="flex flex-col gap-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Intelligence Quotient — that's what we're
                  <sup className="text-gray-500 text-[10px] ml-1">TM</sup>
                  <br className="hidden md:block" />
                  on. We believe in multiplying the power of intelligence by bringing together our team's IQ, our customers' IQ, and the IQ of the people who use the solutions we create.
                </p>

                <p>
                  At <span className="font-semibold text-white">iiiQbets</span> (pronounced "triple IQ Bets"), intelligence drives everything we do and every technology we develop. We are a technology services company helping businesses turn complex challenges into meaningful digital opportunities.
                </p>

                <p>
                  Headquartered in Bangalore, India's IT capital, we work with technology start-ups and traditional enterprises to rethink possibilities, modernize operations, and build strategies for a digitally connected future.
                </p>
              </div>
            </AnimatedElement>

            {/* Tags Section */}
            <AnimatedElement delay={550} direction="up" className="w-full">
              <div className="flex flex-col gap-4 mt-2">
                <h3 className="text-white font-bold text-sm md:text-base">What We Bring Together</h3>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-medium text-gray-200 bg-[#0C162C] border border-[#1E3A8A]/40 rounded-full hover:bg-[#1E3A8A]/20 hover:border-[#3B82F6]/50 transition-colors cursor-default shadow-[0_0_15px_rgba(30,58,138,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedElement>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;