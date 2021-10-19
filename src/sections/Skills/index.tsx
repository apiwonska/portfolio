import SectionHeader from 'shared/SectionHeader';
import { nanoid } from 'nanoid';
import styles from './Skills.module.css';
import skills from './skills';

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <div className="container">
      <SectionHeader>Skills</SectionHeader>
    </div>

    <div className={styles.content_bg}>
      <div className={styles.content_wrapper}>
        {Object.keys(skills).map((cat) => (
          <div key={nanoid()} className={styles.skills_group}>
            <h3 className={styles.skills_title}>{cat}</h3>
            <ul className={styles.skills_list}>
              {skills[cat].map((skill) => (
                <li className={styles.skills_item} key={nanoid()}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
