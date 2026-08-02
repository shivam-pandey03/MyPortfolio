import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Wrench, CheckCircle2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    description: 'Building responsive, accessible, and interactive user interfaces.',
    skills: [
      'React',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Redux & Context API',
      'Framer Motion',
      'Responsive UI/UX'
    ]
  },
  {
    title: 'Backend & Databases',
    icon: Server,
    description: 'Developing scalable APIs and managing data persistence.',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'MongoDB',
      'PostgreSQL / SQL',
      'Authentication (JWT)',
      'API Integration',
      'Server-Side Logic'
    ]
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    description: 'Using modern developer tools for efficient collaboration and deployment.',
   skills: [
  'Git & GitHub',
  'VS Code',
  'Cursor',
  'Postman',
  'API Testing',
  'Vercel',
  'Netlify',
  'SDLC',
]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
        >
          Technical <span className="text-primary">Skills</span>
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
          Technical expertise across frontend, backend, databases, development tools, and support technologies, enabling the development and maintenance of reliable software solutions.
        </motion.p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{category.title}</h3>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-6 pb-4 border-b border-slate-200 dark:border-white/10 transition-colors">
                  {category.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-700 dark:text-gray-300 text-sm sm:text-base font-medium transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative bottom accent */}
              <div className="w-full h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-secondary/20 rounded-full mt-8 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default Skills;