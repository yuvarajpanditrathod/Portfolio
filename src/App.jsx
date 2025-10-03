import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
      <div id="app-root" className="flex flex-col min-h-screen bg-transparent text-gray-900 transition-colors duration-300">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
  );
}

export default App;
