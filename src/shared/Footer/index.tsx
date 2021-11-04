import Icon, { iconEnum } from 'assets/Icon';
import styles from './Footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    Made with
    <div className={styles.heartIcon}>
      <Icon name={iconEnum.Heart} fill="#EF476F" />
    </div>
    by Anna Piwonska
  </footer>
);

export default Footer;
