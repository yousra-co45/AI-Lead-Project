import React, { useState } from 'react';
// 1. Link ko import karna zaroori hai
import { Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Reviews', path: '/testimonials' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-slate-900/90 backdrop-blur-md py-4 border-b border-white/5 font-poppins">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - Use Link instead of <a> */}
        <Link to="/" className="flex items-center gap-2 no-underline group">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold italic">A</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">AI.LEAD</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path} // 2. "to" attribute path specify karta hai
              className="text-sm font-medium text-slate-400 hover:text-white transition-all no-underline relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full" />
            </Link>
          ))}

          {/* Green Accent CTA */}
          <Link
            to="/contact"
            className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-full text-xs no-underline shadow-lg transition-all"
          >
            BOOK CALL
          </Link>
        </div>

        {/* Mobile Hamburger Toggle (Same as before) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu logic same rahegi, bas wahan bhi Link use hoga */}
    </nav>
  );
};

export default Navbar;