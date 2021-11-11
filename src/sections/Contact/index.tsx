import SectionHeader from 'shared/SectionHeader';
import styles from './Contact.module.css';
import Form from './Form';

const Contact: React.FC = () => (
  <section id="contact" className={styles.content_bg} data-testid="contact">
    <div className={styles.content_bgClip}>
      <div className="container">
        <div className="container_text">
          <SectionHeader>Contact</SectionHeader>
        </div>

        <div className={styles.content_wrapper}>
          <Form />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
