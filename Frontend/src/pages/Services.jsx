import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Code2, Globe, ShieldCheck, Zap, BarChart3, X, ArrowRight } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "AI Lead Automation",
      desc: "Smart AI agents that capture and qualify leads 24/7 with human-like precision.",
      details: "Our AI systems use Natural Language Processing (NLP) to interact with visitors, answer queries, and book appointments directly into your calendar. We integrate with CRM tools to ensure 100% lead retention and instant follow-ups without manual intervention.",
      icon: <Bot className="w-7 h-7" />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Full-Stack Development",
      desc: "Custom MERN stack solutions optimized for high performance and global scale.",
      details: "We build robust, scalable web applications using MongoDB, Express, React, and Node.js. From database normalization to secure JWT authentication and real-time updates, we ensure your platform is enterprise-ready and future-proof.",
      icon: <Code2 className="w-7 h-7" />,
      color: "from-purple-600 to-indigo-600"
    },
    {
      id: 3,
      title: "Conversion Strategy",
      desc: "Data-driven UI/UX designs focused on turning visitors into loyal clients.",
      details: "Using advanced heatmaps and user behavior analysis, we design interfaces that guide users toward the CTA. Our focus is on visual hierarchy, proper spacing, and psychological triggers that drive sales and minimize bounce rates.",
      icon: <BarChart3 className="w-7 h-7" />,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      desc: "Secure and scalable cloud hosting with 99.9% uptime for your business apps.",
      details: "We deploy your applications using modern CI/CD pipelines on AWS, Google Cloud, or Vercel. Our infrastructure setup includes automated backups, SSL encryption, and load balancing for seamless global performance.",
      icon: <Globe className="w-7 h-7" />,
      color: "from-blue-400 to-blue-700"
    },
    {
      id: 5,
      title: "Security & Compliance",
      desc: "Enterprise-grade protection to keep your business and user data fully encrypted.",
      details: "Security is non-negotiable. We implement multi-layer protection, including rate limiting, data encryption at rest, and secure API endpoints to protect your business from modern cyber threats and data breaches.",
      icon: <ShieldCheck className="w-7 h-7" />,
      color: "from-rose-500 to-purple-600"
    },
    {
      id: 6,
      title: "Brand Optimization",
      desc: "Comprehensive digital strategies to boost your online visibility and authority.",
      details: "Beyond code, we optimize your digital presence. This includes technical SEO, performance tuning (Core Web Vitals), and ensuring your brand identity is consistent and impactful across all digital touchpoints.",
      icon: <Zap className="w-7 h-7" />,
      color: "from-amber-400 to-orange-600"
    }
  ];

  const handleDiscussClick = () => {
    setSelectedService(null);
    // Yeh "contact-form" ID Abdullah Naeem ke form section ki honi chahiye
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#0f172a] py-24 px-6 md:px-12 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4"
          >
            Expertise & Solutions
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-white font-poppins leading-[1.1]"
          >
            Transforming Ambition into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Digital Reality.
            </span>
          </motion.h3>
          <div className="w-24 h-1.5 bg-emerald-500 rounded-full mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedService(service)}
              className="group p-8 rounded-[2rem] bg-slate-800/40 border border-white/10 hover:border-emerald-500/50 cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

              <div className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg`}>
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-3 font-poppins group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Logic */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
              />
              
              {/* Modal Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)} 
                  className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={28} />
                </button>

                <div className={`mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center text-white`}>
                  {selectedService.icon}
                </div>

                <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
                  {selectedService.title}
                </h2>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-10">
                  {selectedService.details}
                </p>
                
                <button 
                  onClick={handleDiscussClick}
                  className="w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-2xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/20"
                >
                  Discuss This Project
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;