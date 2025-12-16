import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-slate-400 text-sm"
          >
            <span>© {currentYear}</span>
            <span className="text-slate-600">•</span>
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>and lots of coffee</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            {['Privacy', 'Terms'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}