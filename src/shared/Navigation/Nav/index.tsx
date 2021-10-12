import { nanoid } from 'nanoid';
import NavLink from '../NavLink';
import styles from './Nav.module.css';

interface IProps {
  smallScreen: null | boolean;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const Nav: React.FC<IProps> = ({ smallScreen, isOpen, setOpen }) => {
  const renderLinks = sections.map((section) => (
    <NavLink to={section} key={nanoid()} setOpen={setOpen}>
      {section}
    </NavLink>
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
    <nav className={styles.navDesktop}>
      <ul className={styles.listDesktop}>{renderLinks}</ul>
    </nav>
  );
};

export default Nav;
