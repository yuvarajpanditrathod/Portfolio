import React from 'react';
import { Download, Mail } from 'lucide-react';
import profileImage from '../assets/photo.jpeg';
import resumePDF from '../assets/Yuvaraj-Resume.pdf';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Photo */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative group">
              {/* SVG Shape Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-500 opacity-20"></div>
              
              {/* Photo Container with Custom SVG Shape */}
              <div className="relative w-80 h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {/* Your actual image */}
                <img className="w-full h-full object-cover" src={profileImage} alt="Yuvaraj" />
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800/50 dark:to-purple-800/50">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Your Photo Here</p>
                  </div>
                </div>
                
                {/* Overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Me</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Hi there! I'm <span className="font-semibold text-gray-900 dark:text-white">Yuvaraj</span>, a passionate full-stack developer 
                with a love for creating innovative digital solutions. I specialize in building modern, 
                responsive web applications that deliver exceptional user experiences.
              </p>
              
              <p>
                With expertise in <span className="font-semibold text-blue-600">React</span>, 
                <span className="font-semibold text-green-600"> Node.js</span>, and 
                <span className="font-semibold text-purple-600"> modern web technologies</span>, 
                I bring ideas to life through clean, efficient code and thoughtful design.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in continuous learning and staying 
                ahead of the curve in this ever-evolving tech landscape.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href={resumePDF}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                aria-label="Download Resume"
                title="Download Resume"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                <Mail className="w-4 h-4" />
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
