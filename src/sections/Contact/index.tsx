import SectionHeader from 'shared/SectionHeader';
import styles from './Contact.module.css';
import Form from './Form';

const Contact: React.FC = () => (
  <section id="contact" className={styles.content_bg}>
    <div className={styles.content_bgClip}>
      <div className="container">
        <SectionHeader>Contact</SectionHeader>

        <div className={styles.content_wrapper}>
          <div className={styles.form_wrapper}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
