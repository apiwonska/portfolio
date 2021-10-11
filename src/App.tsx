import Home from 'sections/Home';
import About from 'sections/About';
import Skills from 'sections/Skills';
import Projects from 'sections/Projects';
import Contact from 'sections/Contact';
import PageLayout from 'shared/PageLayout';
import Navigation from 'shared/Navigation';
import Cursor from 'shared/Cursor';
import 'App.css';

const App: React.FC = () => (
  <>
    <PageLayout>
      <Navigation />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </PageLayout>
    <Cursor />
  </>
);

export default App;
