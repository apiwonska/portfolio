import SectionHeader from 'shared/SectionHeader';
import { v4 as uuidv4 } from 'uuid';
import styles from './Skills.module.css';
import skills, { ISkills } from './skills';

const Skills: React.FC = () => (
  <section id="skills" className={styles.section}>
    <div className={styles.title}>
      <SectionHeader>Skills</SectionHeader>
    </div>
    {/* <div className={styles.watermark__deco}><img src={}/></div> */}
    <div className={styles.margin__deco} />
    <div className={styles.description}>
      {Object.keys(skills).map((cat, ind) => (
        <div key={uuidv4()} className={styles[`skills_group${ind + 1}`]}>
          <h3 className={styles.skills_title}>{cat}</h3>
          <ul className={styles.skills_list}>
            {skills[cat].map((skill) => (
              <li className={styles.skills_item} key={uuidv4()}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className={styles.illustration}>
      ILLUSTRATION
      {/* <div className={styles.wrapper}>ILLUSTRATION</div> */}
    </div>
  </section>
);

export default Skills;
