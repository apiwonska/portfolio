import SectionHeader from 'shared/SectionHeader';
import AnimatedTrianglesSVG from 'assets/AnimatedTrianglesSVG';
import styles from './Contact.module.css';
import Form from './Form';

const Contact: React.FC = () => (
  <section id="contact" className="section">
    <div className="container">
      <SectionHeader>Contact</SectionHeader>
    </div>

    <div className={styles.content_bg}>
      <div className={styles.content_bgClip}>
        <div className={styles.content_wrapper}>
          <div className={styles.form_wrapper}>
            <Form />
          </div>
          <div className={styles.arrows_wrapper}>
            <AnimatedTrianglesSVG />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
