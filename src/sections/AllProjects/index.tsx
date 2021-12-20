import { useState } from 'react';
import SectionHeader from 'shared/SectionHeader';
import useIntersection from 'utilities/useIntersection';
import Project from 'shared/ProjectCard';
import projects from 'data/projects';
import styles from './AllProjects.module.css';

const AllProjects: React.FC = () => {
  const bigTextRef = useIntersection<HTMLHeadingElement>('text_lg__isVisible', {
    rootMargin: '0px 0px -100px 0px',
    threshold: 1,
  });
  // Don't increase treshold of the link, it will not work because the text is moved vertically
  const [openProjectCardId, setOpenProjectCardId] = useState('');

  return (
    <>
      <main className="main">
        <div className="section">
          <div className="container">
            <div className="container_text">
              <SectionHeader level="h1">Projects</SectionHeader>
              <div className="text_lg" ref={bigTextRef}>
                Some of the projects I’ve been working&nbsp;on
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
                  headingLevel="h2"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AllProjects;
