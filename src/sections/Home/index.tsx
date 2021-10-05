import styles from './Home.module.css';

const Home: React.FC = () => (
  <section id="home" className={styles.section}>
    <div className={styles.banner_margin} />
    <div className={styles.banner}>
      <h1>
        <span className={styles.banner_title}>Hi,</span>
        <span className={styles.banner_title}>I&apos;m Anna Piwonska</span>
        <span className={styles.banner_subtitle}>Front-End Developer</span>
      </h1>
    </div>
  </section>
);

export default Home;
