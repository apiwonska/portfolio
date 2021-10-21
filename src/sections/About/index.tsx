import SectionHeader from 'shared/SectionHeader';
import photo from 'assets/my-photo.png';
import styles from './About.module.css';

const About: React.FC = () => (
  <section id="about" className="section">
    <div className="container">
      <SectionHeader>About</SectionHeader>
    </div>

    <div className={styles.content_bg}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <img src={photo} alt="" className={styles.photo} />
          <div className={styles.description_wrapper}>
            <div className={styles.description}>
              <p>
                I’m a self-taught developer based in Warsaw, Poland. I love to
                create beautiful, functional and accessible applications. I’m
                interested mostly in front-end part. Former structural enginer.
              </p>
              <p>
                Except passion for coding I enjoy afro-cuban dance, spanish
                language, travelling and painting.
              </p>
            </div>
            <div className={styles.additionalInfo}>
              <p>Location: Warsaw, Poland</p>
              <p>Languages: Polish (native), English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
