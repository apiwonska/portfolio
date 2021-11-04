import PageLayout from 'shared/PageLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import SampleProjects from '../sections/SampleProjects';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => (
  <PageLayout>
    <Hero />
    <main>
      <About />
      <Skills />
      <SampleProjects />
      <Contact />
    </main>
  </PageLayout>
);

export default HomePage;
