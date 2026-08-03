import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Languages from './components/sections/Languages';
import Achievements from './components/sections/Achievements';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import CursorGlow from './components/ui/CursorGlow';
import Loader from './components/ui/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Loader visible={loading} />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="bg-base">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Languages />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;
