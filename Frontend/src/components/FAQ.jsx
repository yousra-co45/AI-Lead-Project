import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Shield, Zap, HelpCircle } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "How does the AI Lead Generation system work?",
    answer: "Our AI system monitors visitor behavior in real-time, analyzing click patterns and scrolling intent to identify high-probability buyers. This ensures your sales team only focuses on leads that are truly ready to convert.",
    icon: <Zap className="text-amber-400" size={20} />
  },
  {
    id: 2,
    question: "Is it compatible with my existing CRM?",
    answer: "Yes, absolutely! We offer seamless integration with major platforms like HubSpot, Salesforce, Zoho, and even Google Sheets, ensuring your leads flow directly into your existing workflow without manual effort.",
    icon: <Shield className="text-blue-400" size={20} />
  },
  {
    id: 3,
    question: "How long does it take to see tangible results?",
    answer: "Initial setup is completed within 24-48 hours. During the first week, the AI optimizes itself based on your specific audience, and most clients see a significant increase in lead quality by the second week.",
    icon: <Sparkles className="text-purple-400" size={20} />
  },
  {
    id: 4,
    question: "Do I need technical skills to manage the platform?",
    answer: "Not at all. We've built a 'Zero-Code' dashboard that is incredibly intuitive. You can monitor performance and manage leads with just a few clicks, while our AI handles the complex technical optimizations.",
    icon: <HelpCircle className="text-emerald-400" size={20} />
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-950 relative">
      {/* Visual background glow for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Frequently Asked <span className="text-blue-500">Questions</span>
          </motion.h2>
          <p className="text-slate-500">Everything you need to know about our AI-driven solutions.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border transition-all duration-500 rounded-2xl overflow-hidden ${
                activeIndex === index 
                ? 'border-blue-500/40 bg-blue-500/5' 
                : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-2.5 rounded-xl transition-all duration-300 ${activeIndex === index ? 'bg-blue-500/20 scale-110' : 'bg-white/5'}`}>
                    {item.icon}
                  </div>
                  <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                    {item.question}
                  </span>
                </div>
                
                <div className={`transition-all duration-500 ${activeIndex === index ? 'rotate-180 text-blue-400' : 'text-slate-600'}`}>
                  <ChevronDown size={22} strokeWidth={2.5} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="px-8 pb-8 pt-0">
                      <div className="pl-6 border-l-2 border-blue-500/30">
                        <p className="text-slate-400 text-base leading-relaxed font-medium">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;