import Navigation from 'shared/Navigation';
import Cursor from 'shared/Cursor';
import styles from './PageLayout.module.css';

const PageLayout: React.FC = ({ children }) => (
  <>
    <div className={styles.wrapper}>
      <Navigation />
      <main>{children}</main>
      <footer className={styles.footer}>
        Designed and executed by Anna Piwonska
      </footer>
    </div>
    <Cursor />
  </>
);

export default PageLayout;
