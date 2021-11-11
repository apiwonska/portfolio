import React from 'react';
import useIntersection from 'utilities/useIntersection';
import styles from './Project.module.css';

const Img: React.FC<{ image: string }> = ({ image }) => {
  const imageRef = useIntersection<HTMLImageElement>(styles.image__isVisible, {
    threshold: 0.3,
  });

  return (
    <img
      // eslint-disable-next-line
    src={require(`../../assets/projects/${image}`).default}
      alt=""
      className={styles.image}
      ref={imageRef}
    />
  );
};

export default Img;
