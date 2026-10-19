import React from 'react';
import { Hexagon, Layers, Cpu, Sparkles } from 'lucide-react';

// --- Data ---
const expertiseData = [
  { name: 'Mobile Development', percentage: 70, barColor: 'bg-[#4A72D4]' },
  { name: 'Data Analytics', percentage: 90, barColor: 'bg-[#4A72D4]' },
  { name: 'AI / ML', percentage: 60, barColor: 'bg-[#4A72D4]' },
];

const TechTrends: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#02050A] text-white flex items-center justify-center py-16 px-4 md:px-8 font-sans overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: Text & Stats ================= */}
        <div className="flex flex-col gap-6 lg:pr-12">
          
          {/* Tagline */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-400 uppercase">
              Technology Index
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
            Improve and <br className="hidden md:block" />
            Innovate with <br />
            <span className="text-[#38bdf8]">Tech Trends.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
            We hire and build your own remote dedicated development teams tailored to your specific needs, helping your business grow with innovative digital solutions.
          </p>

          {/* Expertise Card (Skill Bars) */}
          <div className="mt-6 bg-[#0B1120] border border-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl max-w-lg">
            {/* Card Header */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-white font-semibold text-sm md:text-base">Our Expertise</h3>
              <span className="text-gray-500 text-xs uppercase tracking-wider font-medium">Tech Stack</span>
            </div>

            {/* Bars */}
            <div className="flex flex-col gap-6">
              {expertiseData.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs md:text-sm">
                    <span className="text-gray-200 font-medium">{item.name}</span>
                    <span className="text-[#38bdf8] font-bold">{item.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar Track */}
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
                    {/* Animated Fill */}
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full ${item.barColor}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                    {/* Glow on the fill */}
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full opacity-50 blur-sm ${item.barColor}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: Abstract Graphic ================= */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
          
          {/* Outer Orbit Lines */}
          <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-gray-800/50" />
          <div className="absolute w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-gray-800/30" />
          
          {/* Central Glowing Graphic */}
          <div className="relative flex items-center justify-center">
            {/* The Framed Square (Gradient Border) */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-lg rotate-45 transform shadow-[0_0_50px_rgba(56,189,248,0.2)]">
               {/* Inner Dark Box */}
               <div className="w-full h-full bg-[#050B14] rounded-lg flex items-center justify-center -rotate-45">
                 {/* Stacked Icons inside */}
                 <div className="flex flex-col items-center gap-1 relative">
                    <Hexagon className="w-16 h-16 md:w-20 md:h-20 text-[#38bdf8] stroke-[1.5] absolute -top-6 animate-pulse" />
                    <Layers className="w-12 h-12 md:w-16 md:h-16 text-[#a855f7] stroke-[1.5] mt-4" />
                 </div>
               </div>
            </div>
          </div>

          {/* Floating Tooltip 1: Innovation */}
          <div className="absolute top-[10%] left-[0%] md:top-[20%] md:left-[5%] bg-[#0F172A]/90 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl z-20">
             <Sparkles className="w-4 h-4 text-[#38bdf8]" />
             <span className="text-white text-xs font-semibold">Innovation</span>
             <span className="text-gray-400 text-[10px] md:text-xs">Ideas into reality</span>
          </div>

          {/* Floating Tooltip 2: Smart Technology */}
          <div className="absolute bottom-[10%] right-[0%] md:bottom-[20%] md:right-[5%] bg-[#0F172A]/90 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl z-20">
             <Cpu className="w-4 h-4 text-[#a855f7]" />
             <span className="text-white text-xs font-semibold">Smart Technology</span>
             <span className="text-gray-400 text-[10px] md:text-xs">Building the future</span>
          </div>

          {/* Small Decorative Dots */}
          <div className="absolute top-[15%] right-[10%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] z-10" />
          <div className="absolute bottom-[20%] left-[5%] w-3 h-3 rounded-full bg-[#4A72D4] shadow-[0_0_15px_rgba(74,114,212,1)] blur-[1px] z-10" />

        </div>

      </div>
    </section>
  );
};

export default TechTrends;