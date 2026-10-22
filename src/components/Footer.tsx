
import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// IMPORT YOUR LOGO HERE
// Adjust the filename extension (.png, .svg) to match your actual file
import LogoImage from '../assets/iiiqbetslogo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050a1f] text-white font-sans pt-16 pb-8 w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo & Contact Info */}
        <div className="flex flex-col items-center mb-16">
          
          {/* Logo (Imported from assets) */}
          <div className="flex flex-col items-center mb-6">
            <img 
              src={LogoImage} 
              alt="iiQbets Logo" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-md" 
            />
          </div>

          {/* Subtext */}
          <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Empowering businesses through innovative technology, intelligent solutions and <br className="hidden sm:block" />
            reliable digital transformation.
          </p>

          {/* Divider */}
          <div className="w-full max-w-4xl h-[1px] bg-gray-800/60 mt-10"></div>

          {/* 3 Columns Grid */}
          <div className="w-full max-w-5xl mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
            
            {/* Column 1: Corporate Headquarters */}
            <div className="flex flex-col items-center text-center px-4 md:border-r border-gray-800/60">
              <div className="w-10 h-10 bg-[#131b3d] rounded-xl flex items-center justify-center mb-4">
                <HiOutlineLocationMarker className="text-gray-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-3">Corporate Headquarters</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-gray-300">KIONA MBS Corporation Private Limited</span><br />
                (formerly Qbits Technologies Pvt. Ltd)<br />
                Skylark Bentley Park, A 603,<br />
                Arekere Main Road,<br />
                Bengaluru – 560092, India
              </p>
            </div>

            {/* Column 2: Email Us */}
            <div className="flex flex-col items-center text-center px-4 md:border-r border-gray-800/60">
              <div className="w-10 h-10 bg-[#131b3d] rounded-xl flex items-center justify-center mb-4">
                <FiMail className="text-gray-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-3">Email Us</h3>
              <a href="mailto:contact@iiqbets.com" className="text-[#3b82f6] text-xs mb-3 hover:underline">
                contact@iiqbets.com
              </a>
              <p className="text-gray-400 text-xs">We'd love to hear from you.</p>
            </div>

            {/* Column 3: Call Our Team */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-10 h-10 bg-[#131b3d] rounded-xl flex items-center justify-center mb-4">
                <FiPhone className="text-gray-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-3">Call Our Team</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-gray-300">+91 80411 19030</span><br />
                +91 87929 38219
              </p>
              <p className="text-gray-500 text-xs mt-3">Monday - Friday</p>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800/60 mb-12"></div>

        {/* Middle Section: Global Presence */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h4 className="text-[#ff171f] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Our Global Presence</h4>
            <h2 className="text-2xl font-semibold text-white">Connecting Businesses Worldwide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* India Card */}
            <div className="bg-[#0d142e] rounded-2xl p-8 flex flex-col items-center justify-between text-center border border-[#1a2342] min-h-[200px]">
              <div className="w-full">
                <h3 className="text-white font-semibold text-sm mb-4">India Development Center</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  <span className="text-gray-300 font-medium">BENGALURU</span><br />
                  404, 5th Floor,<br />
                  Skylark Bentley Park, Arekere,<br />
                  Bannerghatta Road<br />
                  Bengaluru, 560076,<br />
                  Karnataka, India
                </p>
              </div>
              <a href="#" className="mt-6 text-[#3b82f6] text-xs font-semibold tracking-wider hover:text-blue-400">INDIA</a>
            </div>

            {/* USA Card */}
            <div className="bg-[#0d142e] rounded-2xl p-8 flex flex-col items-center justify-between text-center border border-[#1a2342] min-h-[200px]">
              <div className="w-full">
                <h3 className="text-white font-semibold text-sm mb-4">USA Address</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  <span className="text-gray-300 font-medium">IRVING, TX (HQ)</span><br />
                  5001, Parkview Dr,<br />
                  Irving, TX 75038,<br />
                  Texas,<br />
                  United States
                </p>
              </div>
              <a href="#" className="mt-6 text-[#3b82f6] text-xs font-semibold tracking-wider hover:text-blue-400">UNITED STATES</a>
            </div>

            {/* Canada Card */}
            <div className="bg-[#0d142e] rounded-2xl p-8 flex flex-col items-center justify-between text-center border border-[#1a2342] min-h-[200px]">
              <div className="w-full">
                <h3 className="text-white font-semibold text-sm mb-4">Canada Address</h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  <span className="text-gray-300 font-medium">TORONTO</span><br />
                  40 Varna Dr,<br />
                  North York, M6A 1J4,<br />
                  Toronto, Ontario,<br />
                  Canada
                </p>
              </div>
              <a href="#" className="mt-6 text-[#3b82f6] text-xs font-semibold tracking-wider hover:text-blue-400">CANADA</a>
            </div>

          </div>
        </div>

        {/* Bottom Section: Socials & Legal */}
        <div className="flex flex-col items-center border-t border-gray-800/60 pt-10">
          
          <p className="text-gray-500 text-[10px] tracking-[0.2em] uppercase mb-4 font-semibold">Connect With Us</p>
          
          <div className="flex items-center gap-3 mb-8">
            <a href="#" className="w-9 h-9 rounded-full bg-[#131b3d] flex items-center justify-center text-gray-400 hover:bg-[#ff171f] hover:text-white transition-colors duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#131b3d] flex items-center justify-center text-gray-400 hover:bg-[#ff171f] hover:text-white transition-colors duration-300">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#131b3d] flex items-center justify-center text-gray-400 hover:bg-[#ff171f] hover:text-white transition-colors duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#131b3d] flex items-center justify-center text-gray-400 hover:bg-[#ff171f] hover:text-white transition-colors duration-300">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[#131b3d] flex items-center justify-center text-gray-400 hover:bg-[#ff171f] hover:text-white transition-colors duration-300">
              <FaYoutube size={14} />
            </a>
          </div>

          <div className="w-full max-w-4xl h-[1px] bg-gray-800/60 mb-6"></div>

          <p className="text-gray-500 text-[11px] text-center mb-4">
            Copyright © 2026 KIONA MBS Corporation Private Limited. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-gray-500 text-[11px]">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms and Conditions</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
            <span className="hidden sm:inline">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Shipping Policy</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;