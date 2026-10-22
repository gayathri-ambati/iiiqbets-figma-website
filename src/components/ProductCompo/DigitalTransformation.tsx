// import React from 'react';

// const DigitalTransformation: React.FC = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-[#050505] text-white py-12 md:py-20 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center">
      
//       {/* Background Ambient Glow (Deep Purple/Pink) */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
//         <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[150px]" />
//         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-800/10 rounded-full blur-[100px]" />
//       </div>

//       <div className="relative z-10 w-full max-w-[1400px] flex flex-col gap-4">
        
//         {/* ================= TOP HERO BANNER ================= */}
//         <div className="relative w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
          
//           {/* Background Image */}
//           <img 
//             src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" 
//             alt="Team working on documents" 
//             className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//           />

//           {/* Dark Gradient Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

//           {/* Content Container */}
//           <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-center max-w-3xl">
            
//             <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#00E5FF] uppercase mb-3 md:mb-4">
//               Digital Transformation
//             </span>

//             <h1 className="text-3xl md:text-5xl font-bold leading-[1.15] mb-4 text-white">
//               Process Reengineering for Digitization
//             </h1>

//             <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6 max-w-2xl">
//               We create value for our customers by understanding and improving their processes from both short-term and long-term perspectives. We guide business process owners and key stakeholders in re-engineering business processes by focusing on redesign and re-engineering of existing processes.
//             </p>

//             <button className="self-start px-5 py-2 rounded-full bg-[#FF2D75] hover:bg-[#ff4785] text-white text-[10px] md:text-xs font-bold transition-colors">
//               EXPLORE
//             </button>
//           </div>
//         </div>

//         {/* ================= BOTTOM GALLERY SECTION ================= */}
//         {/* Using a grid that adapts to mobile and desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          
//           {/* Card 1: Analyze */}
//           <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
//             <img 
//               src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
//               alt="Analyze data on laptop" 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
//             <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
//               <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-300 uppercase block mb-1">
//                 01 / Analyze
//               </span>
//               <div className="w-8 h-1 bg-[#00E5FF] rounded-full" />
//             </div>
//           </div>

//           {/* Card 2: Redesign */}
//           <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
//             <img 
//               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
//               alt="Team pointing at laptop screen" 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
//             <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
//               <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-300 uppercase block mb-1">
//                 02 / Redesign
//               </span>
//               <div className="w-8 h-1 bg-[#00E5FF] rounded-full" />
//             </div>
//           </div>

//           {/* Card 3: Digitize */}
//           <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden group cursor-pointer border border-white/5">
//             <img 
//               src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop" 
//               alt="Man looking at trading screens" 
//               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
//             <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
//               <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-300 uppercase block mb-1">
//                 03 / Digitize
//               </span>
//               <div className="w-8 h-1 bg-[#00E5FF] rounded-full" />
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default DigitalTransformation;




// import React from 'react';

// const STARS: React.CSSProperties = {
//   backgroundColor: '#07030f',
//   backgroundImage: [
//     // nebula washes
//     'radial-gradient(ellipse 55% 45% at 10% 8%, rgba(120,40,200,0.45), transparent 70%)',
//     'radial-gradient(ellipse 50% 40% at 92% 12%, rgba(190,40,140,0.35), transparent 70%)',
//     'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(110,50,210,0.45), transparent 70%)',
//     'radial-gradient(ellipse 35% 30% at 0% 75%, rgba(140,60,220,0.35), transparent 70%)',
//     'radial-gradient(ellipse 35% 30% at 100% 70%, rgba(200,50,160,0.30), transparent 70%)',
//     // stars
//     'radial-gradient(1.5px 1.5px at 8% 20%, #fff, transparent)',
//     'radial-gradient(1px 1px at 18% 62%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 27% 12%, #e9d5ff, transparent)',
//     'radial-gradient(1px 1px at 36% 85%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 44% 38%, #fff, transparent)',
//     'radial-gradient(1px 1px at 53% 8%, #fbcfe8, transparent)',
//     'radial-gradient(1.5px 1.5px at 61% 72%, #fff, transparent)',
//     'radial-gradient(1px 1px at 69% 30%, #fff, transparent)',
//     'radial-gradient(2px 2px at 77% 90%, #e9d5ff, transparent)',
//     'radial-gradient(1px 1px at 85% 48%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 93% 78%, #fff, transparent)',
//     'radial-gradient(1px 1px at 4% 90%, #fff, transparent)',
//     'radial-gradient(1px 1px at 97% 6%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 48% 55%, #fff, transparent)',
//     'radial-gradient(1px 1px at 12% 40%, #fbcfe8, transparent)',
//   ].join(','),
// };

// const IMG = {
//   hero: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
//   analyze: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
//   redesign: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
//   digitize: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop',
// };

// const cards = [
//   { img: IMG.analyze, label: '01 / ANALYZE', alt: 'Analytics dashboard on a laptop' },
//   { img: IMG.redesign, label: '02 / REDESIGN', alt: 'Hands pointing at a laptop screen' },
//   { img: IMG.digitize, label: '03 / DIGITIZE', alt: 'Person watching trading screens' },
// ];

// const strip = [
//   { img: IMG.analyze, alt: 'Dashboard preview' },
//   { img: IMG.redesign, alt: 'Team preview' },
//   { img: IMG.analyze, alt: 'Dashboard preview' },
// ];

// const DigitalTransformation: React.FC = () => {
//   return (
//     <section
//       className="relative w-full  text-white font-sans overflow-hidden flex items-center justify-center px-4 py-10 md:px-10 md:py-16"
//       style={STARS}
//     >
//       <div className="relative z-10 w-full max-w-[1100px] flex flex-col gap-4 md:gap-5">
//         {/* ================= HERO BANNER ================= */}
//         <div
//           className="relative w-full min-h-[320px] md:min-h-0 md:aspect-[4.1/1] rounded-[28px] overflow-hidden border border-pink-500/60 group cursor-pointer"
//           style={{
//             boxShadow:
//               '0 0 0 1px rgba(255,45,117,0.25), 0 0 35px rgba(255,45,117,0.45), 0 0 90px rgba(190,40,160,0.35)',
//           }}
//         >
//           <img
//             src={IMG.hero}
//             alt="Hands reviewing process documents beside a laptop"
//             className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//           />
//           {/* teal tint like the reference */}
//           <div className="absolute inset-0 bg-teal-900/25 mix-blend-multiply" />
//           {/* left-to-right darkening for text */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

//           <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-[640px]">
//             <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-[#00E5FF] uppercase mb-3">
//               Digital Transformation
//             </span>

//             <h1 className="text-2xl md:text-[34px] font-semibold leading-tight mb-3 tracking-tight">
//               <span className="text-white">Process Reengineering</span>{' '}
//               <span className="text-white/60 font-medium">for Digitization</span>
//             </h1>

//             <p className="text-gray-300 text-[10px] md:text-[11px] leading-[1.7] mb-5 max-w-[520px]">
//               We create value for our customers by understanding and improving their processes from
//               both short-term and long-term perspectives. We guide business process owners and
//               subject-matter experts in re-engineering business processes by focusing on redesign
//               and reconfiguration of existing processes.
//             </p>

//             <button
//               type="button"
//               className="self-start px-3 py-1 rounded-[3px] bg-[#FF2D75] hover:bg-[#ff4785] text-white text-[8px] font-bold tracking-wider transition-colors"
//             >
//               EXPLORE →
//             </button>
//           </div>
//         </div>

//         {/* ================= BOTTOM ROW ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_0.82fr] gap-4 md:gap-5">
//           {cards.map((c) => (
//             <div
//               key={c.label}
//               className="relative h-[220px] md:h-[240px] rounded-[26px] overflow-hidden border border-white/10 group cursor-pointer"
//               style={{
//                 boxShadow:
//                   '0 0 0 1px rgba(168,85,247,0.25), 0 0 28px rgba(168,85,247,0.35), 0 10px 40px rgba(0,0,0,0.6)',
//               }}
//             >
//               <img
//                 src={c.img}
//                 alt={c.alt}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
//               <span className="absolute bottom-4 left-5 text-[8px] font-semibold tracking-[0.15em] text-white">
//                 {c.label}
//               </span>
//             </div>
//           ))}

//           {/* Stacked thumbnail strip (4th column) */}
//           <div
//             className="hidden md:flex flex-col gap-[3px] h-[240px] rounded-[22px] overflow-hidden border border-white/10"
//             style={{
//               boxShadow:
//                 '0 0 0 1px rgba(168,85,247,0.25), 0 0 28px rgba(168,85,247,0.35), 0 10px 40px rgba(0,0,0,0.6)',
//             }}
//           >
//             {strip.map((s, i) => (
//               <div key={i} className="relative flex-1 overflow-hidden">
//                 <img src={s.img} alt={s.alt} className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-black/20" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DigitalTransformation;




// import React from 'react';

// const STARS: React.CSSProperties = {
//   backgroundColor: '#07030f',
//   backgroundImage: [
//     // nebula washes
//     'radial-gradient(ellipse 55% 45% at 10% 8%, rgba(120,40,200,0.45), transparent 70%)',
//     'radial-gradient(ellipse 50% 40% at 92% 12%, rgba(190,40,140,0.35), transparent 70%)',
//     'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(110,50,210,0.45), transparent 70%)',
//     'radial-gradient(ellipse 35% 30% at 0% 75%, rgba(140,60,220,0.35), transparent 70%)',
//     'radial-gradient(ellipse 35% 30% at 100% 70%, rgba(200,50,160,0.30), transparent 70%)',
//     // stars
//     'radial-gradient(1.5px 1.5px at 8% 20%, #fff, transparent)',
//     'radial-gradient(1px 1px at 18% 62%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 27% 12%, #e9d5ff, transparent)',
//     'radial-gradient(1px 1px at 36% 85%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 44% 38%, #fff, transparent)',
//     'radial-gradient(1px 1px at 53% 8%, #fbcfe8, transparent)',
//     'radial-gradient(1.5px 1.5px at 61% 72%, #fff, transparent)',
//     'radial-gradient(1px 1px at 69% 30%, #fff, transparent)',
//     'radial-gradient(2px 2px at 77% 90%, #e9d5ff, transparent)',
//     'radial-gradient(1px 1px at 85% 48%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 93% 78%, #fff, transparent)',
//     'radial-gradient(1px 1px at 4% 90%, #fff, transparent)',
//     'radial-gradient(1px 1px at 97% 6%, #fff, transparent)',
//     'radial-gradient(1.5px 1.5px at 48% 55%, #fff, transparent)',
//     'radial-gradient(1px 1px at 12% 40%, #fbcfe8, transparent)',
//   ].join(','),
// };

// const IMG = {
//   hero: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
//   analyze: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
//   redesign: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
//   digitize: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop',
// };

// const cards = [
//   { img: IMG.analyze, label: '01 / ANALYZE', alt: 'Analytics dashboard on a laptop' },
//   { img: IMG.redesign, label: '02 / REDESIGN', alt: 'Hands pointing at a laptop screen' },
//   { img: IMG.digitize, label: '03 / DIGITIZE', alt: 'Person watching trading screens' },
// ];

// const strip = [
//   { img: IMG.analyze, alt: 'Dashboard preview' },
//   { img: IMG.redesign, alt: 'Team preview' },
//   { img: IMG.analyze, alt: 'Dashboard preview' },
// ];

// const DigitalTransformation: React.FC = () => {
//   return (
//     <section
//       // CHANGED: Removed 'flex items-center justify-center px-4' and reduced edge padding
//       className="relative w-full text-white font-sans overflow-hidden py-10 px-4 md:px-8 md:py-16"
//       style={STARS}
//     >
//       {/* CHANGED: Removed 'max-w-[1100px]' and 'justify-center' so the container grows to fill the width */}
//       <div className="relative z-10 w-full flex flex-col gap-4 md:gap-5">
//         {/* ================= HERO BANNER ================= */}
//         <div
//           className="relative w-full min-h-[320px] md:min-h-0 md:aspect-[4.1/1] rounded-[28px] overflow-hidden border border-pink-500/60 group cursor-pointer"
//           style={{
//             boxShadow:
//               '0 0 0 1px rgba(255,45,117,0.25), 0 0 35px rgba(255,45,117,0.45), 0 0 90px rgba(190,40,160,0.35)',
//           }}
//         >
//           <img
//             src={IMG.hero}
//             alt="Hands reviewing process documents beside a laptop"
//             className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//           />
//           {/* teal tint like the reference */}
//           <div className="absolute inset-0 bg-teal-900/25 mix-blend-multiply" />
//           {/* left-to-right darkening for text */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

//           <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-[640px]">
//             <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-[#00E5FF] uppercase mb-3">
//               Digital Transformation
//             </span>

//             <h1 className="text-2xl md:text-[34px] font-semibold leading-tight mb-3 tracking-tight">
//               <span className="text-white">Process Reengineering</span>{' '}
//               <span className="text-white/60 font-medium">for Digitization</span>
//             </h1>

//             <p className="text-gray-300 text-[10px] md:text-[11px] leading-[1.7] mb-5 max-w-[520px]">
//               We create value for our customers by understanding and improving their processes from
//               both short-term and long-term perspectives. We guide business process owners and
//               subject-matter experts in re-engineering business processes by focusing on redesign
//               and reconfiguration of existing processes.
//             </p>

//             <button
//               type="button"
//               className="self-start px-3 py-1 rounded-[3px] bg-[#FF2D75] hover:bg-[#ff4785] text-white text-[8px] font-bold tracking-wider transition-colors"
//             >
//               EXPLORE →
//             </button>
//           </div>
//         </div>

//         {/* ================= BOTTOM ROW ================= */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_0.82fr] gap-4 md:gap-5">
//           {cards.map((c) => (
//             <div
//               key={c.label}
//               className="relative h-[220px] md:h-[240px] rounded-[26px] overflow-hidden border border-white/10 group cursor-pointer"
//               style={{
//                 boxShadow:
//                   '0 0 0 1px rgba(168,85,247,0.25), 0 0 28px rgba(168,85,247,0.35), 0 10px 40px rgba(0,0,0,0.6)',
//               }}
//             >
//               <img
//                 src={c.img}
//                 alt={c.alt}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
//               <span className="absolute bottom-4 left-5 text-[8px] font-semibold tracking-[0.15em] text-white">
//                 {c.label}
//               </span>
//             </div>
//           ))}

//           {/* Stacked thumbnail strip (4th column) */}
//           <div
//             className="hidden md:flex flex-col gap-[3px] h-[240px] rounded-[22px] overflow-hidden border border-white/10"
//             style={{
//               boxShadow:
//                 '0 0 0 1px rgba(168,85,247,0.25), 0 0 28px rgba(168,85,247,0.35), 0 10px 40px rgba(0,0,0,0.6)',
//             }}
//           >
//             {strip.map((s, i) => (
//               <div key={i} className="relative flex-1 overflow-hidden">
//                 <img src={s.img} alt={s.alt} className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-black/20" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DigitalTransformation;


import React, { useState, useEffect } from 'react';

const STARS: React.CSSProperties = {
  backgroundColor: '#07030f',
  backgroundImage: [
    'radial-gradient(ellipse 55% 45% at 10% 8%, rgba(120,40,200,0.45), transparent 70%)',
    'radial-gradient(ellipse 50% 40% at 92% 12%, rgba(190,40,140,0.35), transparent 70%)',
    'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(110,50,210,0.45), transparent 70%)',
    'radial-gradient(ellipse 35% 30% at 0% 75%, rgba(140,60,220,0.35), transparent 70%)',
    'radial-gradient(ellipse 35% 30% at 100% 70%, rgba(200,50,160,0.30), transparent 70%)',
    'radial-gradient(1.5px 1.5px at 8% 20%, #fff, transparent)',
    'radial-gradient(1px 1px at 18% 62%, #fff, transparent)',
    'radial-gradient(1.5px 1.5px at 27% 12%, #e9d5ff, transparent)',
    'radial-gradient(1px 1px at 36% 85%, #fff, transparent)',
    'radial-gradient(1.5px 1.5px at 44% 38%, #fff, transparent)',
    'radial-gradient(1px 1px at 53% 8%, #fbcfe8, transparent)',
    'radial-gradient(1.5px 1.5px at 61% 72%, #fff, transparent)',
    'radial-gradient(1px 1px at 69% 30%, #fff, transparent)',
    'radial-gradient(2px 2px at 77% 90%, #e9d5ff, transparent)',
    'radial-gradient(1px 1px at 85% 48%, #fff, transparent)',
    'radial-gradient(1.5px 1.5px at 93% 78%, #fff, transparent)',
    'radial-gradient(1px 1px at 4% 90%, #fff, transparent)',
    'radial-gradient(1px 1px at 97% 6%, #fff, transparent)',
    'radial-gradient(1.5px 1.5px at 48% 55%, #fff, transparent)',
    'radial-gradient(1px 1px at 12% 40%, #fbcfe8, transparent)',
  ].join(','),
};

const IMG = {
  hero: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop',
  analyze: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  redesign: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
  digitize: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1600&auto=format&fit=crop',
};

// Each slide has its OWN heroImg and cardImg — they are independent.
const SLIDES = [
  {
    id: 'analyze',
    // ⬇️ Slide 1 keeps the ORIGINAL hero banner image
    heroImg: IMG.hero,
    heroAlt: 'Hands reviewing process documents beside a laptop',
    eyebrow: 'Digital Transformation',
    titleWhite: 'Process Reengineering',
    titleMuted: 'for Digitization',
    desc: 'We create value for our customers by understanding and improving their processes from both short-term and long-term perspectives. We guide business process owners and subject-matter experts in re-engineering business processes by focusing on redesign and reconfiguration of existing processes.',
    cardImg: IMG.analyze,
    cardAlt: 'Analytics dashboard on a laptop',
    cardLabel: '01 / ANALYZE',
  },
  {
    id: 'redesign',
    heroImg: IMG.redesign,
    heroAlt: 'Hands pointing at a laptop screen',
    eyebrow: 'Design Studio',
    titleWhite: 'Experience Redesign',
    titleMuted: 'for Growth',
    desc: 'We reimagine digital touchpoints end-to-end — aligning product, content and interaction design so every journey feels effortless. Our teams prototype, test and iterate rapidly to turn friction into delight across web and mobile.',
    cardImg: IMG.redesign,
    cardAlt: 'Hands pointing at a laptop screen',
    cardLabel: '02 / REDESIGN',
  },
  {
    id: 'digitize',
    heroImg: IMG.digitize,
    heroAlt: 'Person watching trading screens',
    eyebrow: 'Platform Engineering',
    titleWhite: 'Process Digitization',
    titleMuted: 'at Scale',
    desc: 'From legacy workflows to cloud-native platforms, we digitize the core — automating operations, instrumenting data pipelines and enabling real-time decisions. The result: faster cycles, lower cost and a platform ready for what comes next.',
    cardImg: IMG.digitize,
    cardAlt: 'Person watching trading screens',
    cardLabel: '03 / DIGITIZE',
  },
];

const AUTO_MS = 4000;

const DigitalTransformation: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, []);

  const current = SLIDES[active];

  return (
    <section
      className="relative w-full text-white font-sans overflow-hidden py-10 px-4 md:px-8 md:py-16"
      style={STARS}
    >
      <div className="relative z-10 w-full flex flex-col gap-4 md:gap-5">
        {/* ================= HERO BANNER (auto-changing) ================= */}
        <div
          className="relative w-full min-h-[320px] md:min-h-0 md:aspect-[4.1/1] rounded-[28px] overflow-hidden border border-pink-500/60 group cursor-pointer"
          style={{
            boxShadow:
              '0 0 0 1px rgba(255,45,117,0.25), 0 0 35px rgba(255,45,117,0.45), 0 0 90px rgba(190,40,160,0.35)',
          }}
        >
          {/* Cross-fade between hero images */}
          {SLIDES.map((s, i) => (
            <img
              key={s.id}
              src={s.heroImg}
              alt={s.heroAlt}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 group-hover:scale-105"
              style={{ opacity: i === active ? 1 : 0 }}
            />
          ))}
          <div className="absolute inset-0 bg-teal-900/25 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 max-w-[640px]">
            <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] text-[#00E5FF] uppercase mb-3">
              {current.eyebrow}
            </span>

            <h1
              key={`title-${active}`}
              className="text-2xl md:text-[34px] font-semibold leading-tight mb-3 tracking-tight animate-[fadeUp_600ms_ease]"
            >
              <span className="text-white">{current.titleWhite}</span>{' '}
              <span className="text-white/60 font-medium">{current.titleMuted}</span>
            </h1>

            <p
              key={`desc-${active}`}
              className="text-gray-300 text-[10px] md:text-[11px] leading-[1.7] mb-5 max-w-[520px] animate-[fadeUp_700ms_ease]"
            >
              {current.desc}
            </p>

            <button
              type="button"
              className="self-start px-3 py-1 rounded-[3px] bg-[#FF2D75] hover:bg-[#ff4785] text-white text-[8px] font-bold tracking-wider transition-colors"
            >
              EXPLORE →
            </button>

            <div className="absolute bottom-4 left-6 md:left-12 flex gap-1.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-[#FF2D75]' : 'w-3 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_0.82fr] gap-4 md:gap-5">
          {SLIDES.map((c, i) => {
            const isActive = i === active;
            return (
              <div
                key={c.id}
                onClick={() => setActive(i)}
                className={`relative h-[220px] md:h-[240px] rounded-[26px] overflow-hidden border group cursor-pointer transition-all duration-500 ${
                  isActive ? 'border-pink-400/80 scale-[1.02]' : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
                style={{
                  boxShadow: isActive
                    ? '0 0 0 1px rgba(255,45,117,0.6), 0 0 32px rgba(255,45,117,0.5), 0 10px 40px rgba(0,0,0,0.6)'
                    : '0 0 0 1px rgba(168,85,247,0.25), 0 0 28px rgba(168,85,247,0.35), 0 10px 40px rgba(0,0,0,0.6)',
                }}
              >
                <img
                  src={c.cardImg}
                  alt={c.cardAlt}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-5 text-[8px] font-semibold tracking-[0.15em] text-white">
                  {c.cardLabel}
                </span>
              </div>
            );
          })}

          {/* Stacked thumbnail strip */}
          <div
            className="hidden md:flex flex-col gap-[3px] h-[240px] rounded-[22px] overflow-hidden border border-white/10"
            style={{
              boxShadow:
                '0 0 0 1px rgba(168,85,247,0.25), 0 0 28px rgba(168,85,247,0.35), 0 10px 40px rgba(0,0,0,0.6)',
            }}
          >
            {[0, 1, 2].map((offset) => {
              const s = SLIDES[(active + offset) % SLIDES.length];
              return (
                <div key={`${s.id}-${offset}`} className="relative flex-1 overflow-hidden">
                  <img
                    src={s.cardImg}
                    alt={s.cardAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default DigitalTransformation;