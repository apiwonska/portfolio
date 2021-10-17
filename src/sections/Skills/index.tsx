import SectionHeader from 'shared/SectionHeader';
import { nanoid } from 'nanoid';
import styles from './Skills.module.css';
import skills, { ISkills } from './skills';

const Skills: React.FC = () => (
  <section id="skills">
    <SectionHeader>Skills</SectionHeader>

    <div className="">
      {Object.keys(skills).map((cat) => (
        <div key={nanoid()} className="">
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
  </section>
);

export default Skills;
