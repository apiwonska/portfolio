import Projects from 'sections/AllProjects';
import SubpageHeader from 'shared/SubpageHeader';
import Footer from 'shared/Footer';
import useDocumentTitle from 'utilities/useDocumentTitle';

const ProjectsPage: React.FC = () => {
  useDocumentTitle('Anna Piwonska | Projects');

  return (
    <>
      <SubpageHeader />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
