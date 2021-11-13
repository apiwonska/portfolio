import SectionHeader from 'shared/SectionHeader';
import photo from 'assets/my-photo.png';
import useIntersection from 'utilities/useIntersection';
import styles from './About.module.css';

const About: React.FC = () => {
  const imageRef = useIntersection<HTMLImageElement>(styles.photo__isVisible, {
    threshold: 0.7,
  });
  const textRef = useIntersection<HTMLDivElement>(
    styles.description__isVisible,
    {
      threshold: 0.7,
    }
  );

  return (
    <section id="about" className={styles.content_bg}>
      <div className="container">
        <div className="container_text">
          <SectionHeader>About</SectionHeader>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.photo_wrapper}>
            <img
              id="my-photo"
              src={photo}
              alt=""
              className={styles.photo}
              ref={imageRef}
            />
          </div>
          <div className={styles.description_wrapper} ref={textRef}>
            <div className={styles.description}>
              <p className={styles.hideOverflow}>
                <span className={styles.text}>
                  I’m a self-taught developer based in Warsaw, Poland. I love to
                  create beautiful, functional and accessible applications. I’m
                  interested mostly in front-end part. Former structural
                  enginer.
                </span>
              </p>
              <p className={styles.hideOverflow}>
                <span className={styles.text}>
                  Except passion for coding I enjoy afro-cuban dance, spanish
                  language, travelling and painting.
                </span>
              </p>
            </div>
            <div className={styles.additionalInfo}>
              <p className={styles.hideOverflow}>
                <span className={styles.text}>
                  <span className={styles.text__underlined}>Location:</span>{' '}
                  Warsaw, Poland
                </span>
              </p>
              <p className={styles.hideOverflow}>
                <span className={styles.text}>
                  <span className={styles.text__underlined}>Languages:</span>{' '}
                  Polish (native), English
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
