import { Fade as HamburgerReact } from 'hamburger-react';
import styles from './Hamburger.module.css';

interface IProps {
  smallScreen: null | boolean;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hamburger: React.FC<IProps> = ({ smallScreen, isOpen, setOpen }) => (
  <div
    className={smallScreen ? styles.hamburger : styles.hamburger__hidden}
    aria-hidden="true"
  >
    <div className={isOpen ? styles.hamburger_bg__open : styles.hamburger_bg} />
    <HamburgerReact
      toggled={isOpen}
      toggle={setOpen}
      hideOutline={false}
      easing="ease-in"
      label="Toggle menu"
    />
  </div>
);

export default Hamburger;
