import classNames from 'classnames';

import NavLink from '../NavLink';
import styles from './Nav.module.css';
import { TNavbarThemes } from '../index';

interface IProps {
  smallScreen: null | boolean;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: TNavbarThemes;
}

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const Nav: React.FC<IProps> = ({ smallScreen, isOpen, setOpen, theme }) => {
  const navClass = classNames({
    [styles.navDesktop__dark]: theme === 'dark',
    [styles.navDesktop__light]: theme === 'light',
    [styles.navDesktop__transparent]: theme === 'transparent',
  });

  const renderLinks = sections.map((section) => (
    <li key={section}>
      <NavLink to={section} setOpen={setOpen}>
        {section}
      </NavLink>
    </li>
  ));

  if (smallScreen) {
    return (
      <nav className={isOpen ? styles.navMobile : styles.navMobile__hidden}>
        <ul className={isOpen ? styles.listMobile : styles.listMobile__hidden}>
          {renderLinks}
        </ul>
      </nav>
    );
  }
  return (
    <nav className={navClass}>
      <ul className={styles.listDesktop}>{renderLinks}</ul>
    </nav>
  );
};

export default Nav;
