import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Mail } from "lucide-react";

// Reliable inline SVG for GitHub
const GithubIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.75a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"
      clipRule="evenodd"
    />
  </svg>
);

// Mini icon for the floating badge on the image
const CodeIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10 pb-28 lg:pt-12 lg:pb-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* 2-Column Grid Wrapper */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
          {/* Terminal Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary mb-8 backdrop-blur-sm mx-auto lg:mx-0"
          >
            <span className="text-xs sm:text-sm font-mono tracking-wide">
  Open to Software Development, Technical Support & IT Support Opportunities
</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight transition-colors duration-300"
          >
            Delivering Scalable Web Solutions &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">
              Comprehensive Tech Support
            </span>
          </motion.h1>

          {/* Subtitle / Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 font-normal leading-relaxed transition-colors duration-300"
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              <span className="text-slate-900 dark:text-gray-200 font-semibold transition-colors duration-300">
                Software Development
              </span>{" "}
              <span className="text-primary">|</span>{" "}
              <span className="text-slate-900 dark:text-gray-200 font-semibold transition-colors duration-300">
                Technical Support
              </span>{" "}
              <span className="text-primary">|</span>{" "}
              <span className="text-slate-900 dark:text-gray-200 font-semibold transition-colors duration-300">
                Problem Solving
              </span>{" "}
              <span className="text-primary">|</span>{" "}
              <span className="text-slate-900 dark:text-gray-200 font-semibold transition-colors duration-300">
                Communication
              </span>
            </p>
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-300 dark:border-white/15 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white font-medium transition-all duration-200 backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Proof / Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-6 text-slate-500 dark:text-gray-400"
          >
            <a
              href="http://github.com/shivam-pandey03"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-pandey03"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=shivampandey2503@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary dark:hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mb-12 lg:mb-0"
        >
          {/* Static image container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-72 lg:h-72 xl:w-88 xl:h-88">
            {/* Ambient pulse ring behind the image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-xl opacity-40 dark:opacity-60 animate-pulse" />

            {/* The Image Container */}
            <div className="relative w-full h-full rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src="profile.jpeg"
                alt="Shivam Pandey"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Shivam Pandey Name Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-2.5 rounded-full shadow-xl border border-slate-200 dark:border-slate-700 whitespace-nowrap z-20 flex items-center gap-2.5 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide transition-colors">
                Shivam Pandey
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
