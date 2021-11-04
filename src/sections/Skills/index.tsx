import SectionHeader from 'shared/SectionHeader';
import { nanoid } from 'nanoid';
import useIntersection from 'utilities/useIntersection';
import skills from 'data/skills';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const bigTextRef = useIntersection<HTMLHeadingElement>('text_lg__isVisible', {
    rootMargin: '0px 0px -100px 0px',
    threshold: 1,
  });
  const contentRef = useIntersection<HTMLDivElement>(
    styles.content__isVisible,
    {
      threshold: 0.7,
    }
  );
  const underlinedSkills = ['React', 'JavaScript'];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="container_text">
          <SectionHeader>Skills</SectionHeader>
          <div className="text_lg" ref={bigTextRef}>
            Technologies I’ve been using in my projects
          </div>
        </div>

        <div className={styles.content_wrapper} ref={contentRef}>
          <div className={styles.skills_wrapper}>
            {Object.keys(skills).map((cat) => (
              <div key={nanoid()} className={styles.skills_group}>
                <h3 className={styles.skills_title}>{cat}</h3>
                <ul className={styles.skills_list}>
                  {skills[cat].map((skill) => (
                    <li className={styles.skills_item} key={nanoid()}>
                      {underlinedSkills.includes(skill) ? (
                        <span className={styles.skills_item__isUnderlined}>
                          {skill}
                        </span>
                      ) : (
                        skill
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
