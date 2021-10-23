import SectionHeader from 'shared/SectionHeader';
import styles from './Projects.module.css';
import Project from './Project';
import projects from './projects';

const Projects: React.FC = () => (
  <section id="projects" className="section">
    <div className="container">
      <SectionHeader>Projects</SectionHeader>
      <div className={styles.content_wrapper}>
        {projects.map((project, ind) => (
          <Project project={project} ind={ind} key={project.id} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
