import { useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import styles from './SectionHeader.module.scss';

type Props = {
  children: string;
};

const SectionHeader: React.FC<Props> = ({ children }) => {
  const headerRef = useRef<null | HTMLHeadingElement>(null);

  useEffect(() => {
    const intersection = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add(styles.sectionHeader__isVisible);
          observer.unobserve(entry.target);
        }
      });
    });
    if (headerRef.current) {
      intersection.observe(headerRef.current);
    }
  }, []);

  const textToLetters = children.split('').map((letter) => {
    const style = !letter ? styles.space : styles.letter;
    return (
      <span className={style} key={nanoid()}>
        {letter}
      </span>
    );
  });

  return (
    <div className={styles.sectionHeader_wrapper} ref={headerRef}>
      <h2 className={styles.sectionHeader}>{textToLetters}</h2>
    </div>
  );
};

export default SectionHeader;
