import { Link } from 'react-router-dom';
import classNames from 'classnames';
import useIntersection from 'utilities/useIntersection';
import styles from './CustomLink.module.css';

interface IProps {
  to: string;
  icon?: 'arrow-left' | 'arrow-right';
  navlink?: boolean;
  animation?: boolean;
}

const CustomLink: React.FC<IProps> = ({
  to,
  icon,
  animation = false,
  navlink = false,
  children,
}) => {
  // Don't increase treshold of the link, it will not work because the text is moved vertically
  const linkRef = useIntersection<HTMLSpanElement>(styles.link__isVisible, {
    threshold: 0,
  });

  const classes = classNames(styles.link, {
    [styles.link_arrowRight]: icon === 'arrow-right',
    [styles.link_arrowLeft]: icon === 'arrow-left',
    [styles.link_no_animation]: icon && !animation,
    [styles.link_nav]: navlink,
  });

  return (
    <span className={classes} ref={linkRef}>
      <Link to={to}>{children}</Link>
    </span>
  );
};

export default CustomLink;
