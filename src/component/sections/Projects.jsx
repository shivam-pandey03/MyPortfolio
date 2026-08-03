import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Layers } from 'lucide-react';

// Reliable inline SVG for GitHub icon
const GithubIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const projectsData = [
  {
    title: 'MediTrack — Pharmacy Inventory Management',
    description: 'A full-stack pharmacy inventory management system that helps medical stores efficiently manage medicine stock, billing, and inventory. Features include real-time stock tracking, secure authentication, and an intuitive dashboard.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/shivam-pandey03/MediTrack',
    liveUrl: 'https://medi-track-sigma.vercel.app',
    featured: false,
  },
  {
    title: 'Personal Developer Portfolio',
    description: 'A fully responsive, modern web portfolio designed to showcase technical projects and skills. Engineered with dynamic theming (Light/Dark mode), scroll animations, and optimized for fast page loads and accessibility.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/shivam-pandey03/portfolio', 
    liveUrl: '#', // It's already live here!
    featured: false,
  },
  {
    title: 'Academic Mini-Project / Utility',
    description: 'A lightweight web utility built during my computer science coursework. Focused on clean logic, API integration, and rendering dynamic data efficiently to the DOM without external libraries.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    githubUrl: 'https://github.com/shivam-pandey03', 
    liveUrl: '#',
    featured: false,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
        >
          Project <span className="text-primary">Highlights</span>
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
          Explore projects that reflect my passion for software development, problem-solving, and creating responsive, scalable web applications. 
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col justify-between rounded-2xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 group"
          >
            <div>
              {/* Top Bar: Icon & Featured Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/20">
                    <Layers className="w-3.5 h-3.5" />
                    Flagship Project
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6 transition-colors">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-8 pt-4 border-t border-slate-200 dark:border-white/10 transition-colors">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200 dark:border-white/5 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-white bg-primary/90 hover:bg-primary px-4 py-2 rounded-lg shadow-md shadow-primary/10 transition-all"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Projects;