import { nanoid } from 'nanoid';
import ArrowDown from 'assets/ArrowDownSVG';
import LogoSVG from 'assets/LogoSVG';
import { Link } from 'react-scroll';
import styles from './Home.module.css';

const Home: React.FC = () => {
  const title = 'Anna Piwonska';
  const titleLetters = title.split('').map((letter) => {
    const style = !letter ? { width: '0.5em' } : {};
    return (
      <span
        key={nanoid()}
        className={letter !== ' ' ? styles.titleLetter : ''}
        style={style}
      >
        {letter}
      </span>
    );
  });

  return (
    <section id="home" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <LogoSVG />
        </div>
        <h1 className="sr-only">Anna Piwonska, Front-end Developer</h1>
        <div className={styles.title} aria-hidden="true">
          {titleLetters}
        </div>
        <div className={styles.subtitle} aria-hidden="true">
          <span className={styles.subtitleText}>Front-End Developer</span>
        </div>
      </div>
      <Link
        to="about"
        className={styles.arrow_wrapper}
        smooth
        offset={0}
        duration={500}
      >
        <ArrowDown />
      </Link>
    </section>
  );
};

export default Home;
