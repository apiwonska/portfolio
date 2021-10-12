import { Link } from 'react-scroll';
import styles from './NavLink.module.css';

type Props = {
  to: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: string;
};

const NavLink: React.FC<Props> = ({ to, setOpen, children }) => {
  const onClick = () => {
    setOpen(false);
  };

  return (
    <li>
      <Link
        to={to}
        className={styles.link}
        activeClass={styles.link__active}
        spy
        smooth
        offset={0}
        duration={500}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
