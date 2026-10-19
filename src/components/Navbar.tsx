import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  FiSearch,
  FiMenu,
  FiX,
} from "react-icons/fi";


import LogoImage from "../assets/logo.webp"; 

// Navigation Links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" },
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact" },
  { name: "iiQbets Canada", href: "/canada" },
  { name: "iiQbets USA", href: "/usa" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const location = useLocation(); // Used to highlight active link

  return (
    <header className="w-full bg-[#03050A] font-sans">
      {/* ================= TOP INFORMATION BAR ================= */}
      <div className="hidden lg:flex items-center justify-between bg-[#03050A] border-b border-[#1E293B] px-6 py-2.5 text-[11px] text-gray-300">
        
        {/* Social Icons */}
        <div className="flex items-center gap-4 text-sm">
          <a href="#facebook" aria-label="Facebook" className="hover:text-white transition-colors">
            <FaFacebookF />
          </a>
          <a href="#instagram" aria-label="Instagram" className="hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="#youtube" aria-label="YouTube" className="hover:text-white transition-colors">
            <FaYoutube />
          </a>
        </div>

        {/* Center Text Segments */}
        <div className="flex items-center divide-x divide-gray-700">
          <span className="px-4">Transforming Businesses Through Technology</span>
          <span className="px-4">Global Presence</span>
          <span className="px-4">Trusted by 500+ Clients</span>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-6">
          <a href="tel:+918041119030" className="hover:text-white transition-colors">
            +91 80411 19030
          </a>
          <a href="mailto:contact@iiqbets.com" className="hover:text-white transition-colors">
            contact@iiqbets.com
          </a>
        </div>
      </div>

      {/* ================= MAIN NAVIGATION BAR ================= */}
      <div className="relative w-full bg-[#0B1120] border-b-2 border-blue-900/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-50">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-3 lg:px-8">
          
          {/* Logo (Imported from Assets) */}
          <Link to="/" aria-label="iiQbets home" className="flex shrink-0 items-center">
            <img 
              src={LogoImage} 
              alt="iiQbets Logo" 
              className="h-12 md:h-14 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center justify-center gap-5 2xl:gap-7 flex-1 px-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`whitespace-nowrap text-[13px] font-medium transition-colors hover:text-[#ff171f] ${
                    isActive ? "text-[#ff171f]" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions (Search, Quote, Mobile Menu) */}
          <div className="flex items-center gap-4 md:gap-6">
            
            {/* Search Icon */}
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              className="text-white transition hover:text-gray-300"
            >
              <FiSearch className="h-6 w-6 stroke-[1.5]" />
            </button>

            {/* Free Quote Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#ff171c] to-[#501e6b] px-6 py-2.5 text-[11px] font-bold tracking-wide text-white shadow-[0_0_15px_rgba(255,23,28,0.4)] transition-transform hover:scale-105"
            >
              FREE QUOTE
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              className="text-white xl:hidden"
            >
              {menuOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE DROPDOWN MENU ================= */}
        {menuOpen && (
          <nav className="absolute left-0 top-full w-full border-t border-gray-800 bg-[#0B1120] px-5 py-4 shadow-xl xl:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block border-b border-gray-800/50 py-3 text-sm font-medium transition-colors hover:text-[#ff171f] ${
                  location.pathname === link.href ? "text-[#ff171f]" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Quote Button */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex w-full justify-center rounded-md bg-gradient-to-r from-[#ff171c] to-[#501e6b] px-5 py-3 text-xs font-bold text-white shadow-[0_0_15px_rgba(255,23,28,0.4)]"
            >
              FREE QUOTE
            </Link>
          </nav>
        )}

        {/* ================= SEARCH BAR OVERLAY ================= */}
        {searchOpen && (
          <div className="absolute left-0 top-full w-full border-t border-gray-800 bg-[#03050A] p-4 shadow-xl z-50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchText.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(searchText.trim())}`;
                }
              }}
              className="mx-auto flex max-w-2xl items-center gap-3 rounded-lg border border-gray-700 bg-[#0B1120] px-4"
            >
              <FiSearch className="shrink-0 text-gray-400" />
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search website..."
                aria-label="Search website"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-500"
                autoFocus
              />
              <button type="submit" className="text-sm font-bold text-[#ff171f]">
                SEARCH
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}