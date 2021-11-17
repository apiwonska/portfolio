import styles from './ProjectCard.module.css';

const Img: React.FC<{ cardImg: string }> = ({ cardImg }) => (
  <img
    // eslint-disable-next-line
    src={require(`../../assets/projects/${cardImg}`).default}
    alt=""
    loading="lazy"
    className={styles.card_img}
  />
);

export default Img;
