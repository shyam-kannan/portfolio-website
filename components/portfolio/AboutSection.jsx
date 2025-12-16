import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Sparkles, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'ML Research',
    description: 'Deep expertise in neural networks, deep learning architectures, and model optimization',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Reinforcement Learning',
    description: 'Building autonomous agents that learn from interaction and maximize rewards',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Production Systems',
    description: 'End-to-end ML pipelines from research prototypes to scalable deployments',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Constantly exploring cutting-edge techniques in AI and autonomous systems',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Crafting Intelligence
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Through Code
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-400 leading-relaxed">
            I'm a software engineer and AI enthusiast currently pursuing my Master's in Artificial Intelligence
            at San Jose State University. With experience spanning AI/ML engineering to full-stack development,
            I love building intelligent applications that make a real impact. From computer vision systems for
            wildlife conservation to AI-powered financial tools, I enjoy tackling complex challenges with
            innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-500">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-6`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '3.58', label: 'Master\'s GPA' },
            { value: '10+', label: 'Projects Built' },
            { value: '2', label: 'Internships' },
            { value: '∞', label: 'Learning' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}