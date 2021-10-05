import { Link } from 'react-scroll';
import styles from './Navigation.module.css';

type Props = {
  to: string;
  children: string;
};

const NavLink: React.FC<Props> = ({ to, children }) => (
  <li className={styles.nav_item}>
    <Link
      to={to}
      className={styles.nav_link}
      activeClass={styles.nav_link__active}
      spy
      smooth
      offset={0}
      duration={500}
      tabIndex={0}
    >
      {children}
    </Link>
  </li>
);

export default NavLink;
