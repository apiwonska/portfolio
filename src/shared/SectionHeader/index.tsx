import React from 'react';
import useIntersection from 'utilities/useIntersection';
import { nanoid } from 'nanoid';
import styles from './SectionHeader.module.scss';

type Props = {
  children: string;
};

const textToLetters = (text: string) =>
  text.split('').map((letter) => {
    const style = !letter ? styles.space : styles.letter;
    return (
      <span className={style} key={nanoid()}>
        {letter}
      </span>
    );
  });

const SectionHeader: React.FC<Props> = ({ children }) => {
  const headerRef = useIntersection<HTMLHeadingElement>(
    styles.sectionHeader__isVisible,
    { rootMargin: '0px 0px -100px 0px', threshold: 1 },
    [children]
  );
  const letters = React.useMemo(() => textToLetters(children), [children]);

  return (
    <div className={styles.sectionHeader_wrapper} ref={headerRef}>
      <h2 className={styles.sectionHeader}>{letters}</h2>
    </div>
  );
};

export default SectionHeader;
