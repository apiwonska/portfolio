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

const sections = [
  { id: 'hero', name: 'home' },
  { id: 'about', name: 'about' },
  { id: 'skills', name: 'skills' },
  { id: 'sample-projects', name: 'projects' },
  { id: 'contact', name: 'contact' },
];

const Nav: React.FC<IProps> = ({ smallScreen, isOpen, setOpen, theme }) => {
  const navClass = classNames({
    [styles.navDesktop__dark]: theme === 'dark',
    [styles.navDesktop__light]: theme === 'light',
    [styles.navDesktop__transparent]: theme === 'transparent',
  });

  const renderLinks = sections.map(({ id, name }) => (
    <li key={id}>
      <NavLink to={id} setOpen={setOpen}>
        {name}
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
