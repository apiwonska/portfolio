import { TProject } from 'data/projects';
import Icon, { iconEnum } from 'assets/Icon';
import { nanoid } from 'nanoid';
import useIntersection from 'utilities/useIntersection';
import styles from './Project.module.css';

interface IProps {
  project: TProject;
}

const Project: React.FC<IProps> = ({
  project: { projectName, summary, links, technologies, images },
}) => {
  const infoRef = useIntersection<HTMLDivElement>(
    styles.info_wrapper__isVisible,
    {
      threshold: 0,
    }
  );
  const imageRefs = images?.map(() =>
    useIntersection<HTMLImageElement>(styles.image__isVisible, {
      threshold: 0.3,
    })
  );

  return (
    <section className="section">
      <div className={styles.info_container}>
        <div className={styles.info_wrapper} ref={infoRef}>
          <h2 className={styles.project_name}>{projectName}</h2>
          <p className={styles.project_summary}>{summary}</p>
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
        {images?.map((image, ind) => (
          <img
            // eslint-disable-next-line
              src={require(`../../assets/projects/${image}`).default}
            alt=""
            ref={imageRefs && imageRefs[ind]}
            className={styles.image}
            key={nanoid()}
          />
        ))}
      </div>
    </section>
  );
};

export default Project;
