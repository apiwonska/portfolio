import { useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import Icon, { iconEnum } from 'assets/Icon';
import styles from './Project.module.css';
import { TProject } from './projects';

type Props = {
  project: TProject;
  ind: number;
};

const Project: React.FC<Props> = ({
  project: { title, summary, links, technologies, id, mockupImg },
  ind,
}) => {
  const projectRef = useRef<HTMLDivElement | null>(null);
  const index = `${ind < 10 ? 0 : ''}${ind + 1}`;

  useEffect(() => {
    const intersection = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.wrapper__isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px 0px', threshold: 0.3 }
    );
    if (projectRef.current) {
      intersection.observe(projectRef.current);
    }
  }, []);

  const backgroundClasses = classNames(styles.background, styles[id]);

  return (
    <>
      <div className={styles.wrapper} ref={projectRef}>
        <div className={styles.title_wrapper}>
          <span className={styles.index} aria-hidden="true">
            {index}
          </span>
          <h3 className={styles.title}>{title}</h3>
        </div>

        <div className={backgroundClasses}>
          {mockupImg && (
            <img
              // eslint-disable-next-line
            src={require(`../../assets/projects/${mockupImg}`).default}
              className={styles.photo}
              alt=""
            />
          )}

          <div className={styles.background_overlay}>
            <div className={styles.description_wrapper}>
              <p className={styles.summary}>{summary}</p>
              <ul className={styles.links} aria-label="Links">
                {links.live && (
                  <li className={styles.linkItem}>
                    <a
                      href={links.live}
                      className={styles.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={styles.linkIcon}>
                        <Icon name={iconEnum.ArrowUpRight} />
                      </span>
                      Live
                    </a>
                  </li>
                )}
                {links.github && (
                  <li className={styles.linkItem}>
                    <a
                      href={links.github}
                      className={styles.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className={styles.linkIcon}>
                        <Icon name={iconEnum.ArrowUpRight} />
                      </span>
                      Github
                    </a>
                  </li>
                )}
              </ul>
              <ul
                className={styles.tags}
                aria-label="Technologies used in the project"
              >
                {technologies.map((technology) => (
                  <li className={styles.tag} key={nanoid()}>
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
