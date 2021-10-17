import SectionHeader from 'shared/SectionHeader';
import styles from './Contact.module.css';
import Form from './Form';

const Contact: React.FC = () => (
  <section id="contact">
    <SectionHeader>Contact</SectionHeader>
    <div className={styles.form_container}>
      <Form />
    </div>
  </section>
);

export default Contact;
