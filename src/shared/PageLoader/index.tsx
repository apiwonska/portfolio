import styles from './PageLoader.module.css';

const PageLoader: React.FC = () => (
  <div className={styles.background}>
    <div className={styles.loader} />
  </div>
);

export default PageLoader;
