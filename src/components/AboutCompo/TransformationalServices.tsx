// import React from 'react';

// // --- Data ---
// const bottomCards = [
//   { title: 'Process Reengineering' },
//   { title: 'Digital Infra & E Commerce' },
//   { title: 'Digital Marketing' },
//   { title: 'Training and Manpower' },
//   { title: 'Application Development' },
// ];

// const TransformationalServices: React.FC = () => {
//   return (
//     <section className="relative w-full  bg-[#050505] text-white flex flex-col items-center justify-center py-12 px-4 md:px-8 font-sans overflow-hidden">
      
//       {/* Background Ambient Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

//       {/* Main Container */}
//       <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-8 md:gap-10">
        
//         {/* Top Heading */}
//         <h1 className="text-2xl md:text-4xl font-bold text-center tracking-wide text-white drop-shadow-md">
//           Experience. Execution. Excellence.
//         </h1>

//         {/* Main Content Card (Outer Black Frame) */}
//         <div className="bg-black rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800/50 flex flex-col gap-8">
          
//           {/* Top Section: Image + Text */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
//             {/* Left: Image */}
//             <div className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-[0_0_20px_rgba(0,100,255,0.1)]">
//               {/* Using a high-quality Unsplash image to mimic the code screen */}
//               <img 
//                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop" 
//                 alt="Coding on laptop"
//                 className="w-full h-full object-cover opacity-80 mix-blend-screen"
//               />
//               {/* Blue overlay tint */}
//               <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
//             </div>

//             {/* Right: Text Content */}
//             <div className="flex flex-col gap-4 lg:pr-4">
//               <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
//                 iiiQ Digital
//               </h2>
//               <h3 className="text-xl md:text-2xl font-semibold text-white">
//                 Transformational Services
//               </h3>
              
//               <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
//                 iiiQbets is a new Generation IT Services company headquartered in Bangalore, focused on digital technologies. iiiQ helps organizations in their Digital Transformation Journey. Core area of operation is related to Data Science, be it Data Analytics and BI or Managing Data on cloud. Other Services include Software and Application Development to complement the Digitization Journey.
//               </p>
//             </div>
//           </div>

//           {/* Bottom Section: Glowing Cards Grid */}
//           {/* Note: On Mobile it stacks/scolls, on Desktop it's a 5-column grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
//             {bottomCards.map((card, index) => (
//               <div 
//                 key={index}
//                 className={`relative h-24 md:h-28 rounded-xl bg-gradient-to-b from-[#1A0B12] to-[#0A0508] border border-[#4A1525] p-4 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer overflow-hidden group
//                   ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : 'hidden sm:flex'} 
//                   ${index > 1 && index < 4 ? 'hidden lg:flex' : ''} 
//                   ${index === 4 ? 'hidden lg:flex' : ''}
//                 `}
//                 style={{
//                   // Custom box shadow to create the neon red/pink under-glow effect
//                   boxShadow: 'inset 0 -15px 25px -5px rgba(200, 30, 70, 0.5), 0 4px 10px rgba(0,0,0,0.5)'
//                 }}
//               >
//                 {/* Subtle top highlight */}
//                 <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                
//                 {card.title && (
//                   <span className="text-white text-sm font-medium text-center z-10">
//                     {card.title}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default TransformationalServices;




import React from "react";
import { motion } from "framer-motion";

// --- Data ---
const bottomCards = [
  { title: "Process Reengineering" },
  { title: "Digital Infra & E Commerce" },
  { title: "Digital Marketing" },
  { title: "Training and Manpower" },
  { title: "Application Development" },
];

// --- Animation Variants ---
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    x: -35,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as const,
    },
  },
};

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

const TransformationalServices: React.FC = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#050505] px-4 py-12 font-sans text-white sm:py-16 md:px-8 md:py-20">

      {/* Background Ambient Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-full max-w-5xl -translate-x-1/2 rounded-full bg-blue-900/10 blur-[100px]"
      />

      {/* Main Container */}
      <div className="relative z-10 flex w-full max-w-[1200px] flex-col gap-8 md:gap-10">

        {/* Top Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-2xl font-bold tracking-wide text-white drop-shadow-md sm:text-3xl md:text-4xl"
        >
          Experience. Execution. Excellence.
        </motion.h1>

        {/* Main Content Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="flex flex-col gap-8 rounded-3xl border border-gray-800/50 bg-black p-5 shadow-2xl sm:p-7 md:gap-10 md:p-10"
        >

          {/* Top Section: Image + Text */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

            {/* Left: Animated Image */}
            <motion.div
              variants={imageAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="group relative h-[250px] w-full overflow-hidden rounded-2xl border border-gray-700/50 shadow-[0_0_20px_rgba(0,100,255,0.1)] sm:h-[300px] md:h-[350px]"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
                alt="Coding on laptop"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full w-full object-cover opacity-80 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
              />

              {/* Blue Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-blue-600/20 mix-blend-overlay" />

              {/* Subtle Animated Light */}
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </motion.div>

            {/* Right: Animated Text Content */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 lg:pr-4"
            >
              <motion.h2
                variants={fadeUp}
                className="text-2xl font-bold tracking-wide text-white md:text-3xl"
              >
                iiiQ Digital
              </motion.h2>

              <motion.h3
                variants={fadeUp}
                className="text-xl font-semibold text-white md:text-2xl"
              >
                Transformational Services
              </motion.h3>

              <motion.p
                variants={fadeUp}
                className="text-xs leading-relaxed text-gray-400 sm:text-sm"
              >
                iiiQbets is a new Generation IT Services company headquartered
                in Bangalore, focused on digital technologies. iiiQ helps
                organizations in their Digital Transformation Journey. Core
                area of operation is related to Data Science, be it Data
                Analytics and BI or Managing Data on cloud. Other Services
                include Software and Application Development to complement
                the Digitization Journey.
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom Section: Animated Service Cards */}
          <motion.div
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {bottomCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                  scale: 1.035,
                  borderColor: "rgba(244, 63, 94, 0.8)",
                  transition: { duration: 0.25 },
                }}
                className={`group relative flex h-24 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-[#4A1525] bg-gradient-to-b from-[#1A0B12] to-[#0A0508] p-4 md:h-28 ${
                  index === 0
                    ? "sm:col-span-2 lg:col-span-1"
                    : "hidden sm:flex"
                } ${index > 1 && index < 4 ? "hidden lg:flex" : ""} ${
                  index === 4 ? "hidden lg:flex" : ""
                }`}
                style={{
                  boxShadow:
                    "inset 0 -15px 25px -5px rgba(200, 30, 70, 0.5), 0 4px 10px rgba(0,0,0,0.5)",
                }}
              >
                {/* Top Highlight */}
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

                {/* Animated Bottom Glow */}
                <motion.div
                  initial={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.8 }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-rose-600/30 to-transparent"
                />

                {/* Animated Card Number */}
                <span className="absolute right-3 top-2 text-xs font-semibold text-rose-400/40">
                  0{index + 1}
                </span>

                <span className="relative z-10 text-center text-sm font-medium text-white transition-colors duration-300 group-hover:text-rose-100">
                  {card.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default TransformationalServices;
