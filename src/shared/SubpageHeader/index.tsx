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
        <div className={styles.text_wrapper}>
          <span className={styles.text_span1}>
            <span className={styles.text_span1_inner}>
              Anna Piwonska
              <span className="sr_only">,&nbsp;</span>
            </span>
          </span>
          <span className={styles.text_span2}>
            <span className={styles.text_span2_inner}>
              Front&#8209;End&nbsp;Developer
            </span>
          </span>
        </div>
      </Link>
    </h1>
  </header>
);

export default SubpageHeader;
