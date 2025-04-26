
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold text-charcoal">
              Social<span className="text-primary">AI</span>Agent
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-charcoal hover:text-primary font-medium transition-colors">
              Home
            </a>
            <a href="#features" className="text-charcoal hover:text-primary font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-charcoal hover:text-primary font-medium transition-colors">
              Pricing
            </a>
            <ContactModal buttonText="Contact Us" />
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#hero" 
                className="text-charcoal hover:text-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-charcoal hover:text-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-charcoal hover:text-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="pt-2">
                <ContactModal 
                  buttonText="Contact Us" 
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
