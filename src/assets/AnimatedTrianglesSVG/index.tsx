import styles from './AnimatedTrianglesSVG.module.scss';

const AnimatedTriangles: React.FC = () => (
  <svg
    width="250"
    height="260"
    viewBox="0 0 162 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.svg}
  >
    <path
      d="M0 130.096L88.9175 0.192383V260L0 130.096Z"
      fill="#C4C4C4"
      className={styles.triangle}
    />
    <path
      d="M36.0825 130.096L125 0.192383V260L36.0825 130.096Z"
      fill="#C4C4C4"
      fillOpacity="0.7"
      className={styles.triangle}
    />
    <path
      d="M72.165 130.096L161.083 0.192383V260L72.165 130.096Z"
      fill="#C4C4C4"
      fillOpacity="0.5"
      className={styles.triangle}
    />
  </svg>
);

export default AnimatedTriangles;
