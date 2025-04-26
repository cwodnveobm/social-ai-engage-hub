
import React from 'react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 section-padding">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[400px] -right-[400px] w-[800px] h-[800px] bg-blue-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-purple-100 rounded-full opacity-30 blur-3xl" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Automate Your Social <span className="text-primary">AI</span> Engagement
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Supercharge your Instagram and Facebook presence with AI-powered replies, smart comments, and automated content creation—all in one powerful tool.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactModal 
                buttonText="Contact Us to Get Started" 
                className="btn-primary"
              />
              <a 
                href="#features" 
                className="btn-outline"
              >
                See Features
              </a>
            </motion.div>
          </div>
          
          <div className="flex-1 hidden md:block relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 rounded-3xl blur-sm transform -rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                  alt="Social AI Agent dashboard visualization" 
                  className="rounded-3xl shadow-2xl object-cover w-full aspect-video"
                />
              </div>
              
              <div className="absolute -right-4 -bottom-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-semibold text-sm text-charcoal">AI Assistant Active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
