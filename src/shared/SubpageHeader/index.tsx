import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './SubpageHeader.module.css';

const SubpageHeader: React.FC = () => {
  const navlinkClasses = classNames(styles.headerlink, styles.navlink);
  const nameClasses = classNames(styles.headerlink, styles.name)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerlink_wrapper}>
          <Link to="/" className={nameClasses}>
            Anna Piwońska
          </Link>
        </div>
        <nav className={styles.nav}>
          <div className={styles.headerlink_wrapper}>
            <Link to="/" className={navlinkClasses}>
              Main page
            </Link>
            <Link to="/projects" className={navlinkClasses}>
              Projects
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SubpageHeader;
