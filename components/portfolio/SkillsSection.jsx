import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'JavaScript', level: 95 },
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Python', level: 92 },
      { name: 'REST APIs', level: 90 },
      { name: 'Flask', level: 85 },
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Neural Networks', level: 88 },
      { name: 'NLP', level: 85 },
      { name: 'LLMs', level: 82 },
      { name: 'Computer Vision', level: 85 },
      { name: 'PyTorch', level: 80 },
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, Lambda)', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'CI/CD', level: 82 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Git', level: 95 },
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
];

const SkillBar = ({ skill, gradient, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-4"
  >
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-slate-300">{skill.name}</span>
      <span className="text-xs text-slate-500">{skill.level}%</span>
    </div>
    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
      />
    </div>
  </motion.div>
);

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
            Technical Skills
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            My
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Toolkit
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A comprehensive set of tools and technologies I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-950/50 border border-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient}`} />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  gradient={category.gradient}
                  index={skillIndex}
                  isInView={isInView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-6">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['MongoDB', 'PostgreSQL', 'Prisma', 'Auth0', 'JWT', 'Vercel', 'Elasticsearch', 'Linux/Unix', 'Java', 'C', 'C++', 'Agile'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}