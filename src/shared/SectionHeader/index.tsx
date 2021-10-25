import { useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import styles from './SectionHeader.module.scss';

type Props = {
  children: string;
};

const SectionHeader: React.FC<Props> = ({ children }) => {
  const headerRef = useRef<null | HTMLHeadingElement>(null);

  useEffect(() => {
    const intersection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          headerRef.current?.classList.add(styles.sectionHeader_show);
        } else {
          headerRef.current?.classList.remove(styles.sectionHeader_show);
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
    <h2 className={styles.sectionHeader} ref={headerRef}>
      {textToLetters}
    </h2>
  );
};

export default SectionHeader;
