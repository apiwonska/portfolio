import { useState, useEffect } from 'react';

import Hamburger from './Hamburger';
import Nav from './Nav';
import styles from './Navigation.module.css';

export type TNavbarThemes = 'transparent' | 'dark' | 'light';
export type THamburgerColors = 'dark' | 'light';

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState<boolean | null>(null);
  const [navbarTheme, setNavbarTheme] = useState<TNavbarThemes>('transparent');
  const [hamburgerColor, setHamburgerColor] =
    useState<THamburgerColors>('light');

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 500px)');

    if (mediaQueryList.matches) {
      setOpen(false);
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }

    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpen(false);
        setSmallScreen(true);
      } else {
        setSmallScreen(false);
      }
    };

    // more performant than listening on resize
    mediaQueryList.addEventListener('change', onChange);
    return () => {
      mediaQueryList.removeEventListener('change', onChange);
    };
  }, []);

  // Prevent page scroll in the background when mobile navigation open
  useEffect(() => {
    document.body.style.overflow = isOpen && smallScreen ? 'hidden' : 'unset';
  }, [isOpen, smallScreen]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 100) {
        setNavbarTheme('transparent');
      } else if (window.scrollY <= window.innerHeight - 45) {
        setNavbarTheme('dark');
      } else setNavbarTheme('light');

      if (window.scrollY <= window.innerHeight - 50) {
        setHamburgerColor('light');
      } else {
        setHamburgerColor('dark');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.addEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className={styles.nav_container}>
      <Hamburger
        smallScreen={smallScreen}
        isOpen={isOpen}
        setOpen={setOpen}
        color={hamburgerColor}
      />
      <Nav
        smallScreen={smallScreen}
        isOpen={isOpen}
        setOpen={setOpen}
        theme={navbarTheme}
      />
    </div>
  );
};

export default Navigation;
