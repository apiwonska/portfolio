import { Fade as HamburgerReact } from 'hamburger-react';
import classNames from 'classnames';
import styles from './Hamburger.module.css';
import { THamburgerColors } from '../index';

interface IProps {
  smallScreen: null | boolean;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: THamburgerColors;
}

const Hamburger: React.FC<IProps> = ({
  smallScreen,
  isOpen,
  setOpen,
  color,
}) => {
  const hamburgerClasses = classNames(styles.hamburger, {
    [styles.dark]: color === 'dark' && !isOpen,
    [styles.hidden]: !smallScreen,
  });

  const bgClasses = classNames({
    [styles.bg]: !isOpen && color === 'dark',
    [styles.bg__open]: isOpen,
  });

  return (
    <div className={hamburgerClasses} aria-hidden="true">
      <div className={bgClasses} />
      <HamburgerReact
        toggled={isOpen}
        toggle={setOpen}
        hideOutline={false}
        easing="ease-in"
        label="Toggle menu"
      />
    </div>
  );
};

export default Hamburger;
