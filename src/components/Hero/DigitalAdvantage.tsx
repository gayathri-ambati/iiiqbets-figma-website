import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Code2, 
  Plug, 
  Rocket, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

import LogoImage from '../../assets/iiiqbetslogo.png';

const features = [
  {
    id: '01',
    title: 'Strategy',
    description: 'Understand your business, identify opportunities, and create the right technology roadmap.',
    icon: <Lightbulb className="w-5 h-5 text-[#00E5FF]" />,
    color: 'border-[#00E5FF]/20 shadow-[inset_0_0_20px_rgba(0,229,255,0.05)]',
  },
  {
    id: '02',
    title: 'Technology',
    description: 'Build scalable digital products using modern architectures and enterprise-ready technologies.',
    icon: <Code2 className="w-5 h-5 text-[#8A2BE2]" />,
    color: 'border-[#8A2BE2]/20 shadow-[inset_0_0_20px_rgba(138,43,226,0.05)]',
  },
  {
    id: '03',
    title: 'Integration',
    description: 'Connect your applications, data, and workflows into one intelligent ecosystem.',
    icon: <Plug className="w-5 h-5 text-[#00E5FF]" />,
    color: 'border-[#00E5FF]/20 shadow-[inset_0_0_20px_rgba(0,229,255,0.05)]',
  },
  {
    id: '04',
    title: 'Growth',
    description: 'Continuously optimize your technology investment to support long-term business growth.',
    icon: <Rocket className="w-5 h-5 text-[#8A2BE2]" />,
    color: 'border-[#8A2BE2]/20 shadow-[inset_0_0_20px_rgba(138,43,226,0.05)]',
  },
];

// ===== Animation Variants =====
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8 } },
// };

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const DigitalAdvantage: React.FC = () => {
  return (
    <section className="relative w-full bg-[#03050A] text-white py-16 md:py-24 px-4 md:px-8 font-sans overflow-hidden flex flex-col items-center">
      
      {/* Background Ambient Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col gap-12">
        
        {/* ================= HEADER SECTION (centered) ================= */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 text-center"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3">
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-8 h-[2px] bg-[#00E5FF] origin-center"
            />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#00E5FF] uppercase">
              Digital Transformation
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-8 h-[2px] bg-[#00E5FF] origin-center"
            />
          </motion.div>
          
          <motion.h1
            variants={fadeUp}
            className="m-0 w-full text-center text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.15] text-white"
          >
            From Business challenges to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2]">
              Digital Advantage.
            </span>
          </motion.h1>
          
          <motion.p
            variants={fadeUp}
            className="m-0 mt-2 mx-auto w-full max-w-2xl text-center text-gray-400 text-xs md:text-sm leading-relaxed"
          >
            We don't just build software. We understand your business, connect technology to your operations and create digital solutions designed around measurable business outcomes.
          </motion.p>
        </motion.div>

        {/* ================= MAIN FEATURE GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 w-full items-stretch">
          
          {/* --- LEFT COLUMN (Strategy & Technology) --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-4 md:gap-6"
          >
            {[features[0], features[1]].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex-1 bg-[#0A0E17] border border-gray-800/80 rounded-2xl p-6 relative overflow-hidden group hover:border-gray-700 transition-colors"
              >
                <span className="absolute top-4 right-6 text-5xl font-black text-white/[0.03] select-none">
                  {item.id}
                </span>
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-10 h-10 rounded-lg bg-[#05080F] border ${item.color} flex items-center justify-center mb-6`}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="m-0 text-left text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="m-0 text-left text-gray-400 text-[11px] md:text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* --- CENTER COLUMN (The Graphic Hub) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleIn}
            className="lg:col-span-6 bg-[#0A0E17] border border-gray-800/80 rounded-2xl p-6 md:p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[350px]"
          >
            
            {/* Orbital Rings — slow rotation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-[#00E5FF]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-dashed border-gray-700/50"
            />
            
            {/* Ambient Center Glow — pulsing */}
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-[150px] h-[150px] bg-[#FF2D75]/10 rounded-full blur-[50px]"
            />

            {/* Central logo — floating */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 mb-8 flex items-center justify-center"
            >
              <img
                src={LogoImage}
                alt="iiQbets Logo"
                className="h-14 w-auto object-contain drop-shadow-md md:h-20"
              />
            </motion.div>

            {/* Floating Stat Badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-8 left-4 md:top-10 md:left-8 bg-[#111624] border border-gray-700/50 rounded px-3 py-1.5 flex items-center gap-2"
            >
              <span className="text-white font-bold text-xs md:text-sm">20+</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider">Years Experience</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-8 right-4 md:top-10 md:right-8 bg-[#111624] border border-gray-700/50 rounded px-3 py-1.5 flex items-center gap-2"
            >
              <span className="text-white font-bold text-xs md:text-sm">500+</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider">Clients Served</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-16 left-4 md:bottom-20 md:left-8 bg-[#111624] border border-gray-700/50 rounded px-3 py-1.5 flex items-center gap-2"
            >
              <span className="text-white font-bold text-xs md:text-sm">15+</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider">Industries</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-16 right-4 md:bottom-20 md:right-8 bg-[#111624] border border-gray-700/50 rounded px-3 py-1.5 flex items-center gap-2"
            >
              <span className="text-white font-bold text-xs md:text-sm">10+</span>
              <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider">Tech Stacks</span>
            </motion.div>

            {/* Decorative Dots — pulsing */}
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
            />
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6, ease: 'easeInOut' }}
              className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#FF2D75] shadow-[0_0_10px_#FF2D75]"
            />
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2, ease: 'easeInOut' }}
              className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#8A2BE2] shadow-[0_0_10px_#8A2BE2]"
            />

            {/* Bottom Process Pipeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute bottom-6 flex items-center gap-1 md:gap-2 bg-[#111624] border border-gray-700/50 rounded-full px-4 py-1.5"
            >
              {['DISCOVER', 'DESIGN', 'DEVELOP', 'SCALE'].map((step, i) => (
                <React.Fragment key={step}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-[8px] md:text-[9px] font-bold text-gray-300 tracking-wider"
                  >
                    {step}
                  </motion.span>
                  {i !== 3 && <ChevronRight className="w-2.5 h-2.5 text-gray-600" />}
                </React.Fragment>
              ))}
            </motion.div>
          </motion.div>

          {/* --- RIGHT COLUMN (Integration & Growth) --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-3 flex flex-col gap-4 md:gap-6"
          >
            {[features[2], features[3]].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                custom={idx}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex-1 bg-[#0A0E17] border border-gray-800/80 rounded-2xl p-6 relative overflow-hidden group hover:border-gray-700 transition-colors"
              >
                <span className="absolute top-4 right-6 text-5xl font-black text-white/[0.03] select-none">
                  {item.id}
                </span>
                
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-10 h-10 rounded-lg bg-[#05080F] border ${item.color} flex items-center justify-center mb-6`}
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="m-0 text-left text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="m-0 text-left text-gray-400 text-[11px] md:text-xs leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* ================= BOTTOM CTA BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="w-full bg-gradient-to-r from-[#0A0E17] via-[#111624] to-[#1A103C] border border-gray-800/80 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#8A2BE2]/20 to-transparent blur-2xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col gap-2">
            <h2 className="m-0 text-left text-xl md:text-3xl font-bold text-white tracking-tight">
              Ready to transform your business?
            </h2>
            <p className="m-0 text-left text-gray-400 text-[11px] md:text-sm">
              Let's turn your technology challenges into opportunities for growth.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="relative z-10 flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF2D75] to-[#E11D48] hover:from-[#ff4785] hover:to-[#f43f5e] text-white px-6 py-3 md:px-8 md:py-3.5 rounded-lg font-bold text-xs md:text-sm transition-all shadow-[0_0_20px_rgba(255,45,117,0.3)] hover:shadow-[0_0_30px_rgba(255,45,117,0.5)] w-full md:w-auto mt-2 md:mt-0"
          >
            Book a Consultation
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default DigitalAdvantage;