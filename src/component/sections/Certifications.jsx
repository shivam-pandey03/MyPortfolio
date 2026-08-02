import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ExternalLink, Calendar } from 'lucide-react';

const certificationsData = [
  {
    title: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    date: 'Aug 2025',
    description: 'Validated foundational knowledge of core cloud computing concepts, including cloud architecture, networking protocols, security, and scalable cloud databases.',
    skills: ['Cloud Architecture', 'OCI', 'Networking', 'Security', 'Databases'],
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=D564C020BCEFD8372978E1D60DA05BA7F406967616F3BF64CE8A33141A276E37',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Jul 2025',
    description: 'Completed practical simulation tasks leveraging generative AI tools to clean, analyze, and visualize complex datasets for data-driven software engineering solutions.',
    skills: ['Generative AI', 'Data Analytics', 'Data Visualization', 'Problem Solving'],
    verifyUrl: 'https://drive.google.com/file/d/1n6f9YXbd0tW14h4s8vBqO3KcNXsc7kLs/view?usp=sharing',
  },
  {
    title: 'Deloitte Cyber Job Simulation',
    issuer: ' Forage',
    date: 'Jun 2025',
    description: 'Engaged in simulated enterprise scenarios focusing on cybersecurity fundamentals, risk assessment, data privacy protocols, and secure system design.',
    skills: ['Cybersecurity', 'Data Privacy', 'Risk Assessment', 'System Security'],
    verifyUrl: 'https://drive.google.com/file/d/1emvSkfdNRpS7V2vcv_UiZUay20WLoEe_/view?usp=sharing',
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div className="absolute bottom-1/3 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-secondary/15 rounded-full blur-[130px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
        >
          Licenses & <span className="text-primary">Certifications</span>
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-gray-400 text-lg transition-colors"
        >
          A collection of certifications showcasing my commitment to continuous learning, technical excellence, and staying current with evolving technologies.
        </motion.p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 group"
          >
            <div>
              {/* Top Bar: Icon & Date */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5 transition-colors">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-primary transition-colors leading-snug">
                {cert.title}
              </h3>
              <div className="flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-gray-300 mb-4 transition-colors">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{cert.issuer}</span>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
                {cert.description}
              </p>

              {/* Skills Covered */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {cert.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-2 py-0.5 text-xs font-mono rounded bg-primary/10 dark:bg-primary/5 text-primary/90 border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white group/link transition-colors"
                aria-label={`View or verify ${cert.title} certificate`}
              >
                <span className="underline underline-offset-4 group-hover/link:text-primary transition-colors">
                  View Certificate
                </span>
                <ExternalLink className="w-4 h-4 text-primary group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Certifications;