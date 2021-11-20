import { TProject } from 'data/projects';
import Icon, { iconEnum } from 'assets/Icon';
import { nanoid } from 'nanoid';
import useIntersection from 'utilities/useIntersection';
import CustomLink from 'shared/CustomLink';
import styles from './Project.module.css';
import Img from './Img';

interface IProps {
  project: TProject;
}

const Project: React.FC<IProps> = ({
  project: {
    projectName,
    summary,
    additionalInfo,
    links,
    technologies,
    images,
  },
}) => {
  const infoRef = useIntersection<HTMLDivElement>(
    styles.info_wrapper__isVisible,
    {
      threshold: 0,
    }
  );

  return (
    <>
      <div className="flex">
        <nav className={styles.nav_container}>
          <div className={styles.nav_link_wrapper}>
            <CustomLink to="/" navlink>
              MAIN PAGE
            </CustomLink>
            <CustomLink to="/projects" navlink>
              PROJECTS
            </CustomLink>
          </div>
        </nav>
      </div>

      <main className="main">
        <div className="section">
          <div className={styles.info_container}>
            <div className={styles.info_wrapper} ref={infoRef}>
              <h2 className={styles.project_name}>{projectName}</h2>
              <p
                className={styles.project_summary}
                data-testid="project-summary"
              >
                {summary}
              </p>
              <p
                className={styles.project_summary}
                data-testid="project-additional"
              >
                {additionalInfo}
              </p>
              <ul className={styles.project_links} aria-label="Links">
                {links.live && (
                  <li className={styles.project_linkItem}>
                    <a
                      href={links.live}
                      className={styles.project_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={styles.project_linkIcon}>
                        <Icon name={iconEnum.ArrowRight} />
                      </span>
                      Live
                    </a>
                  </li>
                )}
                {links.github && (
                  <li className={styles.project_linkItem}>
                    <a
                      href={links.github}
                      className={styles.project_link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={styles.project_linkIcon}>
                        <Icon name={iconEnum.ArrowRight} />
                      </span>
                      Github
                    </a>
                  </li>
                )}
              </ul>
              <ul
                className={styles.project_tags}
                aria-label="Technologies used in the project"
              >
                {technologies.map((technology) => (
                  <li className={styles.project_tag} key={nanoid()}>
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.images_wrapper}>
            {images?.map((image) => (
              // Image moved to separate component to mock it in tests
              <Img image={image} key={nanoid()} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
