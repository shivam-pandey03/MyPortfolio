import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom lightweight SVG Icons
const GithubIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/shivam-pandey03', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shivam-pandey03/', label: 'LinkedIn' },
    { icon: TwitterIcon, href: 'https://x.com/Shivamp2503', label: 'Twitter' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=shivampandey2503@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#080d19] text-slate-600 dark:text-slate-400 pt-16 pb-8 transition-colors duration-300">
      
      {/* Top Gradient Accent Line (Matching Section Underlines) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-primary to-secondary rounded-b-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-16">
          
          {/* Column 1: Brand & Description (Left) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <a href="#" className="text-2xl font-bold tracking-wider text-slate-900 dark:text-white transition-colors">
              Shivam<span className="text-primary text-3xl">.</span>dev
            </a>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
              A passionate Software Developer dedicated to building scalable web applications, solving complex technical challenges, and creating impactful digital experiences.
            </p>
          </div>

          {/* Column 2: Quick Links (Middle) */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-primary dark:hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Stay Connected & Socials (Right) */}
          <div className="md:col-span-4 flex flex-col md:items-end md:text-right">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Stay Connected</h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm mb-6">
              Don't let your ideas stay ideas. Reach out, and let's build something great together.
            </p>
            
            {/* Social Logos mapped to the Right Side */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Row: Centered Copyright & Back to Top */}
        <div className="relative border-t border-slate-200 dark:border-slate-800/80 pt-8 flex flex-col items-center justify-center">
          
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-500 text-center">
            Copyright &copy; {currentYear} by Shivam Pandey | All Rights Reserved.
          </p>

          {/* Floating Back to Top Button aligned to the right edge */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-6 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.button>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;