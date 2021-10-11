import SectionHeader from 'shared/SectionHeader';
import pic from 'assets/letter_sm.svg';
import styles from './Contact.module.css';
import Form from './Form';

const Contact: React.FC = () => (
  <section id="contact" className={styles.section}>
    <div className={styles.title}>
      <SectionHeader>Contact</SectionHeader>
    </div>
    <div className={styles.form_container}>
      <Form />
    </div>
    <div className={styles.illustration}>
      {/* <div className={styles.illustration_wrapper}>
        Email: a.piwonska.dev@gmail.com
      </div> */}
      {/* <div className={styles.illustration_picWrapper}>
        <img src={pic} alt="" className={styles.illustration_pic} />
      </div> */}
    </div>
  </section>
);

export default Contact;
