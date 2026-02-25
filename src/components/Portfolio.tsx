import { useState } from 'react';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Footer from './Footer';
import Hero from './Hero';
import Navigation from './Navigation';
import TechStack from './TechStack';

function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl animate-pulse transition-colors duration-300"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl animate-pulse transition-colors duration-300"
        style={{ animationDelay: '1s' }}
      ></div>
      
      <div className="relative z-10">
        <Navigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Hero />
        <Experience />
        <TechStack />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;