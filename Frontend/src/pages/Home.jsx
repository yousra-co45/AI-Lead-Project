import React from 'react';
import { motion } from 'framer-motion';
// FinalCTA ko import karein
import FinalCTA from '../components/FinalCTA'; 

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* ── Welcome / Hero Section ── */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 bg-[#0f172a] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent font-poppins"
        >
          Welcome to AI LEAD
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-6 text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed"
        >
          Empowering your business with AI-driven conversion strategies and high-performance web solutions.
        </motion.p>
      </section>

      {/* ── Final CTA Section (End par) ── */}
      <FinalCTA />
      
    </div>
  );
};

export default Home;