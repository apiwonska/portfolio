import { useState, useEffect } from 'react';

import Hamburger from './Hamburger';
import Nav from './Nav';

import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState<boolean | null>(null);

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

  return (
    <div className={styles.nav_container}>
      <Hamburger smallScreen={smallScreen} isOpen={isOpen} setOpen={setOpen} />
      <Nav smallScreen={smallScreen} isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
};

export default Navigation;
