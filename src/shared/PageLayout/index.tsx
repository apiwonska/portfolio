import Navigation from 'shared/Navigation';
import Cursor from 'shared/Cursor';
import Icon, { iconEnum } from 'assets/Icon';
import styles from './PageLayout.module.css';

const PageLayout: React.FC = ({ children }) => (
  <>
    <div className={styles.wrapper}>
      <Navigation />
      <>{children}</>
      <footer className={styles.footer}>
        Made with
        <div className={styles.heartIcon}>
          <Icon name={iconEnum.Heart} fill="#EF476F" />
        </div>
        by Anna Piwonska
      </footer>
    </div>
    <Cursor />
  </>
);

export default PageLayout;
