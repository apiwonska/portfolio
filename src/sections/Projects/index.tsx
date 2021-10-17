import SectionHeader from 'shared/SectionHeader';
import { nanoid } from 'nanoid';
import styles from './Projects.module.css';
import Project from './Project';
import projects from './projects';

const Projects: React.FC = () => (
  <section id="projects">
    <SectionHeader>Projects</SectionHeader>

    {projects.map((project, ind) => (
      <Project project={project} ind={ind} key={nanoid()} />
    ))}
  </section>
);

export default Projects;
