import styles from './PageLayout.module.css';

const PageLayout: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    <main>{children}</main>
    <footer className={styles.footer}>
      Designed and executed by Anna Piwonska
    </footer>
  </div>
);

export default PageLayout;
