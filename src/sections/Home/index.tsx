import { nanoid } from 'nanoid';
import ArrowDown from 'assets/ArrowDownSVG';
import BigLogoSVG from 'assets/BigLogoSVG';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const title = 'Anna Piwonska';
  const titleLetters = title.split('').map((letter) => {
    const style = !letter ? { width: '0.5em' } : {};
    return (
      <>
        <span
          key={nanoid()}
          className={letter !== ' ' ? styles.titleLetter : ''}
          style={style}
        >
          {letter}
        </span>
      </>
    );
  });

  return (
    <section id="home" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.bigLogo_wrapper}>
          <BigLogoSVG />
        </div>
        <h1 className="sr-only">Anna Piwonska, Front-end Developer</h1>
        <div className={styles.title} aria-hidden="true">
          {titleLetters}
        </div>
        <div className={styles.subtitle} aria-hidden="true">
          <span className={styles.subtitleText}>Front-End Developer</span>
        </div>
      </div>
      <a className={styles.arrow_wrapper} href="#about">
        <ArrowDown />
      </a>
    </section>
  );
};

export default Home;
