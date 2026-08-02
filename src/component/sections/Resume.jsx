import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowUpRight } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative transition-colors duration-300">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 p-8 sm:p-12 backdrop-blur-sm text-center shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group"
      >
        {/* Subtle Ambient Glow inside the card */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
            <FileText className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            Looking for more details?
          </h2>

          <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10 transition-colors">
            Explore my resume for a complete overview of my education, technical skills, projects, certifications, and internship experience. I am actively seeking full-time opportunities in <span className="font-semibold text-slate-800 dark:text-gray-200">Software Development, Technical Support, and IT Support.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            
            {/* Primary Download Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1dOzamdOgpQ_AQ8XPzfy_TWq13m2bs3id" 
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </a>

            {/* Secondary View Button */}
            <a
              href="https://drive.google.com/file/d/1dOzamdOgpQ_AQ8XPzfy_TWq13m2bs3id/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white/50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white font-medium flex items-center justify-center gap-2 transition-all duration-200"
            >
              <span>View in Browser</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;