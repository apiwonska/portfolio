import React from 'react';
import useIntersection from 'utilities/useIntersection';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import styles from './SectionHeader.module.scss';

interface Props {
  children: string;
  level?: 'h1' | 'h2';
}

const textToLetters = (text: string) =>
  text.split('').map((letter) => {
    const style = !letter ? styles.space : styles.letter;
    return (
      <span className={style} key={nanoid()}>
        {letter}
      </span>
    );
  });

const SectionHeader: React.FC<Props> = ({ children, level }) => {
  const headerRef = useIntersection<HTMLHeadingElement>(
    styles.sectionHeader__isVisible,
    { rootMargin: '0px 0px -100px 0px', threshold: 1 },
    [children]
  );
  const letters = React.useMemo(() => textToLetters(children), [children]);
  const wrapperClasses = classNames(styles.sectionHeader_wrapper, {
    [styles.h1TopMargin]: level === 'h1',
  });

  return (
    <div className={wrapperClasses} ref={headerRef}>
      {level === 'h2' && <h2 className={styles.sectionHeader}>{letters}</h2>}
      {level === 'h1' && <h1 className={styles.sectionHeader}>{letters}</h1>}
    </div>
  );
};

SectionHeader.defaultProps = { level: 'h2' };

export default SectionHeader;
