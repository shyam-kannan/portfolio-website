import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl"
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/20 transition-all duration-500">
              <img
                src="/headshot.png"
                alt="Shyam Kannan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-purple-500/30 rounded-full"
            />
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left flex-1 max-w-3xl">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-300">Available for opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl text-slate-400 mb-3">Hi, my name is</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  Shyam Kannan
                </motion.span>
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-300 mt-3"
              >
                Software Engineer
              </motion.div>
            </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed"
          >
            Passionate about <span className="text-blue-400 font-medium">Artificial Intelligence</span> and{' '}
            <span className="text-purple-400 font-medium">Machine Learning</span>.
            Building intelligent applications that solve real-world problems through innovative full-stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-12"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-8 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-white/5 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center lg:justify-start justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/shyam-kannan', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/shyam-kannan-sde/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:shyamkannan.dev@gmail.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
            </motion.div>
            </div>
            </motion.div>
            </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.button>
    </section>
  );
}