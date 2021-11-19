import useDocumentTitle from 'utilities/useDocumentTitle';
import projects, { TProject } from 'data/projects';
import { useParams } from 'react-router-dom';
import SubpageHeader from 'shared/SubpageHeader';
import Footer from 'shared/Footer';
import NotFound from 'shared/NotFound';
import Project from 'sections/Project';
import Cursor from 'shared/Cursor';

type TParams = { projectId: string };

const ProjectsPage: React.FC = () => {
  const { projectId } = useParams<TParams>();

  const getProject = (id: string): TProject | undefined =>
    projects.find((el) => id === el.id);
  const project = getProject(projectId);

  const documentTitle = project
    ? `Anna Piwonska | Projects | ${project?.projectName}`
    : 'Anna Piwonska | Page Not Found';
  useDocumentTitle(documentTitle);

  if (!project) return <NotFound />;

  return (
    <>
      <div className="page_wrapper">
        <SubpageHeader />
        <Project project={project} />
        <Footer />
      </div>
      <Cursor />
    </>
  );
};

export default ProjectsPage;
