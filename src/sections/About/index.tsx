import SectionHeader from 'shared/SectionHeader';
import photo from 'assets/my-photo.png';
import styles from './About.module.css';

const About: React.FC = () => (
  <section id="about" className={styles.section}>
    <div className={styles.title}>
      <SectionHeader>About</SectionHeader>
    </div>
    <div className={styles.margin__deco} />
    <div className={styles.description}>
      <p>
        I’m a self-taught developer based in Warsaw, Poland. I love to create
        beautiful, functional and accessible applications. I’m interested mostly
        in front-end part. Former structural enginer.
      </p>
      <p>
        Except passion for coding I enjoy afro-cuban dance, spanish language,
        travelling and painting.
      </p>
    </div>
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo} alt="" />
      </div>
    </div>
  </section>
);

export default About;
