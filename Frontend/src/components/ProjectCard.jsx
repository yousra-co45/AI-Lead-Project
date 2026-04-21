import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    /* Entire card is a clickable anchor → opens real project URL */
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.title}`}
      /* Scroll-in animation */
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      /* Hover lift */
      whileHover={{ scale: 1.03, y: -6 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden
                 bg-slate-800/60 border border-white/5 backdrop-blur-sm
                 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-900/30
                 transition-all duration-300 cursor-pointer no-underline"
    >
      {/* ── Project Image ── */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

        {/* Category badge */}
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-semibold
                         uppercase tracking-widest bg-blue-600/80 text-white backdrop-blur-md
                         border border-blue-400/20">
          {project.category}
        </span>

        {/* "Opens in new tab" icon hint — appears on hover */}
        <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                         bg-slate-900/70 backdrop-blur-md rounded-full p-1.5 text-white">
          <FiExternalLink size={13} />
        </span>
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 p-6 gap-4">

        {/* Title */}
        <h3 className="text-lg font-bold text-white leading-snug
                       group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description — clamped to 2 lines */}
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md
                         bg-slate-700/70 text-slate-300 border border-white/5
                         group-hover:border-purple-500/30 group-hover:text-purple-300
                         transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button — stops propagation so it doesn't double-fire */}
        <span
          onClick={(e) => {
            e.preventDefault();
            window.open(project.link, '_blank', 'noopener,noreferrer');
          }}
          className="mt-2 inline-flex items-center justify-center gap-2 w-full py-2.5
                     rounded-xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600
                     text-slate-900 font-bold text-sm transition-all duration-200
                     shadow-md hover:shadow-emerald-500/30 hover:shadow-lg"
        >
          <FiExternalLink size={15} />
          {project.cta}
        </span>

      </div>
    </motion.a>
  );
};

export default ProjectCard;
