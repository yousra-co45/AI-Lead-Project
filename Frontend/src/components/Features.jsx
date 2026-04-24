import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "AI Lead Scoring",
    desc: "Automatically rank leads based on their intent and conversion probability.",
    icon: <Target className="text-blue-400" size={32} />,
    borderColor: "hover:border-blue-500/50"
  },
  {
    title: "24/7 Automation",
    desc: "Your AI agent works around the clock to capture and nurture leads.",
    icon: <Zap className="text-emerald-400" size={32} />,
    borderColor: "hover:border-emerald-500/50"
  },
  {
    title: "Real-time Analytics",
    desc: "Track every click and conversion with our deep-dive smart dashboard.",
    icon: <BarChart3 className="text-purple-400" size={32} />,
    borderColor: "hover:border-purple-500/50"
  },
  {
    title: "Data Security",
    desc: "Enterprise-grade encryption to ensure your business data stays private.",
    icon: <ShieldCheck className="text-rose-400" size={32} />,
    borderColor: "hover:border-rose-500/50"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
          >
            Powerful Features for <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Modern Growth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Everything you need to automate your sales funnel and scale faster than ever with our neural-driven insights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 ${f.borderColor} transition-all duration-500 backdrop-blur-sm group`}
            >
              <div className="mb-6 p-4 bg-white/5 inline-block rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;