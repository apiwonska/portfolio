import useDocumentTitle from 'utilities/useDocumentTitle';
import { TProject } from 'data/projects';

type Props = {
  project: TProject;
};

const ProjectsPage: React.FC<Props> = ({
  project: { projectName, summary, links, technologies, id, cardImg },
}) => {
  useDocumentTitle('Anna Piwonska | Projects | ');
  return <div>Project</div>;
};

export default ProjectsPage;
