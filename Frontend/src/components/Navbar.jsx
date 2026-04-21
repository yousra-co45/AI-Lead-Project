import React, { useState } from 'react';
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
        <Link to="/" className="flex items-center gap-2 no-underline group" onClick={() => setIsOpen(false)}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold italic">A</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">AI.LEAD</span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-slate-400 hover:text-white transition-all no-underline relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Green Accent CTA */}
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-900 font-bold rounded-full text-xs no-underline shadow-md hover:shadow-emerald-500/30 hover:shadow-lg transition-all duration-200 tracking-wide"
          >
            BOOK CALL
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-slate-900/95 border-b border-white/5 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-xl text-sm transition-all shadow-md mt-2"
              >
                BOOK CALL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;