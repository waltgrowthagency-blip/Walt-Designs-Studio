import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Walt Growth Agency', path: '/growth', trending: true },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-brand-navy-violet border-b border-white/10 py-4 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="/" className="flex flex-col items-start group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/ymwt8N0m/IMG-20260425-040622.jpg" 
                  alt="Walt Designs & Studio Logo" 
                  className="h-10 w-10 rounded-full object-cover border-2 border-white group-hover:rotate-12 transition-transform shadow-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white uppercase leading-none">
                  Walt Designs <span className="text-brand-peach">&</span> Studio
                </span>
                <span className="text-[8px] font-bold text-white/70 uppercase tracking-widest mt-1">
                  (with Growth Agency)
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`relative text-[10px] font-normal uppercase tracking-widest transition-all hover:text-brand-peach ${
                  window.location.pathname === link.path ? 'text-brand-peach border-b-2 border-brand-peach pb-1 font-bold' : 'text-white'
                }`}
              >
                {link.name}
                {link.trending && (
                  <span className="absolute -top-4 -right-4 bg-brand-peach text-brand-navy-violet text-[7px] px-1.5 py-0.5 rounded-full font-bold animate-pulse">
                    TRENDING
                  </span>
                )}
              </a>
            ))}
            <a 
              href="/contact" 
              className="bg-white hover:bg-brand-peach text-brand-navy-violet px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center group shadow-lg"
            >
              Consult Now
              <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-brand-peach transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-navy-violet/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="p-8 space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={link.name}
                  href={link.path}
                  className={`text-2xl font-normal uppercase tracking-tighter flex items-center justify-between ${
                    window.location.pathname === link.path ? 'text-brand-peach font-bold' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {link.trending && (
                    <span className="bg-brand-peach text-brand-navy-violet text-[10px] px-2 py-1 rounded-full">
                      TRENDING
                    </span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
