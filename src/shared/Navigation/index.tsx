import { Link } from 'react-scroll';
import Icon, { iconEnum } from 'assets/Icon';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => (
  <div className={styles.nav}>
    <a
      href="https://github.com/apiwonska"
      className={styles.nav_linkIcon}
      aria-label="go to Anna Piwonska Github Page"
    >
      <Icon name={iconEnum.Github} />
    </a>
    <nav className={styles.nav_main}>
      <ul className={styles.nav_list}>
        <li className={styles.nav_item}>
          <Link
            to="home"
            className={styles.nav_link}
            activeClass={styles.nav_link__active}
            spy
            smooth
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="about"
            className={styles.nav_link}
            activeClass={styles.nav_link__active}
            spy
            smooth
            offset={0}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="skills"
            className={styles.nav_link}
            activeClass={styles.nav_link__active}
            spy
            smooth
            offset={0}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="projects"
            className={styles.nav_link}
            activeClass={styles.nav_link__active}
            spy
            smooth
            offset={0}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link
            to="contact"
            className={styles.nav_link}
            activeClass={styles.nav_link__active}
            spy
            smooth
            offset={0}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
