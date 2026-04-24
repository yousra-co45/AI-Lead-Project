import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "AI Lead Generation kaam kaise karta hai?",
    answer: "Hamara AI system aapke visitors ka behavior track karta hai aur unhein unke intent ke mutabiq score karta hai, taake aap sirf high-quality leads par focus karein."
  },
  {
    question: "Kya ye hamare mojooda CRM ke saath integrate ho jayega?",
    answer: "Ji haan! Hum HubSpot, Salesforce, aur Zoho jaise bade CRMs ke saath seamless integration provide karte hain."
  },
  {
    question: "Setup mein kitna waqt lagta hai?",
    answer: "Aapka basic setup sirf 24-48 ghanton mein live ho sakta hai, jis ke baad AI seekhna shuru kar deta hai."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left text-white hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold">{item.question}</span>
                <ChevronDown 
                  className={`text-blue-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;