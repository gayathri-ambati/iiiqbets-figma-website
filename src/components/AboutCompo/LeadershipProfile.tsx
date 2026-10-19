import React from 'react';
import profile from '../../assets/abhijith-MK.webp';
import { ArrowUpRight, GraduationCap, Briefcase, UserCircle2 } from 'lucide-react';

const LeadershipProfile: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050A15] text-white py-12 md:py-20 px-4 md:px-8 font-sans flex flex-col items-center">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col gap-8">
        
        {/* ================= PAGE HEADER ================= */}
        <div className="flex flex-col gap-3">
          <span className="text-[#14B8A6] text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
            Our People
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Leadership that drives <span className="text-[#14B8A6]">transformation..</span>
          </h1>
        </div>

        {/* ================= MAIN DASHBOARD CARD ================= */}
        <div className="w-full bg-[#E5E7EB] text-[#111827] rounded-[2rem] p-4 md:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar inside Card */}
          <div className="flex justify-between items-center mb-8 px-2 md:px-4">
            <div className="font-bold text-xl md:text-2xl tracking-tighter flex items-center gap-1">
              <span className="text-[#1E3A8A]">iiiQ</span> <span className="text-xs md:text-sm mt-1">bets.</span>
            </div>
            <div className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-600">
              Profile / 01
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* ===== LEFT COLUMN: Text & Basic Info ===== */}
            <div className="lg:col-span-7 flex flex-col gap-6 justify-center pl-2 md:pl-4">
              
              <div className="flex flex-col gap-2">
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-gray-500">
                  Leadership Profile
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-black uppercase">
                  Abhijith
                </h2>
                <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tighter text-[#1E3A8A] uppercase">
                  Mavatoor
                </h2>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-[#14B8A6]" />
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-black">
                  Chief Executive Officer
                </span>
              </div>

              <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-xl">
                A business leader with 20+ years of corporate experience, strategic vision, and a passion for business growth, product engineering, and customer satisfaction.
              </p>

              {/* Action Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
                <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[10px] md:text-xs font-semibold border border-gray-200 text-gray-800">
                  EMAIL <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[10px] md:text-xs font-semibold border border-gray-200 text-gray-800">
                  PHONE <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </button>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-[10px] md:text-xs font-semibold border border-gray-200 text-gray-800">
                  PROFILE <ArrowUpRight className="w-3 h-3 text-gray-400" />
                </button>
              </div>
            </div>

            {/* ===== RIGHT COLUMN: Portrait Image ===== */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="w-full h-[350px] md:h-[450px] bg-white rounded-2xl shadow-xl overflow-hidden relative">
                
                {/* Image */}
                <img 
                  src={profile}
                  alt="Abhijith Mavatoor" 
                  className="w-full h-full object-cover object-top"
                />

                {/* Floating Overlay Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/50">
                   <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-gray-500 block mb-1">
                     Strategic Business Development
                   </span>
                   <span className="text-sm md:text-base font-black text-black uppercase">
                     Leadership with Vision.
                   </span>
                </div>
              </div>
            </div>

            {/* ===== BOTTOM SECTION (Full Width inside outer card) ===== */}
            <div className="lg:col-span-12 flex flex-col gap-4 mt-2">
              
              {/* Professional Summary Box */}
              <div className="bg-[#D1D5DB]/50 rounded-2xl p-5 md:p-6 w-full">
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-6 h-6 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white">
                     <UserCircle2 className="w-4 h-4" />
                   </div>
                   <h3 className="font-bold text-sm md:text-base text-black">Professional Summary</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  20+ years of corporate experience in various leadership roles at some of the best known multinational corporates across the world. A business leader with a successful track record for growing businesses in dynamic and challenging environments. Significant exposure to the start-up environment. Core strengths in Marketing, Business Development & Financial planning. Passionate about Product Engineering. Committed to customer satisfaction.
                </p>
              </div>

              {/* 4-Column Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Box 1: Education */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                   <div className="flex justify-between items-center mb-4">
                     <h4 className="font-bold text-sm text-black uppercase">Education</h4>
                     <GraduationCap className="w-4 h-4 text-[#14B8A6]" />
                   </div>
                   <ul className="text-xs text-gray-600 flex flex-col gap-2">
                     <li><strong className="text-black">MBA:</strong> Marketing & Finance</li>
                     <li>Engineering From National Institute of Engineering</li>
                   </ul>
                </div>

                {/* Box 2: Core Expertise */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                   <div className="flex justify-between items-center mb-4">
                     <h4 className="font-bold text-sm text-black uppercase">Core Expertise</h4>
                     <Briefcase className="w-4 h-4 text-[#3B82F6]" />
                   </div>
                   <ul className="text-xs text-gray-600 flex flex-col gap-2">
                     <li>Marketing & Business Development</li>
                     <li>Financial Planning</li>
                     <li>Product Engineering</li>
                     <li>Customer Satisfaction</li>
                   </ul>
                </div>

                {/* Box 3: Experience */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                   <div className="flex justify-between items-center mb-4">
                     <h4 className="font-bold text-sm text-black uppercase">Experience</h4>
                     <span className="text-[#3B82F6] font-bold text-sm">20+</span>
                   </div>
                   <ul className="text-xs text-gray-600 flex flex-col gap-2">
                     <li>20+ years of corporate experience</li>
                     <li>Business Development and Growth</li>
                     <li>Exposure to dynamic business environments</li>
                   </ul>
                </div>

                {/* Box 4: Other Interests */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200">
                   <div className="flex justify-between items-center mb-4">
                     <h4 className="font-bold text-sm text-black uppercase">Other Interests</h4>
                     <ArrowUpRight className="w-4 h-4 text-[#3B82F6]" />
                   </div>
                   <ul className="text-xs text-gray-600 flex flex-col gap-2">
                     <li>Music</li>
                     <li>Long Drives</li>
                     <li>Painting</li>
                   </ul>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipProfile;