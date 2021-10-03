import Home from 'pages/Home';
import About from 'pages/About';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';
import Contact from 'pages/Contact';
import Footer from 'shared/Footer';
import PageLayout from 'shared/PageLayout';
import Navigation from 'shared/Navigation';
import 'App.css';

const App: React.FC = () => (
  <PageLayout>
    <Navigation />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </PageLayout>
);

export default App;
