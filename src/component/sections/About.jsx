import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Lightbulb, GraduationCap, Users, Layout } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Building responsive, scalable web applications from the ground up using modern JavaScript frameworks and clean code practices.'
  },
  {
    icon: Server,
    title: 'IT & Tech Support',
    description: 'Leveraging a strong understanding of networking protocols and hardware infrastructure to troubleshoot and resolve technical bottlenecks efficiently.'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Approaching complex challenges with a logical mindset, breaking them down into actionable, optimized, and reliable solutions.'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Highly adaptable and always eager to absorb new technologies, methodologies, and industry best practices to grow professionally.'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Valuing clear communication to translate technical concepts seamlessly for both peers and end-users.'
  },
  {
    icon: Layout,
    title: 'Modern Web Technologies',
    description: 'Translating concepts into accessible, intuitive user interfaces that prioritize excellent user experiences.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
        >
          About <span className="text-primary">Me</span>
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
          className="text-slate-600 dark:text-gray-400 text-lg transition-colors font-medium"
        >
          Computer Science graduate with a strong foundation in software development, technical support, and problem-solving, eager to contribute, learn, and grow in a collaborative environment.
        </motion.p>
      </div>

      {/* Content Grid (Sticky Left, Scrolling Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
       {/* Left Column: Narrative */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6 text-slate-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg transition-colors"
        >
          <p>
            I recently completed my B.Tech in Computer Science and Engineering, building a strong foundation in both software development and core IT concepts. My academic journey has been fueled by a deep curiosity for how systems operate, leading me to develop full-stack applications using <span className="text-primary font-medium">React and Node.js</span>, while actively exploring computer networking protocols and hardware infrastructure.
          </p>
          <p>
            I am highly adaptable and enjoy troubleshooting issues, whether that means debugging a responsive web interface or diagnosing a network configuration. Beyond the code, I value clear communication and seamless team collaboration, recognizing that the best tech solutions are built through shared knowledge.
          </p>
          <p>
            I am eager to bring my problem-solving mindset, dedication to continuous learning, and technical versatility to a dynamic role where I can contribute and grow.
          </p>
          
          <div className="pt-6">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-300 group"
            >
              <span>Let's Connect and Discuss Opportunities. </span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Highlights Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 backdrop-blur-md hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 transition-colors group-hover:text-primary dark:group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed transition-colors flex-grow">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default About;