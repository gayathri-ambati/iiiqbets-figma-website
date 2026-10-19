import React from 'react';
import { ArrowRight, BarChart3, Cloud, Layers, Code2, LineChart } from 'lucide-react';

// --- Types ---
interface TechStackItem {
  name: string;
  icon: React.ReactNode;
}

// --- Data ---
const techStack: TechStackItem[] = [
  { name: 'Power BI', icon: <BarChart3 className="w-6 h-6 text-yellow-500" /> },
  { name: 'Google AI', icon: <div className="font-bold text-xl text-blue-500">G</div> },
  { name: 'Google Analytics', icon: <LineChart className="w-6 h-6 text-orange-500" /> },
  { name: 'Amazon AWS', icon: <Cloud className="w-6 h-6 text-orange-400" /> },
  { name: 'Flutter', icon: <Layers className="w-6 h-6 text-blue-400" /> },
  { name: 'React', icon: <Code2 className="w-6 h-6 text-cyan-400" /> },
];

const MissionSection: React.FC = () => {
  return (
    <section className="relative w-full  bg-[#050B14] text-white overflow-hidden flex flex-col justify-between py-12 px-4 md:px-8">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-grow">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6 lg:pr-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our Mission
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
            An agile customer-centric organization creating simple solutions by embracing innovation and technology with a single-minded approach to creating wealth for customers as well as employees without compromising on human values.
          </p>
          
          <div className="mt-4">
            <button className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-black transition-all duration-200 bg-[#FF2D75] hover:bg-[#ff4785] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF2D75] focus:ring-offset-gray-900 shadow-[0_0_20px_rgba(255,45,117,0.4)] hover:shadow-[0_0_30px_rgba(255,45,117,0.6)]">
              Digital Transformation
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Column: Image/Visual Composition */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex justify-center lg:justify-end">
          
          {/* Main Laptop Image Background (Simulated) */}
          <div className="absolute inset-0 lg:left-0 w-full h-full rounded-2xl overflow-hidden shadow-2xl opacity-80 lg:opacity-100">
            <img 
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2671&auto=format&fit=crop" 
              alt="Laptop Keyboard"
              className="w-full h-full object-cover object-left-top mask-image-gradient"
            />
            {/* Gradient Overlay to blend image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-transparent to-transparent lg:via-[#050B14]/80" />
          </div>

          {/* Floating Cards Stack (Right Side) */}
          <div className="relative z-20 flex flex-col gap-3 h-full justify-center items-end pr-0 lg:pr-4">
             {/* Card 1 */}
             <div className="w-40 h-28 md:w-48 md:h-32 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 rotate-3 transform transition hover:rotate-0 duration-300">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Typing" />
             </div>
             
             {/* Card 2 */}
             <div className="w-40 h-28 md:w-48 md:h-32 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 -rotate-2 transform transition hover:rotate-0 duration-300">
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Dashboard" />
             </div>

             {/* Card 3 */}
             <div className="w-40 h-28 md:w-48 md:h-32 bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700/50 rotate-1 transform transition hover:rotate-0 duration-300">
                <img src="https://images.unsplash.com/photo-1531297461136-82lw85a6a219?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Developer" />
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Tech Stack Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-4 py-4 rounded-xl bg-[#0F172A]/80 border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer group"
            >
              <div className="p-2 rounded-lg bg-gray-900/50 group-hover:bg-gray-800 transition-colors">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;