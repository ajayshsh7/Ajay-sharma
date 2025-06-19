'use client';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.contactH}>Contact Me</h1>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className={styles.form}
      >
        <input className={styles.input} type="hidden" name="_redirect" value="/thank-you" />
        <div className={styles.formGrid}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input className={styles.input} type="text" name="name" id="name" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input className={styles.input} type="email" name="email" id="email" required />
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input className={styles.input} type="text" name="subject" id="subject" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea className={styles.textarea} name="message" id="message" rows={5} required></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}
