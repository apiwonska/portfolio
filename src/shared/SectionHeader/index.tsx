import styles from './SectionHeader.module.scss';

type Props = {
  children: string;
};

const SectionHeader: React.FC<Props> = ({ children }) => (
  <h2 className={styles.sectionHeader}>{children}</h2>
);

export default SectionHeader;
