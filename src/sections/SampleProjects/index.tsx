import { useState } from 'react';
import SectionHeader from 'shared/SectionHeader';
import useIntersection from 'utilities/useIntersection';
import Project from 'shared/ProjectCard';
import projects from 'data/projects';
import CustomLink from 'shared/CustomLink';
import styles from './SampleProjects.module.css';

const Projects: React.FC = () => {
  const bigTextRef = useIntersection<HTMLDivElement>('text_lg__isVisible', {
    rootMargin: '0px 0px -100px 0px',
    threshold: 1,
  });

  const [openProjectCardId, setOpenProjectCardId] = useState('');
  const sampleProjects = [
    'portfolio',
    'favouriteRecipes',
    'forum',
    'tripExpenses',
  ];

  return (
    <section id="sample-projects" className="section">
      <div className="container">
        <div className="container_text">
          <SectionHeader>Projects</SectionHeader>
          <div className="text_lg" ref={bigTextRef}>
            Some of my projects
          </div>
        </div>

        <div className={styles.content_wrapper}>
          {projects
            .filter((project) => sampleProjects.includes(project.id))
            .map((project, ind) => (
              <Project
                key={project.id}
                project={project}
                ind={ind}
                isOpen={openProjectCardId === project.id}
                setOpenProjectCardId={setOpenProjectCardId}
              />
            ))}
        </div>

        <div className={styles.link_wrapper}>
          <CustomLink to="/projects" icon="arrow-right" animation>
            See more projects
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default Projects;
