import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import resumePDF from '../assets/Yuvaraj-Resume.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  // Theme toggling removed

  // Scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50'
            : 'bg-transparent'
        }`}
       >
        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600 transition-all duration-500 cursor-pointer drop-shadow-sm">
                  Yuvaraj
                </span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 shadow-lg border border-blue-200/50 dark:border-blue-700/50'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/80 dark:hover:bg-gray-800/60 hover:shadow-md'
                  }`}
                >
                  {item.name}
                  <span className={`absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 rounded-full ${
                    activeSection === item.name.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme toggle removed */}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-3 rounded-xl bg-gray-100/80 hover:bg-gray-200 transition-all duration-300 shadow-lg border border-gray-200/50"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200/50 dark:bg-gray-700/50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transition-all duration-150 ease-out shadow-lg"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          
          <div className="fixed top-0 right-0 h-full w-80 max-w-sm bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-out border-l border-gray-200/50 dark:border-gray-700/50">
            <div className="flex flex-col h-full">
              
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/80 dark:border-gray-700/80 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Navigation</h2>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-6 py-8 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center px-6 py-4 text-base font-semibold rounded-xl transition-all duration-200 shadow-sm ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 border-l-4 border-blue-500 shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/80 dark:hover:bg-gray-800/60 hover:shadow-md'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center px-6 py-4 text-base font-semibold rounded-xl transition-all duration-200 shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Resume
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;