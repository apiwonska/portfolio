import { Link } from 'react-router-dom';
import useDocumentTitle from 'utilities/useDocumentTitle';
import { ReactComponent as WaveSVG } from 'assets/wave2.svg';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  useDocumentTitle('Anna Piwonska | Page Not Found');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.error_code}>404</div>
        <div className={styles.error_message}>
          We are sorry, the page was not found
        </div>
        <div className={styles.error_actions}>
          <span className={styles.error_action}>
            Go to the
            <Link to="/" className={styles.link}>
              main page
            </Link>
          </span>
          |
          <span className={styles.error_action}>
            Go to the
            <Link to="/projects" className={styles.link}>
              projects page
            </Link>
          </span>
        </div>
      </div>
      <WaveSVG className={styles.wave} />
    </div>
  );
};

export default NotFound;
