import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Jonathan Reeves",
    role: "CEO, Innovate Solutions",
    initials: "JR",
    bgColor: "bg-blue-600",
    review: "Codecelix's AI lead generation platform isn't just a tool; it's a strategic advantage. Our qualified leads tripled in the first month. Incredible speed and precision!",
    rating: 5,
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Marketing Director, Apex Global",
    initials: "AK",
    bgColor: "bg-emerald-600",
    review: "The design consistency and smooth motion effects across the landing page are world-class. It perfectly captures our brand's premium identity.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder, Quantum Dynamics",
    initials: "MC",
    bgColor: "bg-purple-600",
    review: "From concept to deployment, Codecelix delivered with expert precision. Their team’s understanding of AI workflows is deeply impressive.",
    rating: 5,
  },
  {
    id: 4,
    name: "Samantha Lee",
    role: "Head of Growth, Syncro Tech",
    initials: "SL",
    bgColor: "bg-rose-600",
    review: "We needed a scalable solution fast. Codecelix provided a tailored AI-powered funnel that has consistently maximized our ROI. Highly recommended!",
    rating: 4,
  },
  {
    id: 5,
    name: "Omar Al-Fayed",
    role: "Operations Manager, Emirates Trade",
    initials: "OA",
    bgColor: "bg-amber-600",
    review: "Their reliable, 24/7 technical support is a lifesaver. Even post-launch, the team ensures our platform performs optimally without any downtime.",
    rating: 5,
  },
  {
    id: 6,
    name: "Dr. Elizabeth Stone",
    role: "AI Ethics Consultant",
    initials: "ES",
    bgColor: "bg-cyan-600",
    review: "Codecelix approaches AI implementation ethically and efficiently. Their solutions are compliant, secure, and deliver genuine business impact.",
    rating: 5,
  },
];

// ─── Unique Card Floating Animation ──────────────────────────────────────────
const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
      delay: index * 0.15, // Staggered reveal
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0A0F1D] relative overflow-hidden min-h-screen font-inter flex items-center">
      {/* ── Background Glow Elements ── */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6"
          >
            <Users size={16} />
            Client Success
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold text-white font-poppins leading-tight"
          >
            Trusted by Industry{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Leaders
            </span>
          </motion.h2>
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index} // Pass index for delay
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{ 
                y: -15, // Intense float up
                borderColor: "rgba(34, 197, 94, 0.4)", // Emerald glow border
                boxShadow: "0 20px 40px -10px rgba(10, 15, 29, 0.8), 0 0 15px -2px rgba(34, 197, 94, 0.3)" // Shadow + Glow
              }}
              className="p-10 bg-slate-800/30 border border-slate-700/50 rounded-[2.5rem] transition-all duration-500 group cursor-default backdrop-blur-sm relative flex flex-col h-full"
            >
              {/* Large Decorative Quote Icon */}
              <Quote className="absolute top-10 right-10 text-slate-700 w-16 h-16 opacity-30 group-hover:text-emerald-500/40 transition-colors" />
              
              {/* Ratings */}
              <div className="flex mb-8 gap-1.5 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < item.rating ? 'fill-emerald-400 text-emerald-400' : 'text-slate-600'}`} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-lg leading-relaxed mb-10 italic relative z-10 flex-grow">
                "{item.review}"
              </p>

              {/* Client Info with Initial-based Placeholder */}
              <div className="flex items-center gap-5 border-t border-slate-700/50 pt-8 relative z-10 mt-auto">
                <div className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center text-3xl font-black text-white/90 border-2 border-white/10 shadow-lg`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">{item.name}</h4>
                  <p className="text-slate-500 text-sm font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─── Small Helper Import for Header Icon ───
import { Users } from 'lucide-react';

export default Testimonials;