import { Link } from 'react-router-dom';
import LogoSVG from 'assets/LogoSVG';
import styles from './SubpageHeader.module.css';

const SubpageHeader: React.FC = () => (
  <header className={styles.wrapper}>
    <h1 className={styles.container}>
      <Link
        to="/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <span className={styles.logo_wrapper} aria-hidden>
          <LogoSVG />
        </span>
        Anna Piwonska| Front&#8209;End&nbsp;Developer
      </Link>
    </h1>
  </header>
);

export default SubpageHeader;
