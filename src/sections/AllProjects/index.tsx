import { useState } from 'react';
import SectionHeader from 'shared/SectionHeader';
import useIntersection from 'utilities/useIntersection';
import Project from 'shared/ProjectCard';
import projects from 'data/projects';
import CustomLink from 'shared/CustomLink';
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
      <div className="flex">
        <nav className="container">
          <div className={styles.link_wrapper}>
            <CustomLink to="/" navlink>
              MAIN PAGE
            </CustomLink>
          </div>
        </nav>
      </div>

      <main className="main">
        <div className="section">
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
        </div>
      </main>
    </>
  );
};

export default AllProjects;
