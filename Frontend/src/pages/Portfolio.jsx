import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

// ─── Dummy Project Data ────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'AI-Powered Lead Generation Platform',
    description:
      'An intelligent CRM-integrated platform that automates lead scoring and outreach using GPT-4, boosting conversion rates by 40%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    techStack: ['React', 'Node.js', 'OpenAI', 'MongoDB', 'Tailwind'],
    category: 'AI / SaaS',
    cta: 'View Project',
    link: 'https://www.clay.com',
  },
  {
    id: 2,
    title: 'E-commerce Analytics Dashboard',
    description:
      'Real-time analytics suite for Shopify stores, featuring sales forecasting, customer cohort analysis, and automated reports.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    techStack: ['Next.js', 'TypeScript', 'Chart.js', 'PostgreSQL', 'Prisma'],
    category: 'Analytics',
    cta: 'Live Demo',
    link: 'https://www.mixpanel.com',
  },
  {
    id: 3,
    title: 'HealthTech Patient Portal',
    description:
      'HIPAA-compliant patient management system with appointment scheduling, teleconsultation, and AI-driven health insights.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    techStack: ['React', 'Express', 'MySQL', 'Twilio', 'AWS'],
    category: 'HealthTech',
    cta: 'View Project',
    link: 'https://www.zocdoc.com',
  },
  {
    id: 4,
    title: 'Real Estate Discovery App',
    description:
      'Mobile-first property search platform with AI-powered price predictions, virtual tours, and mortgage calculator integrations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    techStack: ['React Native', 'Firebase', 'Google Maps API', 'Python', 'FastAPI'],
    category: 'PropTech',
    cta: 'Live Demo',
    link: 'https://www.zillow.com',
  },
  {
    id: 5,
    title: 'FinTech Expense Tracker',
    description:
      'Smart personal finance app with bank syncing, ML-based spending categorization, and interactive budget goal tracking.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    techStack: ['Vue.js', 'Django', 'Plaid API', 'Redis', 'Docker'],
    category: 'FinTech',
    cta: 'View Project',
    link: 'https://robinhood.com',
  },
  {
    id: 6,
    title: 'EdTech Learning Management System',
    description:
      'Scalable LMS with AI tutoring, gamified progress tracking, live collaboration tools, and detailed instructor analytics.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    techStack: ['React', 'GraphQL', 'Strapi', 'WebSockets', 'Tailwind'],
    category: 'EdTech',
    cta: 'Live Demo',
    link: 'https://www.coursera.org',
  },
];

// ─── Filter Categories ─────────────────────────────────────────────────────────
const categories = ['All', ...new Set(projects.map((p) => p.category))];

// ─── Animation Variants ────────────────────────────────────────────────────────
const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

// ─── Portfolio Page ────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative min-h-screen bg-slate-900 py-24 px-4 overflow-hidden font-poppins">

      {/* ── Background Glow Blobs ── */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-6">
          <motion.span
            custom={0}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-5"
          >
            Our Work
          </motion.span>

          <motion.h1
            custom={1}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
          >
            Case{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Studies
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 max-w-xl mx-auto text-slate-400 text-base leading-relaxed"
          >
            A curated selection of products we've designed, built, and scaled — from
            idea to impact.
          </motion.p>

          {/* Decorative divider */}
          <motion.div
            custom={3}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>
        </div>

        {/* ── Category Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mt-10 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 border ${activeFilter === cat
                ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-700/30'
                : 'bg-slate-800/60 border-white/10 text-slate-400 hover:border-purple-500/40 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ── Projects Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* ── Bottom CTA Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-20 rounded-2xl border border-white/5 bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur-sm p-10 text-center relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-600/5 pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-7">
            Let's turn your idea into a product people love. Book a free discovery
            call with our team today.
          </p>
          <Link to="/contact" className='inline-flex items-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-900 font-bold rounded-full text-sm transition-all duration-200 shadow-lg hover:shadow-emerald-500/30'>
            Book a Free Call →
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;