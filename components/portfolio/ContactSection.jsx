import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Linkedin, Github, Twitter, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shyamkannan.dev@gmail.com',
    href: 'mailto:shyamkannan.dev@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Jose, CA',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/shyam-kannan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/shyam-kannan-sde/', label: 'LinkedIn' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/xwpgjdnd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Failed to send message. Please try again or email me directly.');
    }
  };
  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Build
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent ml-4">
              Together
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm currently open to new opportunities and exciting projects.
                Whether you want to discuss ML/RL, collaborate on research, or
                just say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                    <item.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-white group-hover:text-blue-400 transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-slate-500 mb-4">Find me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block relative mt-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative p-8 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white font-medium">Available for work</span>
                </div>
                <p className="text-slate-400 text-sm">
                  I typically respond within 24-48 hours. Looking forward to connecting with you!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Name</label>
                  <Input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500 h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500 h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}