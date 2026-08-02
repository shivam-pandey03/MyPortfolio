import React from 'react';
import Navbar from './component/layout/Navbar';
import Hero from './component/sections/Hero';
import About from './component/sections/About';
import Skills from './component/sections/Skills';
import Projects from './component/sections/Projects';
import Experience from './component/sections/Experience';
import Certifications from './component/sections/Certifications';
import Resume from './component/sections/Resume';
import Contact from './component/sections/Contact';
import Footer from './component/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-gray-100 font-sans">
      
      <Navbar/>
      <main>
        <Hero />
        <About/>
        <Skills/> 
        <Projects/>
        <Experience/>
        <Certifications/>
        <Resume/>
        <Contact/>
      
      </main>

      <Footer/>
    </div>
  );
}

export default App;