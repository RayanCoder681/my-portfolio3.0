import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Handle section scrolling
    const sectionId = pathname.slice(1).split('/')[0]; // Get 'contact' from '/contact' or '/project/id'

    // If it's a project/publication deep link, scroll to their respective sections
    let finalSectionId = sectionId;
    if (sectionId === 'project') finalSectionId = 'projects';
    if (sectionId === 'publication') finalSectionId = 'publications';

    if (finalSectionId) {
      const el = document.getElementById(finalSectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
    </main>
  );
};

export default Home;
