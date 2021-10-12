import { useState, useEffect, useRef } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
// import Icon, { iconEnum } from 'assets/Icon';
import NavLink from './NavLink';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState<boolean | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setScreen = () => {
      if (window.matchMedia('(max-width: 500px)').matches) {
        setSmallScreen(true);
        setOpen(false);
      } else {
        setSmallScreen(false);
        setOpen(true);
      }
    };

    setScreen();
    window.addEventListener('resize', setScreen);
    return () => {
      window.removeEventListener('resize', setScreen);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen && smallScreen ? 'hidden' : 'unset';
    // console.log(isOpen, smallScreen);
  }, [isOpen, smallScreen]);

  return (
    <div
      // className={isOpen ? styles.nav_container : styles.nav_container__closed}
      className={styles.nav_container}
      ref={navRef}
    >
      {smallScreen && (
        <div className={styles.hamburger}>
          <div
            className={isOpen ? styles.hamburger_bg__open : styles.hamburger_bg}
          />
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            hideOutline={false}
            easing="ease-in"
            label="Toggle menu"
          />
        </div>
      )}

      <nav className={isOpen ? styles.nav_main : styles.nav_main__hidden}>
        <ul className={isOpen ? styles.list : styles.list__hidden}>
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </ul>

        {/* <a
          href="https://github.com/apiwonska"
          className={styles.linkIcon}
          aria-label="go to Anna Piwonska Github Page"
        >
          <Icon name={iconEnum.Github} />
        </a> */}
      </nav>
    </div>
  );
};

export default Navigation;
