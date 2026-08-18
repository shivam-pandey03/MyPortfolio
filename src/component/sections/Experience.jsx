import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiencesData = [
  {
    role: 'Software Development Intern',
    company: 'National Institute of Electronics & Information Technology (NIELIT)',
    location: 'On-site',
    period: 'Mar 2026 — Aug 2026',
    description: 'Engaged in a 6-month internship focused on full-stack web development initiatives, collaborating with senior engineers to build responsive user interfaces and backend services.',
    responsibilities: [
      'Developed and optimized interactive frontend components using modern React architectures.',
      'Assisted in designing backend REST APIs and structuring database schemas for internal applications.',
      'Participated in code reviews, debugging sessions, and agile development sprint cycles.',
      'Improved application rendering performance and ensured UI responsiveness across mobile and desktop.'
    ]
  },
  {
    role: 'Industrial Trainee',
    company: 'DataCulture Technologies',
    location: 'Hybrid',
    period: '2025',
    description: 'Completed an intensive industrial training program focusing on data-centric backend technologies, data analysis, and predictive modeling.',
    responsibilities: [
      'Developed robust application logic and data processing pipelines utilizing Python Programming.',
      'Gained hands-on experience spanning the entire Application Development lifecycle.',
      'Conducted Exploratory Data Analysis (EDA) to clean, visualize, and extract actionable insights from complex datasets.',
      'Implemented practical Machine Learning concepts to build, train, and evaluate predictive computational models.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-100 h-100 bg-primary/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
        >
          Professional <span className="text-primary">Experience</span>
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
          Professional experience gained through internships and technical training, contributing to software development, technical support, collaboration, and continuous skill development.
        </motion.p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-slate-200 dark:border-white/10 ml-4 sm:ml-32 space-y-16 transition-colors">
        {experiencesData.map((exp, index) => (
          <motion.div 
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative pl-8 sm:pl-10 group"
          >
            {/* Timeline Node / Icon */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-md shadow-primary/20">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Period Badge for Desktop (positioned to the left of the line) */}
            <div className="hidden sm:block absolute -left-40 top-1.5 w-32 text-right font-mono text-sm font-semibold text-primary">
              {exp.period}
            </div>

            {/* Content Card */}
            <div className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-base font-semibold text-slate-700 dark:text-gray-300 transition-colors">
                    {exp.company}
                  </h4>
                </div>
                
                {/* Mobile Period & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-mono transition-colors">
                  <span className="sm:hidden flex items-center gap-1 text-primary font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Overview Description */}
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base mb-6 leading-relaxed border-b border-slate-200 dark:border-white/10 pb-4 transition-colors">
                {exp.description}
              </p>

              {/* Responsibilities List */}
              <ul className="space-y-3">
                {exp.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Experience;