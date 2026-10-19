import { useState } from "react";
// 1. Import Link from react-router-dom
import { Link } from "react-router-dom"; 
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
  FiPhone,
  FiMail,
} from "react-icons/fi";

// 2. Update the href properties to match your App.jsx routes
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/service" }, // Matches App.jsx
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "Career", href: "/career" }, // Note: You need to add a route for this in App.jsx
  { name: "Contact Us", href: "/contact" },
  { name: "iiQbets Canada", href: "/canada" }, // Note: Needs a route
  { name: "iiQbets USA", href: "/usa" }, // Note: Needs a route
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <header className="w-full bg-[#1e1e1e] px-3 py-3 sm:px-5 lg:px-[1.65%]">
      <div className="mx-auto w-full">
        <div className="mb-2 flex items-center gap-1.5 text-[13px] font-semibold text-[#c7a8e8]">
          <span className="text-base">◆</span>
          <span>Navbar</span>
        </div>

        {/* Top information bar (Kept as <a> because these are external/social links) */}
        <div className="hidden min-h-[35px] items-center justify-between border border-[#737b8b] bg-[#030713] px-4 text-[9px] text-gray-300 lg:flex">
          <div className="flex items-center gap-5 text-sm">
            <a href="#facebook" aria-label="Facebook" className="hover:text-red-400">
              <FaFacebookF />
            </a>
            <a href="#instagram" aria-label="Instagram" className="hover:text-red-400">
              <FaInstagram />
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-red-400">
              <FaLinkedinIn />
            </a>
            <a href="#youtube" aria-label="YouTube" className="hover:text-red-400">
              <FaYoutube />
            </a>
          </div>

          <div className="flex items-center divide-x divide-[#242a39]">
            <span className="px-3.5">Transforming Businesses Through Technology</span>
            <span className="px-3.5">Global Presence</span>
            <span className="px-3.5">Trusted by 500+ Clients</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="tel:+918041119030" className="hover:text-white">
              +91 80411 19030
            </a>
            <a href="mailto:contact@iiqbets.com" className="hover:text-white">
              contact@iiqbets.com
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="relative z-20 bg-[#030713]">
          <div className="flex min-h-[76px] items-center justify-between gap-4 px-3 py-3 sm:px-5 lg:min-h-[65px] lg:px-8">
            
            {/* 3. Change Logo <a> to <Link> */}
            <Link
              to="/"
              aria-label="iiQbets home"
              className="flex shrink-0 flex-col items-center"
            >
              <div className="flex items-center leading-none">
                <span className="text-[35px] font-black tracking-[-5px] text-[#15266d] sm:text-[40px]">
                  iii
                </span>
                <span className="ml-1 text-[43px] font-black leading-[0.8] tracking-[-4px] text-[#ff171f] sm:text-[48px]">
                  Q
                </span>
              </div>
              <span className="mt-1 text-[4px] font-semibold tracking-[0.3px] text-[#31447e] sm:text-[5px]">
                DIGITAL TRANSFORMATION SOLUTIONS
              </span>
            </Link>

            {/* 4. Desktop links: Change <a> to <Link> and href to to */}
            <nav className="hidden flex-1 items-center justify-center gap-4 xl:flex 2xl:gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`whitespace-nowrap text-[10px] transition-colors 2xl:text-[11px] ${
                    index === 0
                      ? "text-[#ff171f]"
                      : "text-gray-300 hover:text-[#ff252d]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label={searchOpen ? "Close search" : "Open search"}
                className="text-white transition hover:text-red-400"
              >
                {searchOpen ? (
                  <FiX className="h-7 w-7 sm:h-8 sm:w-8" />
                ) : (
                  <FiSearch className="h-8 w-8 stroke-[1.2] sm:h-9 sm:w-9" />
                )}
              </button>

              {/* 5. Change Quote <a> to <Link> */}
              <Link
                to="/contact"
                className="hidden rounded-xl bg-gradient-to-r from-[#ff171c] via-[#d90d32] to-[#30133f] px-5 py-3 text-[10px] font-bold text-white shadow-[0_5px_22px_rgba(230,15,48,0.18)] transition hover:brightness-125 sm:inline-flex sm:items-center sm:justify-center"
              >
                FREE QUOTE
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                className="text-white xl:hidden"
              >
                {menuOpen ? (
                  <FiX className="h-7 w-7" />
                ) : (
                  <FiMenu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>

          {/* Search field */}
          {searchOpen && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchText.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(
                    searchText.trim()
                  )}`;
                }
              }}
              className="border-t border-gray-800 p-4"
            >
              <div className="mx-auto flex max-w-xl items-center gap-3 rounded-lg border border-gray-700 bg-[#0b1020] px-4">
                <FiSearch className="shrink-0 text-gray-400" />
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search..."
                  aria-label="Search website"
                  className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
                <button type="submit" className="text-sm text-red-400">
                  Search
                </button>
              </div>
            </form>
          )}

          {/* 6. Mobile navigation: Change <a> to <Link> */}
          {menuOpen && (
            <nav className="absolute left-0 top-full w-full border-t border-gray-800 bg-[#030713] px-5 py-3 shadow-xl xl:hidden">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block border-b border-gray-800/70 py-3 text-sm transition hover:text-red-400 ${
                    index === 0 ? "text-red-500" : "text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* 7. Mobile Quote <Link> */}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex justify-center rounded-lg bg-gradient-to-r from-red-500 to-[#30133f] px-5 py-3 text-sm font-bold text-white sm:hidden"
              >
                FREE QUOTE
              </Link>

              <div className="mt-4 flex flex-col gap-3 text-xs text-gray-400 sm:hidden">
                <a href="tel:+918041119030" className="flex items-center gap-2">
                  <FiPhone /> +91 80411 19030
                </a>
                <a href="mailto:contact@iiqbets.com" className="flex items-center gap-2">
                  <FiMail /> contact@iiqbets.com
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}