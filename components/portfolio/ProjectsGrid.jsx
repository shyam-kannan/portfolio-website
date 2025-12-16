import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Brain, Gamepad2, Bot, LineChart, Eye, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Finance Companion',
    description: 'Full-stack personal finance tracker with AI-driven receipt processing using OCR (Google Vision & Gemini API). Features budget tracking, spending analytics, personalized recommendations, Twilio alerts, and Google Calendar integration.',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
    tags: ['React', 'TypeScript', 'Next.js', 'AI/ML', 'Supabase'],
    icon: LineChart,
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/shyam-kannan/finance_tracker',
    featured: true,
  },
  {
    title: 'Intelligent Portfolio Optimizer',
    description: 'Reinforcement learning system for automated portfolio management using deep Q-networks and policy gradient methods. Optimizes asset allocation strategies based on market conditions and risk preferences.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['Python', 'RL', 'PyTorch', 'Trading'],
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/aditya-chawla/portfolio-manager',
    featured: true,
  },
  {
    title: 'SJSU Smart Rideshare Platform',
    description: 'Master\'s thesis project: Intelligent ridesharing application for SJSU campus community. Features real-time matching algorithms, route optimization, and safety-first design for students and faculty.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80',
    tags: ['Full-Stack', 'ML', 'React', 'Node.js'],
    icon: Gamepad2,
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/shyam-kannan/SJSU_Ridesharing',
    featured: true,
  },
];

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all duration-500 ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20" />
      </div>

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-end p-5 sm:p-6 ${project.featured ? 'md:p-8 lg:p-10' : ''}`}>
        {/* Icon */}
        <motion.div
          animate={{ y: isHovered ? -5 : 0 }}
          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} w-fit mb-4`}
        >
          <project.icon className="w-6 h-6 text-white" />
        </motion.div>

        <h3 className={`font-bold text-white mb-2 ${project.featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {project.title}
        </h3>

        <p className={`text-slate-400 mb-4 line-clamp-2 ${project.featured ? 'md:line-clamp-3 text-base' : 'text-sm'}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, project.featured ? 4 : 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/10 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="flex items-center gap-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors"
          >
            <Github size={16} />
            View Code
          </a>
        </motion.div>

        {/* Arrow */}
        <motion.div
          animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
          className="absolute top-6 right-6"
        >
          <ArrowUpRight className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Selected
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent ml-4">
              Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A showcase of my work in machine learning and reinforcement learning
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px] sm:auto-rows-[450px] md:auto-rows-[400px]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/shyam-kannan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/5 transition-colors"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}