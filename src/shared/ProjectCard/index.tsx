import { nanoid } from 'nanoid';
import classNames from 'classnames';
import Icon, { iconEnum } from 'assets/Icon';
import useIntersection from 'utilities/useIntersection';
// import { ReactComponent as EyeIconSVG } from 'assets/eye-icon.svg';
import { ReactComponent as ParagraphIconSVG } from 'assets/paragraph-icon.svg';
import { ReactComponent as CloseIconSVG } from 'assets/close-icon.svg';
import { TProject } from 'data/projects';
import styles from './ProjectCard.module.css';

type Props = {
  project: TProject;
  ind: number;
  isOpen: boolean;
  setOpenProjectCardId: React.Dispatch<React.SetStateAction<string>>;
};

const Project: React.FC<Props> = ({
  project: { projectName, summary, links, technologies, id, cardImg },
  ind,
  isOpen,
  setOpenProjectCardId,
}) => {
  const projectRef = useIntersection<HTMLDivElement>(
    styles.wrapper__isVisible,
    { threshold: 0.5 }
  );
  const index = `${ind < 10 ? 0 : ''}${ind + 1}`;

  const cardBackgroundClasses = classNames(styles[id], {
    [styles.card_background]: !isOpen,
    [styles.card_background__isActive]: isOpen,
  });
  const cardButtonClasses = classNames(styles.card_button, {
    [styles.card_button__isOpen]: isOpen,
  });

  return (
    <>
      <div className={styles.card} ref={projectRef}>
        <div
          className={
            !isOpen
              ? styles.projectName_wrapper
              : styles.projectName_wrapper__isActive
          }
        >
          <span
            className={
              !isOpen
                ? styles.projectName_index
                : styles.projectName_index__isActive
            }
            aria-hidden="true"
          >
            {index}
          </span>
          <h3
            className={
              !isOpen ? styles.projectName : styles.projectName__isActive
            }
          >
            {projectName}
          </h3>
        </div>
        <button
          className={cardButtonClasses}
          aria-label={!isOpen ? 'Read about project' : 'Close'}
          type="button"
          onClick={() =>
            !isOpen ? setOpenProjectCardId(id) : setOpenProjectCardId('')
          }
        >
          {!isOpen ? <ParagraphIconSVG /> : <CloseIconSVG />}
        </button>

        <div className={cardBackgroundClasses}>
          {cardImg && (
            <img
              // eslint-disable-next-line
            src={require(`../../assets/projects/${cardImg}`).default}
              className={styles.card_photo}
              alt=""
            />
          )}

          <div
            className={
              !isOpen
                ? styles.projectInfo_wrapper
                : styles.projectInfo_wrapper__isActive
            }
          >
            <p className={styles.projectInfo_summary}>{summary}</p>
            <ul className={styles.projectInfo_links} aria-label="Links">
              {links.live && (
                <li className={styles.projectInfo_linkItem}>
                  <a
                    href={links.live}
                    className={styles.projectInfo_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.projectInfo_linkIcon}>
                      <Icon name={iconEnum.ArrowUpRight} />
                    </span>
                    Live
                  </a>
                </li>
              )}
              {links.github && (
                <li className={styles.projectInfo_linkItem}>
                  <a
                    href={links.github}
                    className={styles.projectInfo_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.projectInfo_linkIcon}>
                      <Icon name={iconEnum.ArrowUpRight} />
                    </span>
                    Github
                  </a>
                </li>
              )}
            </ul>
            <ul
              className={styles.projectInfo_tags}
              aria-label="Technologies used in the project"
            >
              {technologies.map((technology) => (
                <li className={styles.projectInfo_tag} key={nanoid()}>
                  {technology}
                </li>
              ))}
            </ul>
            {/* {images?.length && (
              <button
                className={styles.screenshots_button}
                aria-label="See screenshots"
                type="button"
              >
                <span className={styles.screenshots_icon}>
                  <EyeIconSVG />
                </span>
                See screenshots
              </button>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
