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
          <a href="#home" className={styles.nav_link}>
            Home
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#about" className={styles.nav_link}>
            About
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#skills" className={styles.nav_link}>
            Skills
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#projects" className={styles.nav_link}>
            Projects
          </a>
        </li>
        <li className={styles.nav_item}>
          <a href="#contact" className={styles.nav_link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
