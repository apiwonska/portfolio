import { useEffect } from 'react';
import Home from 'sections/Home';
import About from 'sections/About';
import Skills from 'sections/Skills';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';
import PageLayout from 'shared/PageLayout';
import 'App.css';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
