import { useState, useEffect, useRef } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import Icon, { iconEnum } from 'assets/Icon';
import NavLink from './NavLink';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [largeScreen, setLargeScreen] = useState<boolean | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setScreen = () => {
      const isLargeScreen = window.innerWidth >= 1400;
      if (largeScreen !== isLargeScreen) {
        setOpen(!!isLargeScreen);
        setLargeScreen(isLargeScreen);
      }
    };

    if (largeScreen === null) setScreen();
    window.addEventListener('resize', setScreen);

    return () => {
      window.removeEventListener('resize', setScreen);
    };
  });

  return (
    <div className={isOpen ? styles.nav : styles.nav__closed} ref={navRef}>
      {!largeScreen && (
        <div className={styles.nav_hamburger}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            hideOutline={false}
            easing="ease-in"
            label="Toggle menu"
          />
        </div>
      )}

      <div className={isOpen ? styles.nav_content : styles.nav_content__hidden}>
        <a
          href="https://github.com/apiwonska"
          className={styles.nav_linkIcon}
          aria-label="go to Anna Piwonska Github Page"
        >
          <Icon name={iconEnum.Github} />
        </a>
        <nav className={styles.nav_main}>
          <ul className={styles.nav_list}>
            <NavLink to="home">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="skills">Skills</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
