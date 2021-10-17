import { useEffect } from 'react';
import Home from 'sections/Home';
import About from 'sections/About';
import Skills from 'sections/Skills';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';
import PageLayout from 'shared/PageLayout';
import 'App.css';
import { animateScroll } from 'react-scroll';

const App: React.FC = () => {
  useEffect(() => {
    // Don't change if it's working. Before changing test in different browsers.
    // With different options and scroll-behaviour it may not work.
    animateScroll.scrollToTop({ duration: 300, smooth: true });
  }, []);

  return (
    <>
      <PageLayout>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </PageLayout>
    </>
  );
};

export default App;
