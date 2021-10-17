import { nanoid } from 'nanoid';
import styles from './Project.module.css';
import { TProject } from './projects';

type Props = {
  project: TProject;
  ind: number;
};

const Project: React.FC<Props> = ({
  project: { title, description, links, technologies },
  ind,
}) => {
  const index = `${ind < 10 ? 0 : ''}${ind + 1}`;
  return (
    <div className={styles.grid}>
      {/* <div className={styles.dec_watermark}>{index}</div> */}
      <div className={styles.description}>
        <div className={styles.dec_number} aria-hidden="true">
          {index}
        </div>
        {/* <div className={styles.dec_hash}>#</div> */}
        <div className={styles.description_wrapper}>
          <h3 className={styles.project_name}>{title}</h3>
          <p className={styles.project_summary}>{description}</p>
          <ul className={styles.project_links} aria-label="Links">
            <li className={styles.project_linkItem}>
              <a href={links.live} className={styles.project_link}>
                Live
              </a>
            </li>
            <li className={styles.project_linkItem}>
              <a href={links.github} className={styles.project_link}>
                Github
              </a>
            </li>
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
      <div className={styles.photo}>PICTURE</div>
    </div>
  );
};

export default Project;
