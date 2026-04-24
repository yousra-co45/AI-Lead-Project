import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* ── Background Aesthetics ── */}
      <div className="absolute inset-0 bg-[#0f172a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-xl relative overflow-hidden"
        >
          {/* Decorative Glow Dots */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8"
          >
            <Sparkles size={16} />
            Ready to scale your business?
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] font-poppins">
            Stop Chasing Leads. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">
              Start Closing Deals.
            </span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Join 200+ companies using Codecelix to automate their growth. 
            Your AI-powered lead generation machine is just one click away.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center gap-3 px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black rounded-2xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(34,197,94,0.5)]"
              >
                <Calendar size={20} />
                Book Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <p className="mt-8 text-slate-500 text-sm font-medium">
            No credit card required • 15-minute strategy call
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;