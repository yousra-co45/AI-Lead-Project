import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-950">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Stats Section (Simple & Safe Version) */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">500K+</div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">Leads Generated</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">120+</div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">Active Clients</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">99%</div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">Conversion Rate</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
              <p className="text-blue-500 text-[10px] font-bold uppercase tracking-widest">AI Accuracy</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <Features />
<FAQ />
      {/* 4. Final CTA Section */}
      <FinalCTA />
    </div>
  );
};

export default Home;