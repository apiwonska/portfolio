import Navigation from 'shared/Navigation';
import styles from './PageLayout.module.css';
import Footer from '../Footer';

const PageLayout: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    <Navigation />
    <>{children}</>
    <Footer />
  </div>
);

export default PageLayout;
