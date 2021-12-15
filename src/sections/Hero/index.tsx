import { nanoid } from 'nanoid';
import ArrowDown from 'assets/ArrowDownSVG';
import LogoSVG from 'assets/LogoSVG';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const title = 'Anna Piwonska';
  const titleLetters = title.split('').map((letter) => {
    const styleName = letter === ' ' ? styles.space : styles.titleLetter;
    return (
      <span key={nanoid()} className={styleName}>
        {letter}
      </span>
    );
  });

  return (
    <header id="hero" className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.logo_wrapper}>
          <LogoSVG animated />
        </div>
        <h1 className="sr_only">Anna Piwonska, Front-end Developer</h1>
        <div className={styles.title} aria-hidden="true">
          {titleLetters}
        </div>
        <div className={styles.subtitle} aria-hidden="true">
          <span className={styles.subtitleText}>Front-end Developer</span>
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
    </header>
  );
};

export default Hero;
