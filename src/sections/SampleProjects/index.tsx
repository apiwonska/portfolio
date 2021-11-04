import { useState } from 'react';
import SectionHeader from 'shared/SectionHeader';
import useIntersection from 'utilities/useIntersection';
import Project from 'shared/ProjectCard';
import projects from 'data/projects';
import { Link } from 'react-router-dom';
import styles from './SampleProjects.module.css';

const Projects: React.FC = () => {
  const bigTextRef = useIntersection<HTMLDivElement>('text_lg__isVisible', {
    rootMargin: '0px 0px -100px 0px',
    threshold: 1,
  });
  // Don't increase treshold of the link, it will not work because the text is moved vertically
  const linkRef = useIntersection<HTMLSpanElement>(styles.link__isVisible, {
    threshold: 0.3,
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
            Some of the projects I’ve been working on
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
          <span className={styles.link} ref={linkRef}>
            <Link to="/projects" target="_blank" rel="noopener noreferrer">
              See more projects
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
