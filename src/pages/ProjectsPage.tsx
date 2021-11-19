import Projects from 'sections/AllProjects';
import SubpageHeader from 'shared/SubpageHeader';
import Footer from 'shared/Footer';
import useDocumentTitle from 'utilities/useDocumentTitle';
import Cursor from 'shared/Cursor';

const ProjectsPage: React.FC = () => {
  useDocumentTitle('Anna Piwonska | Projects');

  return (
    <>
      <div className="page_wrapper">
        <SubpageHeader />
        <Projects />
        <Footer />
      </div>
      <Cursor />
    </>
  );
};

export default ProjectsPage;
