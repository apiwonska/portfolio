import styles from './LogoSVG.module.css';

const Logo: React.FC = () => (
  <>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 250 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.logo}
    >
      <path
        d="M249.447 76.9703C248.428 104.099 232.871 127.252 210.551 139.213C213.027 131.21 214.51 122.718 214.841 113.894C216.757 62.8891 179.446 20.0286 131.44 18.226C130.261 18.1817 129.087 18.1626 127.918 18.1683C141.496 6.56148 159.303 -0.170175 178.561 0.552902C219.237 2.08026 250.974 36.2935 249.447 76.9703Z"
        fill="#EF476F"
        fillOpacity="1"
        stroke="white"
        strokeOpacity="0"
        id="P"
        className={styles.letterP}
      />
      <path
        d="M45.9254 164.718L87.2511 253.946H4.72451H4.40506L4.40179 253.953H0.782597L106.617 25.4422L212.452 253.953H158.913L82.111 88.1274L81.6573 87.1478L81.2036 88.1274L45.9254 164.298L45.8281 164.508L45.9254 164.718Z"
        fill="url(#paint0_linear_216:119)"
        fillOpacity="1"
        stroke="white"
        strokeOpacity="0"
        id="A"
        className={styles.letterA}
      />
      <defs>
        <linearGradient
          id="paint0_linear_216:119"
          x1="158.56"
          y1="128.475"
          x2="-0.303679"
          y2="244.503"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EF476F" />
          <stop offset="1" stopColor="#8D3B4F" />
        </linearGradient>
      </defs>
    </svg>
  </>
);

export default Logo;
