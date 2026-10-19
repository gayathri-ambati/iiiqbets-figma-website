import React from 'react';

// --- Data ---
const bottomCards = [
  { title: 'Process Reengineering' },
  { title: '' },
  { title: '' },
  { title: '' },
  { title: '' },
];

const TransformationalServices: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center py-12 px-4 md:px-8 font-sans overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-8 md:gap-10">
        
        {/* Top Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-center tracking-wide text-white drop-shadow-md">
          Experience. Execution. Excellence.
        </h1>

        {/* Main Content Card (Outer Black Frame) */}
        <div className="bg-black rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-800/50 flex flex-col gap-8">
          
          {/* Top Section: Image + Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Image */}
            <div className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden relative border border-gray-700/50 shadow-[0_0_20px_rgba(0,100,255,0.1)]">
              {/* Using a high-quality Unsplash image to mimic the code screen */}
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop" 
                alt="Coding on laptop"
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
              />
              {/* Blue overlay tint */}
              <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col gap-4 lg:pr-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                iiiQ Digital
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                Transformational Services
              </h3>
              
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                iiiQbets is a new Generation IT Services company headquartered in Bangalore, focused on digital technologies. iiiQ helps organizations in their Digital Transformation Journey. Core area of operation is related to Data Science, be it Data Analytics and BI or Managing Data on cloud. Other Services include Software and Application Development to complement the Digitization Journey.
              </p>
            </div>
          </div>

          {/* Bottom Section: Glowing Cards Grid */}
          {/* Note: On Mobile it stacks/scolls, on Desktop it's a 5-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            {bottomCards.map((card, index) => (
              <div 
                key={index}
                className={`relative h-24 md:h-28 rounded-xl bg-gradient-to-b from-[#1A0B12] to-[#0A0508] border border-[#4A1525] p-4 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer overflow-hidden group
                  ${index === 0 ? 'sm:col-span-2 lg:col-span-1' : 'hidden sm:flex'} 
                  ${index > 1 && index < 4 ? 'hidden lg:flex' : ''} 
                  ${index === 4 ? 'hidden lg:flex' : ''}
                `}
                style={{
                  // Custom box shadow to create the neon red/pink under-glow effect
                  boxShadow: 'inset 0 -15px 25px -5px rgba(200, 30, 70, 0.5), 0 4px 10px rgba(0,0,0,0.5)'
                }}
              >
                {/* Subtle top highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
                
                {card.title && (
                  <span className="text-white text-sm font-medium text-center z-10">
                    {card.title}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TransformationalServices;