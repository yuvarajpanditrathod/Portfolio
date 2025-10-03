import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Heart, ArrowUp } from 'lucide-react';
import resumePDF from '../assets/Yuvaraj-Resume.pdf';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-black tracking-tight mb-3">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                    Yuvaraj P Rathod
                  </span>
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  Full-Stack Developer crafting innovative digital solutions with passion and precision. 
                  Let's build something amazing together.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">yuvarajpanditrathod@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-purple-500/20 transition-all duration-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91 12345 67890</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-indigo-500/20 transition-all duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Hubli, Karnataka, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <nav className="space-y-3">
                {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium hover:translate-x-2 transform"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium hover:translate-x-2 transform"
                >
                  Resume
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Connect With Me</h4>
              <div className="space-y-4">
                <a
                  href="mailto:yuvarajpanditrathod@gmail.com"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-red-500/20 hover:to-pink-500/20 transition-all duration-300 group"
                >
                  <div className="p-2 bg-red-500/20 rounded-lg group-hover:bg-red-500/30 transition-all duration-300">
                    <Mail className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-gray-400 text-sm">Drop me a message</div>
                  </div>
                </a>

                <a
                  href="https://github.com/yuvarajpanditrathod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-gray-600/20 hover:to-gray-700/20 transition-all duration-300 group"
                >
                  <div className="p-2 bg-gray-600/20 rounded-lg group-hover:bg-gray-600/30 transition-all duration-300">
                    <Github className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <div className="text-white font-medium">GitHub</div>
                    <div className="text-gray-400 text-sm">View my code</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/yuvarajpanditrathod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 group"
                >
                  <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-all duration-300">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">LinkedIn</div>
                    <div className="text-gray-400 text-sm">Let's connect</div>
                  </div>
                </a>

                <a
                  href="https://www.jobscholarkarnataka.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-xl hover:bg-gradient-to-r hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 group"
                >
                  <div className="p-2 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44 8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56-1.83-.63-3.37-1.91-4.32-3.56M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 2C6.47 2 2 6.5 2 12A10 10 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-medium">Job Scholar Karnataka</div>
                    <div className="text-gray-400 text-sm">Visit website</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">
                © {currentYear} Yuvaraj P Rathod 
              </span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span className="text-sm">. All rights reserved.</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Social Icons for Mobile */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <div className="flex flex-col gap-3">
          
          {/* Mail */}
          <a
            href="mailto:yuvarajpanditrathod@gmail.com"
            className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>

          {/* Github */}
          <a
            href="https://github.com/yuvarajpanditrathod"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yuvarajpanditrathod"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Website Link */}
          <a
            href="https://www.jobscholarkarnataka.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            title="Visit Job Scholar Karnataka"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08C6.03 6.34 7.57 5.06 9.4 4.44 8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56-1.83-.63-3.37-1.91-4.32-3.56M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 2C6.47 2 2 6.5 2 12A10 10 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;