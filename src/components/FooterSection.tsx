import React from 'react';
import { motion } from 'framer-motion';
const FooterSection = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-charcoal text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Social AI Agent</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing social media engagement with AI-powered automation tools for businesses of all sizes.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">socialmediaagent@f5.si</li>
              
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} Social AI Agent. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;