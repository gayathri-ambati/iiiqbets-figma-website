
// import React from 'react';
// import { Plus, Lightbulb, Code2, RefreshCcw, ArrowUpRight } from 'lucide-react';


// // --- Data ---
// const faqsLeft = [
//   'How will the Digital Transformation journey work?',
//   'How long does digital transformation take?',
//   'How do you address data security and privacy?',
//   'Can we choose individual digital marketing services?',
//   'Can you develop custom chatbots?',
//   'Do you provide application development?',
// ];

// const faqsRight = [
//   'Do you accept standalone web design projects?',
//   'Do you implement business process re-engineering?',
//   'Do you provide business strategy consulting?',
//   'Which industries can benefit from data analytics?',
//   'Do you provide staffing services?',
//   'Can you establish an Offshore Development Center?',
//   'Can non-core activities be outsourced?',
//   'Do you offer cloud and business intelligence solutions?',
// ];

// const features = [
//   {
//     icon: <Lightbulb className="w-4 h-4 text-[#A78BFA]" />,
//     title: 'Business-first Thinking',
//     desc: 'Solutions aligned with your goals and operational needs.',
//   },
//   {
//     icon: <Code2 className="w-4 h-4 text-[#A78BFA]" />,
//     title: 'Technology expertise',
//     desc: 'Digital capabilities built around practical experience.',
//   },
//   {
//     icon: <RefreshCcw className="w-4 h-4 text-[#A78BFA]" />,
//     title: 'Transformation focus',
//     desc: 'A structured approach to business and technology change.',
//   },
// ];

// // --- FAQ Item ---
// const FaqItem = ({ number, question }: { number: number; question: string }) => {
//   const formattedNumber = number.toString().padStart(2, '0');

//   return (
//     <div className="group flex items-center justify-between bg-[#0B1120] border border-gray-800/80 hover:border-gray-600 rounded-lg p-3 md:p-4 cursor-pointer transition-colors duration-200">
//       <div className="flex items-center gap-3 md:gap-4 pr-4">
//         <span className="text-[10px] md:text-xs font-mono text-gray-500 bg-[#151E2F] px-1.5 py-0.5 rounded">
//           {formattedNumber}
//         </span>
//         <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors leading-tight">
//           {question}
//         </span>
//       </div>
//       <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-700 group-hover:border-gray-400 transition-colors flex-shrink-0">
//         <Plus className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
//       </span>
//     </div>
//   );
// };

// const FAQ: React.FC = () => {
//   return (
//     <section className="relative w-full  bg-[#03050A] text-white pt-10 md:pt-12 pb-16 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center">
//       {/* Background Ambient Glow */}
//       <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

//       <div className="relative z-10 w-full max-w-[1100px] flex flex-col gap-10 md:gap-12">
//         {/* ================= HEADER SECTION ================= */}
//         <div className="flex flex-col items-start text-left gap-3">
//           <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase">
//             Knowledge Center
//           </span>
//           <h1
//             className="text-4xl md:text-[56px] font-extrabold tracking-[-0.02em] text-white leading-[1.1]"
//             style={{ fontFamily: "'Manrope', sans-serif" }}
//           >
//             Questions? We've got <br />
//             <span className="text-[#A78BFA]">answers.</span>
//           </h1>
//         </div>

//         {/* ================= FAQ SECTION ================= */}
//         <div className="flex flex-col gap-6">
//           {/* FAQ Subheader */}
//           <div className="flex justify-between items-end border-b border-gray-800 pb-4">
//             <p className="text-xs md:text-sm text-gray-400">
//               <span className="font-semibold text-gray-300">Frequently asked questions.</span>{' '}
//               Explore our expertise.
//             </p>
//             <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#00E5FF] uppercase">
//               Help Center
//             </span>
//           </div>

//           {/* FAQ Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
//             {/* Left Column */}
//             <div className="flex flex-col gap-3">
//               {faqsLeft.map((faq, index) => (
//                 <FaqItem key={index} number={index + 1} question={faq} />
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col gap-3">
//               {faqsRight.map((faq, index) => (
//                 <FaqItem key={index} number={index + 7} question={faq} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ================= FEATURE CARDS ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-[#0B1120] border border-gray-800 rounded-xl p-5 flex flex-col gap-3"
//             >
//               <div className="w-8 h-8 rounded-lg bg-[#151E2F] border border-gray-700 flex items-center justify-center">
//                 {feature.icon}
//               </div>
//               <div>
//                 <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
//                 <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed">
//                   {feature.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ================= BOTTOM CTA BANNER ================= */}
//         <div className="w-full bg-[#0A0E1A] border border-[#1E293B] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-2">
//           <div className="flex flex-col gap-2">
//             <span className="text-[10px] font-bold tracking-widest text-[#A78BFA] uppercase">
//               Need More Clarity?
//             </span>
//             <h2
//               className="text-2xl md:text-3xl font-bold text-white tracking-tight"
//               style={{ fontFamily: "'Manrope', sans-serif" }}
//             >
//               Let's find the right solution <br className="hidden md:block" />
//               for <span className="text-[#A78BFA]">your business.</span>
//             </h2>
//             <p className="text-[11px] md:text-xs text-gray-400 mt-1">
//               Tell us what you're solving for. Let's explore the possibilities together.
//             </p>
//           </div>

//           <button className="flex items-center gap-2 bg-[#D8B4FE] hover:bg-[#c084fc] text-[#111827] px-6 py-3 rounded-lg font-bold text-xs md:text-sm transition-colors whitespace-nowrap self-start md:self-auto">
//             Talk to our team
//             <ArrowUpRight className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;


import React, { useState } from 'react';
import { Plus, Minus, Lightbulb, Code2, RefreshCcw, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Data ---
const faqsLeft = [
  'How will the Digital Transformation journey work?',
  'How long does digital transformation take?',
  'How do you address data security and privacy?',
  'Can we choose individual digital marketing services?',
  'Can you develop custom chatbots?',
  'Do you provide application development?',
];

const faqsRight = [
  'Do you accept standalone web design projects?',
  'Do you implement business process re-engineering?',
  'Do you provide business strategy consulting?',
  'Which industries can benefit from data analytics?',
  'Do you provide staffing services?',
  'Can you establish an Offshore Development Center?',
  'Can non-core activities be outsourced?',
  'Do you offer cloud and business intelligence solutions?',
];

// Combine data so we can render row by row instead of column by column
const allFaqs = [
  ...faqsLeft.map((q, i) => ({ number: i + 1, question: q })),
  ...faqsRight.map((q, i) => ({ number: i + 7, question: q })),
];

const features = [
  {
    icon: <Lightbulb className="w-4 h-4 text-[#A78BFA]" />,
    title: 'Business-first Thinking',
    desc: 'Solutions aligned with your goals and operational needs.',
  },
  {
    icon: <Code2 className="w-4 h-4 text-[#A78BFA]" />,
    title: 'Technology expertise',
    desc: 'Digital capabilities built around practical experience.',
  },
  {
    icon: <RefreshCcw className="w-4 h-4 text-[#A78BFA]" />,
    title: 'Transformation focus',
    desc: 'A structured approach to business and technology change.',
  },
];

// --- FAQ Item ---
const FaqItem = ({
  number,
  question,
  isOpen,
  onToggle,
}: {
  number: number;
  question: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const formattedNumber = number.toString().padStart(2, '0');

  return (
    <div
      onClick={onToggle}
      className="group flex flex-col bg-[#0B1120] border border-gray-800/80 hover:border-gray-600 rounded-lg p-3 md:p-4 cursor-pointer transition-colors duration-200 h-full"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4 pr-4">
          <span className="text-[10px] md:text-xs font-mono text-gray-500 bg-[#151E2F] px-1.5 py-0.5 rounded">
            {formattedNumber}
          </span>
          <span className="text-xs md:text-sm text-gray-300 group-hover:text-white transition-colors leading-tight">
            {question}
          </span>
        </div>
        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-700 group-hover:border-gray-400 transition-colors flex-shrink-0">
          {isOpen ? (
            <Minus className="w-3 h-3 text-[#A78BFA] transition-colors" />
          ) : (
            <Plus className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" />
          )}
        </span>
      </div>
      {/* Answer Section with Smooth Transition */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs text-gray-400 leading-relaxed pl-8 md:pl-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);

  const toggleFaq = (question: string) => {
    setOpenFaqs((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <section className="relative w-full bg-[#03050A] text-white pt-10 md:pt-12 pb-16 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col gap-10 md:gap-12">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start text-left gap-3"
        >
          <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.25em] text-[#8B5CF6] uppercase">
            Knowledge Center
          </span>
          <h1
            className="text-4xl md:text-[56px] font-extrabold tracking-[-0.02em] text-white leading-[1.1]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Questions? We've got <br />
            <span className="text-[#A78BFA]">answers.</span>
          </h1>
        </motion.div>

        {/* FAQ SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-between items-end border-b border-gray-800 pb-4">
            <p className="text-xs md:text-sm text-gray-400">
              <span className="font-semibold text-gray-300">Frequently asked questions.</span>{' '}
              Explore our expertise.
            </p>
            <span className="text-[10px] md:text-xs font-bold tracking-widest text-[#00E5FF] uppercase">
              Help Center
            </span>
          </div>

          {/* 
            FIX: Changed to CSS Grid with grid-auto-flow: row dense 
            This aligns items perfectly horizontally row-by-row.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-start">
            {allFaqs.map((faq, index) => (
              <FaqItem
                key={index}
                number={faq.number}
                question={faq.question}
                isOpen={openFaqs.includes(faq.question)}
                onToggle={() => toggleFaq(faq.question)}
              />
            ))}
          </div>
        </motion.div>

        {/* FEATURE CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#0B1120] border border-gray-800 rounded-xl p-5 flex flex-col gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#151E2F] border border-gray-700 flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM CTA BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full bg-[#0A0E1A] border border-[#1E293B] rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-2"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-widest text-[#A78BFA] uppercase">
              Need More Clarity?
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white tracking-tight"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Let's find the right solution <br className="hidden md:block" />
              for <span className="text-[#A78BFA]">your business.</span>
            </h2>
            <p className="text-[11px] md:text-xs text-gray-400 mt-1">
              Tell us what you're solving for. Let's explore the possibilities together.
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#D8B4FE] hover:bg-[#c084fc] text-[#111827] px-6 py-3 rounded-lg font-bold text-xs md:text-sm transition-colors whitespace-nowrap self-start md:self-auto">
            Talk to our team
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;