import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink, Download } from 'lucide-react';

const experiences = [
  {
    title: 'AI Engineer Intern',
    company: 'Kashmir World Foundation',
    location: 'Great Falls, Virginia (Remote)',
    period: 'June 2023 - August 2023',
    description: 'Developed AI-driven solutions to enhance biodiversity conservation efforts, focusing on automating the monitoring of snow leopards through aerial drone imaging and computer vision algorithms.',
    achievements: [
      'Implemented deep learning models for object detection and classification in drone-captured imagery',
      'Optimized model inference pipelines to improve processing efficiency on edge computing devices',
      'Conducted data preprocessing and augmentation to enhance model robustness and generalizability',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Enverus',
    location: 'Austin, Texas',
    period: 'June 2022 - August 2022',
    description: 'Designed mobile-responsive interfaces leveraging state-of-the-art JavaScript frameworks, leading to significant improvements in user engagement and performance.',
    achievements: [
      'Reduced bounce rates by approximately 15% with mobile-responsive React/Angular interfaces',
      'Boosted front-end performance and integrated secure, scalable RESTful APIs with Node.js and Express',
      'Implemented CI/CD pipelines and Git workflows, reducing production times by 20%',
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
];

const TimelineCard = ({ experience, index, isInView }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8 pl-12 md:pl-0`}
    >
      {/* Timeline dot - Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.gradient} z-10`} />
        <div className={`absolute w-8 h-8 rounded-full bg-gradient-to-r ${experience.gradient} opacity-20 animate-ping`} />
      </div>
      
      {/* Timeline dot - Mobile */}
      <div className="md:hidden absolute left-4 top-8 flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${experience.gradient} z-10`} />
        <div className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${experience.gradient} opacity-20 animate-ping`} />
      </div>

      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div className="group relative p-5 sm:p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/10 transition-all duration-500">
          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          <div className={`relative ${isLeft ? 'md:flex md:flex-col md:items-end' : ''}`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs text-slate-400 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <Calendar size={12} />
              {experience.period}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{experience.title}</h3>
            
            <div className={`flex flex-wrap items-center gap-2 text-sm sm:text-base text-slate-400 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
              <Building2 size={14} className="flex-shrink-0" />
              <span>{experience.company}</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <MapPin size={14} className="flex-shrink-0 sm:inline hidden" />
              <span className="hidden sm:inline">{experience.location}</span>
            </div>

            <p className="text-slate-400 mb-4 leading-relaxed">{experience.description}</p>

            <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
              {experience.achievements.map((achievement, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm text-slate-500 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${experience.gradient} flex-shrink-0`} />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Work
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent ml-4">
              Experience
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
            My professional journey in AI and machine learning
          </p>

          {/* Resume Download Button */}
          <motion.a
            href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/694091b5713defc97d0c310e/e06a8bdb2_Shyam_Kannan_SWE_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-shadow"
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          {/* Mobile line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experiences.map((experience, index) => (
              <TimelineCard
                key={experience.company}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}