import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Users, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Our AI-driven workflows ensure your project is delivered with speed and precision.",
      icon: <Rocket className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Affordable Pricing",
      desc: "Premium AI lead generation solutions designed to fit your budget while maximizing ROI.",
      icon: <DollarSign className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Expert Team",
      desc: "Work with a dedicated team of AI specialists who bring years of industry experience.",
      icon: <Users className="w-10 h-10 text-green-400" />,
    },
    {
      title: "Reliable Support",
      desc: "We provide 24/7 technical assistance to ensure your landing pages perform optimally.",
      icon: <Headphones className="w-10 h-10 text-green-400" />,
    },
  ];

  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden font-inter min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white font-poppins mb-6"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Codecelix</span>?
          </motion.h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_10px_#22c55e]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -12,
                backgroundColor: "rgba(30, 41, 59, 0.9)",
                borderColor: "#22c55e" 
              }}
              className="p-10 bg-slate-800/40 border border-slate-700/50 rounded-[2rem] transition-all duration-500 group cursor-default backdrop-blur-sm"
            >
              <div className="mb-6 p-4 bg-slate-900/80 w-fit rounded-2xl group-hover:rotate-[15deg] transition-transform duration-500 border border-slate-700">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-inter group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;