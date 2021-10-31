import { useState } from 'react';
import SectionHeader from 'shared/SectionHeader';
import useIntersection from 'utilities/useIntersection';
import styles from './Projects.module.css';
import Project from './Project';
import projects from './projects';

const Projects: React.FC = () => {
  const bigTextRef = useIntersection<HTMLHeadingElement>('text_lg__isVisible', {
    rootMargin: '0px 0px -100px 0px',
    threshold: 1,
  });
  const [openProjectCardId, setOpenProjectCardId] = useState('');

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="container_text">
          <SectionHeader>Projects</SectionHeader>
          <div className="text_lg" ref={bigTextRef}>
            Some of the projects I’ve been working on
          </div>
        </div>
        <div className={styles.content_wrapper}>
          {projects.map((project, ind) => (
            <Project
              key={project.id}
              project={project}
              ind={ind}
              isOpen={openProjectCardId === project.id}
              setOpenProjectCardId={setOpenProjectCardId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
