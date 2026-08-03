import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // web3forms api used here for contact thorugh  email
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8fc08b6e-648f-4b0a-9c68-188d747f249e", 
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: "New Contact Form Submission from Portfolio",
          from_name: formState.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        console.error("Error from Web3Forms:", result);
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Network error! Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative transition-colors duration-300">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors"
        >
          Get In <span className="text-primary">Touch</span>
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
         Interested in discussing a job opportunity, project collaboration, or potential role? I'd be happy to connect and explore how I can contribute.
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
              Let's Build Something <span className="text-primary">Great Together.</span>
            </h3>
            <p className="text-slate-600 dark:text-gray-400 leading-relaxed transition-colors">
              I am currently seeking full-time opportunities as a Frontend, Full Stack, or React Developer. Whether you have a question or just want to say hi, I will try my best to get back to you!
            </p>
          </div>

          {/* Contact Methods Cards */}
          <div className="space-y-4">
            
            <a 
              href="mailto:shivampandey2503@gmail.com" 
              className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 group shadow-sm"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-500 dark:text-gray-400 transition-colors">Email Me At</span>
                <span className="text-slate-900 dark:text-white font-medium group-hover:text-primary transition-colors">
                  shivampandey2503@gmail.com
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 shadow-sm transition-colors">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xs font-mono text-slate-500 dark:text-gray-400 transition-colors">Location</span>
                <span className="text-slate-900 dark:text-white font-medium transition-colors">
                  India • Open to Remote & Relocation
                </span>
              </div>
            </div>

          </div>

          {/* Availability Badge */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 via-white to-white dark:via-slate-900 dark:to-slate-900 border border-primary/20 flex items-center gap-3 transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono text-slate-700 dark:text-gray-300 transition-colors">
              Currently available for full-time roles & contracts.
            </span>
          </div>

        </motion.div>

        {/* Right Column: Interactive Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white/80 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden shadow-xl transition-colors"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-white/10 transition-colors">
            <MessageSquare className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">Send Me a Message</h3>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto border border-green-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">Message Sent!</h4>
              <p className="text-slate-600 dark:text-gray-400 max-w-sm mx-auto transition-colors">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 text-sm font-medium transition-colors border border-slate-300 dark:border-white/10"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hi, I'd like to discuss a potential job opportunity..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950/50 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;